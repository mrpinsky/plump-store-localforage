/* eslint-env node, mocha*/
/* eslint no-shadow: 0 */

import { LocalForageStore } from '../localforage';
import { testSuite } from 'plump';

testSuite({
  describe, it, before, after,
}, {
  ctor: LocalForageStore,
  opts: {
    terminal: true,
  },
  name: 'Plump Localforage Store',
});
