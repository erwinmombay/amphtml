/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

const connect = require('gulp-connect');
const debounce = require('debounce');
const globby = require('globby');
const header = require('connect-header');
const minimist = require('minimist');
const morgan = require('morgan');
const open = require('open');
const os = require('os');
const path = require('path');
const {
  buildNewServer,
  SERVER_TRANSFORM_PATH,
} = require('../server/typescript-compile');
const {
  lazyBuildExtensions,
  lazyBuildJs,
  preBuildRuntimeFiles,
  preBuildExtensions,
} = require('../server/lazy-build');
const {createCtrlcHandler} = require('../common/ctrlcHandler');
const {cyan, green, red} = require('kleur/colors');
const {logServeMode, setServeMode} = require('../server/app-utils');
const {log} = require('../common/logging');
const {watchDebounceDelay} = require('./helpers');
const {watch} = require('chokidar');

const argv = minimist(process.argv.slice(2), {string: ['rtv']});

const HOST = argv.host || '0.0.0.0';
const PORT = argv.port || 8000;

/**
 * @typedef {{
 *   name: string?,
 *   root: string?,
 *   host: string?,
 *   port: number?,
 *   https: boolean?,
 *   preferHttp1: boolean?,
 *   silent: boolean?
 * }}
 */
const ConnectOptionsDef = {};

/**
 * @typedef {{
 *   lazyBuild: boolean,
 *   quiet: boolean,
 *   new_server: boolean
 * }}
 */
const ServerOptionsDef = {};

/**
 * @typedef {{
 *   compiled: boolean,
 *   esm: boolean,
 *   cdn: boolean,
 *   rtv: string?
 * }}
 */
const ModeOptionsDef = {};

// Used for logging.
let url = null;
let quiet = !!argv.quiet;

// Used for live reload.
const serverFiles = globby.sync([
  'build-system/server/**',
  `!${SERVER_TRANSFORM_PATH}/dist/**`,
]);

// Used to enable / disable lazy building.
let lazyBuild = false;

/**
 * Returns a list of middleware handler functions to use while serving
 * @return {!Array<function()>}
 */
function getMiddleware() {
  const middleware = [require('../server/app')]; // Lazy-required to enable live-reload
  if (!quiet) {
    middleware.push(morgan('dev'));
  }
  if (argv.cache) {
    middleware.push(header({'cache-control': 'max-age=600'}));
  }
  if (lazyBuild) {
    middleware.push(lazyBuildExtensions);
    middleware.push(lazyBuildJs);
  }
  return middleware;
}

/**
 * Launches a server and waits for it to fully start up
 *
 * @param {?ConnectOptionsDef} connectOptions
 * @param {?ServerOptionsDef} serverOptions
 * @param {?ModeOptionsDef} modeOptions
 */
async function startServer(
  connectOptions = {},
  serverOptions = {},
  modeOptions = {}
) {
  buildNewServer();
  if (serverOptions.lazyBuild) {
    lazyBuild = serverOptions.lazyBuild;
  }
  if (serverOptions.quiet) {
    quiet = serverOptions.quiet;
  }

  let started;
  const startedPromise = new Promise((resolve) => {
    started = resolve;
  });
  setServeMode(modeOptions);
  const options = {
    name: 'AMP Dev Server',
    root: process.cwd(),
    host: HOST,
    port: PORT,
    https: argv.https,
    preferHttp1: true,
    silent: true,
    middleware: getMiddleware,
    ...connectOptions,
  };
  connect.server(options, started);
  await startedPromise;

  /**
   * @param {string} host
   * @return {string}
   */
  function makeUrl(host) {
    return `http${options.https ? 's' : ''}://${host}:${options.port}`;
  }

  url = makeUrl(options.host);
  log(green('Started'), cyan(options.name), green('at:'));
  log('\t', cyan(url));
  for (const device of Object.entries(os.networkInterfaces())) {
    for (const detail of device[1]) {
      if (detail.family === 'IPv4') {
        log('\t', cyan(makeUrl(detail.address)));
      }
    }
  }
  if (argv.coverage == 'live') {
    const covUrl = `${url}/coverage`;
    log(green('Collecting live code coverage at'), cyan(covUrl));
    await Promise.all([open(covUrl), open(url)]);
  }
  logServeMode();
}

/**
 * Clears server files from the require cache to allow for in-process server
 * live-reload.
 */
function resetServerFiles() {
  for (const serverFile of serverFiles) {
    delete require.cache[path.resolve(serverFile)];
  }
}

/**
 * Stops the currently running server
 */
async function stopServer() {
  if (url) {
    connect.serverClose();
    log(green('Stopped server at'), cyan(url));
    url = null;
  }
}

/**
 * Closes the existing server and restarts it
 * @param {?serverOptionsDef} serverOptions
 */
async function restartServer(serverOptions = {}) {
  stopServer();
  try {
    buildNewServer();
  } catch {
    log(red('ERROR:'), 'Could not rebuild', cyan('AMP Server'));
    return;
  }
  resetServerFiles();
  startServer({}, serverOptions);
}

/**
 * Performs pre-build steps requested via command line args.
 */
async function performPreBuildSteps() {
  await preBuildRuntimeFiles();
  await preBuildExtensions();
}

/**
 * Entry point of the `gulp serve` task.
 */
async function serve() {
  await doServe();
}

/**
 * Starts a webserver at the repository root to serve built files.
 * @param {?ServerOptionsDef} serverOptions
 */
async function doServe(serverOptions = {}) {
  createCtrlcHandler('serve');
  const watchFunc = async () => {
    await restartServer();
  };
  watch(serverFiles).on('change', debounce(watchFunc, watchDebounceDelay));
  await startServer({}, {lazyBuild}, {});
  if (lazyBuild) {
    await performPreBuildSteps();
  }
}

module.exports = {
  serve,
  doServe,
  startServer,
  stopServer,
  HOST,
  PORT,
};

/* eslint "google-camelcase/google-camelcase": 0 */

serve.description = 'Starts a webserver at the project root directory';
serve.flags = {
  host: '  Hostname or IP address to bind to (default: localhost)',
  port: '  Specifies alternative port (default: 8000)',
  https: '  Use HTTPS server',
  quiet: "  Run in quiet mode and don't log HTTP requests",
  cache: '  Make local resources cacheable by the browser',
  no_caching_extensions: '  Disable caching for extensions',
  compiled: '  Serve minified JS',
  esm: '  Serve ESM JS (uses the new typescript server transforms)',
  cdn: '  Serve current prod JS',
  rtv: '  Serve JS from the RTV provided',
  coverage:
    '  Serve instrumented code to collect coverage info; use ' +
    '--coverage=live to auto-report coverage on page unload',
};
