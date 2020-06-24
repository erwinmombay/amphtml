/**
 * Copyright 2020 The AMP HTML Authors. All Rights Reserved.
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

import minimist from 'minimist';
import {PostHTML} from 'posthtml';
import {readFileSync} from 'fs';

const argv = minimist(process.argv.slice(2));
const isTestMode: boolean = argv._.includes('server-tests');

const testDir = 'build-system/server/new-server/transforms/css/test';
const cwd = process.cwd();

const cssPath = isTestMode
  ? `${cwd}/${testDir}/test.css`
  : `${cwd}/build/css/v0.css`;
const versionPath = isTestMode
  ? `${cwd}/${testDir}/version.txt`
  : `${cwd}/dist/version.txt`;

const v0Css = readFileSync(cssPath).toString().trim();
const version = readFileSync(versionPath).toString().trim();

interface StyleNode extends PostHTML.Node {
  tag: 'style',
  attrs: {
    [key: string]: string | undefined
    'amp-runtime': string,
    'i-amphtml-version': string,
  },
  content: string[]
}

function prependAmpStyles(head: PostHTML.Node): PostHTML.Node {
  const content = head.content || [];
  const styleNode: StyleNode = {
    walk: head.walk,
    match: head.match,
    tag: 'style',
    attrs: {
      'amp-runtime': '',
      // Prefix 01 to simulate stable/prod version RTV prefix.
      'i-amphtml-version': `01${version}`,
    },
    content: [v0Css]
  };
  content.unshift(styleNode);
  return { ...head, content };
}

/**
 * Replace the src for every stories script tag.
 */
export default function(tree: PostHTML.Node): void {
  tree.match({tag: 'head'}, prependAmpStyles);
}
