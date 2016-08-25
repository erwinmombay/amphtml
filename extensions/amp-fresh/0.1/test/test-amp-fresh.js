/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
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

import * as sinon from 'sinon';
import {AmpFresh} from '../amp-fresh';
import {installAmpFreshManager} from '../amp-fresh-manager';
import {resetServiceForTesting} from '../../../../src/service';
import {toggleExperiment} from '../../../../src/experiments';

describe('amp-fresh', () => {

  let sandbox;
  let fresh;
  let elem;
  let manager;

  beforeEach(() => {
    toggleExperiment(window, 'amp-fresh', true);
    elem = document.createElement('div');
    elem.setAttribute('id', 'amp-fresh-1');
    const span = document.createElement('span');
    span.textContent = 'hello';
    elem.appendChild(span);
    manager = installAmpFreshManager(window);
    fresh = new AmpFresh(elem);
    sandbox = sinon.sandbox.create();
    fresh.mutateElement = function(cb) {
      cb();
    };
  });

  afterEach(() => {
    toggleExperiment(window, 'amp-fresh', false);
    resetServiceForTesting(window, 'ampFreshManager');
    sandbox.restore();
  });

  it('should register to manager', () => {
    const registerSpy = sandbox.spy(manager, 'register');
    expect(registerSpy.callCount).to.equal(0);
    fresh.buildCallback();
    expect(registerSpy.callCount).to.equal(1);
  });

  it('should replace its subtree', () => {
    fresh.buildCallback();
    expect(fresh.element.innerHTML).to.equal('<span>hello</span>');
    const doc = document.createElement('div');
    doc.innerHTML = '<amp-fresh id="amp-fresh-1">' +
        '<span>hello</span><div>world</div>!</amp-fresh>';
    manager.update_(doc);
    expect(fresh.element.innerHTML).to.equal(
        '<span>hello</span><div>world</div>!');
  });
});
