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

import {Experiments} from '../../src/experiments';


describe('Experiments', () => {

  function get(cookiesString) {
    return new Experiments({
      document: {
        cookie: cookiesString
      }
    });
  }

  it('should return "off" with no cookies', () => {
    expect(get(null).isOn('e1')).to.be.false;
    expect(get(undefined).isOn('e1')).to.be.false;
    expect(get('').isOn('e1')).to.be.false;
    expect(get('malformed').isOn('e1')).to.be.false;
    expect(get('exp-e2=1').isOn('e1')).to.be.false;
  });

  it('should return "off" when value is not 1', () => {
    expect(get('exp-e1=0').isOn('e1')).to.be.false;
    expect(get('exp-e1=false').isOn('e1')).to.be.false;
    expect(get('exp-e1=true').isOn('e1')).to.be.false;
  });

  it('should return "on" when value is 1', () => {
    expect(get('exp-e1=1').isOn('e1')).to.be.true;
    expect(get('exp-e1=1;').isOn('e1')).to.be.true;
    expect(get(' exp-e1 = 1 ').isOn('e1')).to.be.true;
    expect(get('exp-e1=1; exp-e2=0;').isOn('e1')).to.be.true;
  });

  it('should return "on" for a wierd cookie name', () => {
    expect(get('exp-e%26=1').isOn('e&')).to.be.true;
  });
});
