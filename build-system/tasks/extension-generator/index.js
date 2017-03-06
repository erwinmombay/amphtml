/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
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

var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs-extra');
var gulp = require('gulp-help')(require('gulp'));
var util = require('gulp-util');


const year = new Date().getFullYear();

function pascalCase(str) {
  return str[0].toUpperCase() + str.slice(1).replace(/-([a-z])/g,
      function(g) { return g[1].toUpperCase(); });
}

function getMarkdownExtensionFile(name) {
return `<!--
Copyright ${year} The AMP HTML Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS-IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->

# <a name="\`${name}\`"></a> \`${name}\`

<table>
  <tr>
    <td width="40%"><strong>Description</strong></td>
    <td>FILL THIS IN</td>
  </tr>
  <tr>
    <td width="40%"><strong>Availability</strong></td>
    <td>FILL THIS IN</td>
  </tr>
  <tr>
    <td width="40%"><strong>Required Script</strong></td>
    <td><code>&lt;script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/${name}-0.1.js">&lt;/script></code></td>
  </tr>
  <tr>
    <td class="col-fourty"><strong><a href="https://www.ampproject.org/docs/guides/responsive/control_layout.html">Supported Layouts</a></strong></td>
    <td>FILL THIS IN</td>
  </tr>
  <tr>
    <td width="40%"><strong>Examples</strong></td>
    <td>FILL THIS IN</td>
  </tr>
</table>

## Behavior

FILL THIS IN. What does this extension do?

## Attributes

FILL THIS IN. Does this extension allow for properties to configure?

## Validation
See [${name} rules](https://github.com/ampproject/amphtml/blob/master/extensions/${name}/0.1/validator-${name}.protoascii) in the AMP validator specification.
`;
}

function getJsTestExtensionFile(name) {
  const className = pascalCase(name);
  return `/**
 * Copyright ${year} The AMP HTML Authors. All Rights Reserved.
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

import {${className}} from '../${name}';

describes.realWin('${name}', {
  amp: {
    // TODO: ask dima what this does
    runtimeOn: true,
    // TODO: ask dima what this does
    ampdoc: 'single',
    // Tells the test to load our extension
    extensions: ['${name}'],
  }
}, env => {

  let win;
  let el;
  let impl;

  beforeEach(() => {
    win = env.win;
    el = win.document.createElement('${name}');
    impl = new ${className}(el);
  });

  it('should have hello world when built', () => {
    expect(impl.element.textContent).to.equal('');
    impl.buildCallback();
    expect(impl.element.textContent).to.equal('hello world');
  });
});
`;
}

function getJsExtensionFile(name) {
  const className = pascalCase(name);
  return `/**
 * Copyright ${year} The AMP HTML Authors. All Rights Reserved.
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

import {Layout} from '../../../src/layout';

export class ${className} extends AMP.BaseElement {

  /** @param {!AmpElement} element */
  constructor(element) {
    super(element);

    // Declare your properties here...
    /** @private {string} */
    this.myText_ = 'hello world';
  }

  /** @override */
  isLayoutSupported(layout) {
    // We declare that this element only supports \`layout="container"\` and
    // and \`layout="responsive"\`. See "TODO: ADD LINK TO LAYOUT SYSTEM DOCS"
    return layout == Layout.CONTAINER || layout == Layout.RESPONSIVE;
  }

  /** @override */
  buildCallback() {
    // Do initialization here unless they are JavaScript primities
    // then you can initialize them in constructor.

    // TODO: ask dima if this is an OK example, as i know it is safe to
    // manipulate direct element but not subtree.
    // Setup the component
    this.element.textContent = this.myText_;
  }
}

AMP.registerElement('${name}', ${className});
`;
}

function getExamplesFile(name) {
return `<!doctype html>
<html ⚡>
<head>
  <meta charset="utf-8">
  <title>${name} example</title>
  <link rel="canonical" href="amps.html">
  <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
  <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
  <style amp-custom>
    ${name} {
      color: red;
    }
  </style>
  <script async custom-element="${name}" src="https://cdn.ampproject.org/v0/${name}-0.1.js"></script>
  <script async src="https://cdn.ampproject.org/v0.js"></script>
</head>
<body>
  <${name} layout="container"></${name}>
</body>
</html>
`;
}

function makeExtension() {
  if (!argv.name) {
    util.log(util.colors.red(
        'Error! Please pass in the "--name" flag with a value'));
  }
  const name = argv.name;

  fs.mkdirpSync(`extensions/${name}/0.1/test`);
  fs.writeFileSync(`extensions/${name}/${name}.md`,
      getMarkdownExtensionFile(name));
  fs.writeFileSync(`extensions/${name}/0.1/${name}.js`,
      getJsExtensionFile(name));
  fs.writeFileSync(`extensions/${name}/0.1/test/test-${name}.js`,
      getJsTestExtensionFile(name));
  fs.writeFileSync(`examples/${name}.amp.html`,
      getExamplesFile(name));
}

gulp.task('make-extension', 'Create an extension skeleton', makeExtension, {
  options: {
    name: '  The name of the extension. Preferable prefixed with `amp-*`',
  }
});
