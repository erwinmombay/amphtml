/**
 * Copyright 2019 The AMP HTML Authors. All Rights Reserved.
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
'using strict';

const argv = require('minimist')(process.argv.slice(2));
const {
  maybePrintArgvMessages,
  shouldNotRun,
} = require('./runtime-test/helpers');
const {
  RuntimeTestRunner,
  RuntimeTestConfig,
} = require('./runtime-test/runtime-test-base');
const {buildRuntime} = require('../common/utils');
const {transform} = require('../server/new-server/transforms/dist/transform');
const globby = require('globby');
const fs = require('fs-extra');
const path = require('path');

class Runner extends RuntimeTestRunner {
  constructor(config) {
    super(config);
  }

  /** @override */
  async maybeBuild() {
    if (argv.nobuild) {
      return;
    }
    await buildRuntime();
  }
}

async function buildTransformedHtml() {
  const filePaths = await globby('./test/fixtures/**/*.html');
  let normalizedFilePath;
  try {
    for (const filePath of filePaths) {
      //await fs.copySync(filePath, `./test-bin/${filePath}`);
      const cwd = process.cwd();
      normalizedFilePath = path.normalize(filePath);
      const absoluteFilePath = `${cwd}/${normalizedFilePath}`;
      const transformedHtml = await transform(absoluteFilePath);
      const destPath = `${cwd}/test-bin/${normalizedFilePath}`;
      await fs.outputFile(destPath, transformedHtml);
    }
  } catch (e) {
    console./*OK*/log(
      `${normalizedFilePath} could not be transformed by the postHTML ` +
        `pipeline.\n${e.message}`
    );
  }
}

async function integration() {
  await buildTransformedHtml();

  if (shouldNotRun()) {
    return;
  }

  maybePrintArgvMessages();

  const config = new RuntimeTestConfig('integration');
  const runner = new Runner(config);

  await runner.setup();
  await runner.run();
  await runner.teardown();
}

module.exports = {
  integration,
};

integration.description = 'Runs integration tests';
integration.flags = {
  'chrome_canary': '  Runs tests on Chrome Canary',
  'chrome_flags': '  Uses the given flags to launch Chrome',
  'compiled': '  Runs tests against minified JS',
  'config':
    '  Sets the runtime\'s AMP_CONFIG to one of "prod" (default) or "canary"',
  'coverage': '  Run tests in code coverage mode',
  'new_server': '  Compiles the typescript code',
  'debug':
    '  Allow debug statements by auto opening devtools. NOTE: This only ' +
    'works in non headless mode.',
  'firefox': '  Runs tests on Firefox',
  'files': '  Runs tests for specific files',
  'grep': '  Runs tests that match the pattern',
  'headless': '  Run tests in a headless Chrome window',
  'ie': '  Runs tests on IE',
  'nobuild': '  Skips build step',
  'nohelp': '  Silence help messages that are printed prior to test run',
  'safari': '  Runs tests on Safari',
  'saucelabs': '  Runs tests on Sauce Labs (requires setup)',
  'stable': '  Runs Sauce Labs tests on stable browsers',
  'beta': '  Runs Sauce Labs tests on beta browsers',
  'testnames': '  Lists the name of each test being run',
  'verbose': '  With logging enabled',
  'watch': '  Watches for changes in files, runs corresponding test(s)',
};
