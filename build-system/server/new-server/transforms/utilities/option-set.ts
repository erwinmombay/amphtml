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

 /**
 * A list of options to correspond with options.json for testing purposes.
 * To add an option, add the corresponding key-value pair into the
 * options.json, then add the field to this interface.
 */
export interface OptionSet {
  compiled?: boolean;
  esm?: boolean;
  port?: number;
<<<<<<< HEAD
<<<<<<< HEAD
  fortesting?: boolean;
=======
  fortesting?: boolean,
>>>>>>> 08f9ad245 (add more tests and fix bug for extention retention)
=======
  fortesting?: boolean;
>>>>>>> 8500d4dbd (Update build-system/server/new-server/transforms/utilities/option-set.ts)
  looseScriptSrcCheck?: boolean;
  useMaxNames?: boolean;
}
