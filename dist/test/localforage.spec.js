'use strict';

var _localforage = require('../localforage');

var _plump = require('plump');

/* eslint-env node, mocha*/
/* eslint no-shadow: 0 */

(0, _plump.testSuite)({
  describe: describe, it: it, before: before, after: after
}, {
  ctor: _localforage.LocalForageStore,
  opts: {
    terminal: true
  },
  name: 'Plump Localforage Store'
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvbG9jYWxmb3JhZ2Uuc3BlYy5qcyJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIml0IiwiYmVmb3JlIiwiYWZ0ZXIiLCJjdG9yIiwib3B0cyIsInRlcm1pbmFsIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7QUFHQTs7QUFDQTs7QUFKQTtBQUNBOztBQUtBLHNCQUFVO0FBQ1JBLG9CQURRLEVBQ0VDLE1BREYsRUFDTUMsY0FETixFQUNjQztBQURkLENBQVYsRUFFRztBQUNEQyxxQ0FEQztBQUVEQyxRQUFNO0FBQ0pDLGNBQVU7QUFETixHQUZMO0FBS0RDLFFBQU07QUFMTCxDQUZIIiwiZmlsZSI6InRlc3QvbG9jYWxmb3JhZ2Uuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1lbnYgbm9kZSwgbW9jaGEqL1xuLyogZXNsaW50IG5vLXNoYWRvdzogMCAqL1xuXG5pbXBvcnQgeyBMb2NhbEZvcmFnZVN0b3JlIH0gZnJvbSAnLi4vbG9jYWxmb3JhZ2UnO1xuaW1wb3J0IHsgdGVzdFN1aXRlIH0gZnJvbSAncGx1bXAnO1xuXG50ZXN0U3VpdGUoe1xuICBkZXNjcmliZSwgaXQsIGJlZm9yZSwgYWZ0ZXIsXG59LCB7XG4gIGN0b3I6IExvY2FsRm9yYWdlU3RvcmUsXG4gIG9wdHM6IHtcbiAgICB0ZXJtaW5hbDogdHJ1ZSxcbiAgfSxcbiAgbmFtZTogJ1BsdW1wIExvY2FsZm9yYWdlIFN0b3JlJyxcbn0pO1xuIl19
