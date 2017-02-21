/* eslint-env node, mocha*/
/* eslint no-shadow: 0 */

import { LocalForageStore } from '../src/index';
import { testSuite } from 'plump/test/storageTests';

testSuite({
  describe, it, before, after,
}, {
  ctor: LocalForageStore,
  opts: {
    terminal: true,
  },
  name: 'Plump Localforage Store',
});
