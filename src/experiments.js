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


/**
 * Experiments service provides information on which experiments are on or off.
 * All experiments are opt-in. A user has to visit the experiments page and
 * manually toggle the experiment on.
 * TODO(dvoytenko): provide the URL for the experiments page once ready.
 * @private Visible for testing.
 */
export class Experiments {
  /**
   * @param {!Window} win
   */
  constructor(win) {
    /** @const {!Window} */
    this.win = win;
  }

  /**
   * Whether the specified experiment is on or off.
   * @param {string} experimentId
   * @return {boolean}
   */
  isOn(experimentId) {
    const cookieString = this.win.document.cookie;
    if (!cookieString) {
      return false;
    }
    const name = `exp-${encodeURIComponent(experimentId)}`;
    const cookies = cookieString.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      const eq = cookie.indexOf('=');
      if (eq == -1) {
        continue;
      }
      if (cookie.substring(0, eq).trim() == name) {
        return cookie.substring(eq + 1).trim() == '1';
      }
    }
    return false;
  }
}


/**
 * @param {!Window} window
 * @return {!Experiments}
 */
export function experimentsFor(window) {
  return getService(window, 'experiments', () => {
    return new Experiments(window);
  });
}
