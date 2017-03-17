'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocalForageStore = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _localforage = require('localforage');

var _localforage2 = _interopRequireDefault(_localforage);

var _plump = require('plump');

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_bluebird2.default.config({ warnings: false });

var LocalForageStore = exports.LocalForageStore = function (_KeyValueStore) {
  _inherits(LocalForageStore, _KeyValueStore);

  function LocalForageStore() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, LocalForageStore);

    var _this = _possibleConstructorReturn(this, (LocalForageStore.__proto__ || Object.getPrototypeOf(LocalForageStore)).call(this));

    _this.isCache = true;
    _this.terminal = opts.terminal;
    _localforage2.default.config({
      name: opts.name || 'Trellis Storage',
      storeName: opts.storeName || 'localCache'
    });
    return _this;
  }

  _createClass(LocalForageStore, [{
    key: '_keys',
    value: function _keys(typeName) {
      return _bluebird2.default.resolve(_localforage2.default.keys()).then(function (keyArray) {
        return keyArray.filter(function (k) {
          return k.indexOf(typeName + ':attributes:') === 0;
        });
      });
    }
  }, {
    key: '_get',
    value: function _get(k) {
      return _bluebird2.default.resolve(_localforage2.default.getItem(k));
    }
  }, {
    key: '_set',
    value: function _set(k, v) {
      return _bluebird2.default.resolve(_localforage2.default.setItem(k, v));
    }
  }, {
    key: '_del',
    value: function _del(k) {
      return _bluebird2.default.resolve(_localforage2.default.removeItem(k));
    }
  }]);

  return LocalForageStore;
}(_plump.KeyValueStore);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2FsZm9yYWdlLmpzIl0sIm5hbWVzIjpbImNvbmZpZyIsIndhcm5pbmdzIiwiTG9jYWxGb3JhZ2VTdG9yZSIsIm9wdHMiLCJpc0NhY2hlIiwidGVybWluYWwiLCJuYW1lIiwic3RvcmVOYW1lIiwidHlwZU5hbWUiLCJyZXNvbHZlIiwia2V5cyIsInRoZW4iLCJrZXlBcnJheSIsImZpbHRlciIsImsiLCJpbmRleE9mIiwiZ2V0SXRlbSIsInYiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0EsbUJBQVNBLE1BQVQsQ0FBZ0IsRUFBRUMsVUFBVSxLQUFaLEVBQWhCOztJQUVhQyxnQixXQUFBQSxnQjs7O0FBRVgsOEJBQXVCO0FBQUEsUUFBWEMsSUFBVyx1RUFBSixFQUFJOztBQUFBOztBQUFBOztBQUVyQixVQUFLQyxPQUFMLEdBQWUsSUFBZjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0JGLEtBQUtFLFFBQXJCO0FBQ0EsMEJBQVlMLE1BQVosQ0FBbUI7QUFDakJNLFlBQU1ILEtBQUtHLElBQUwsSUFBYSxpQkFERjtBQUVqQkMsaUJBQVdKLEtBQUtJLFNBQUwsSUFBa0I7QUFGWixLQUFuQjtBQUpxQjtBQVF0Qjs7OzswQkFFS0MsUSxFQUFVO0FBQ2QsYUFBTyxtQkFBU0MsT0FBVCxDQUFpQixzQkFBWUMsSUFBWixFQUFqQixFQUNOQyxJQURNLENBQ0QsVUFBQ0MsUUFBRDtBQUFBLGVBQWNBLFNBQVNDLE1BQVQsQ0FBZ0IsVUFBQ0MsQ0FBRDtBQUFBLGlCQUFPQSxFQUFFQyxPQUFGLENBQWFQLFFBQWIsdUJBQXlDLENBQWhEO0FBQUEsU0FBaEIsQ0FBZDtBQUFBLE9BREMsQ0FBUDtBQUVEOzs7eUJBRUlNLEMsRUFBRztBQUNOLGFBQU8sbUJBQVNMLE9BQVQsQ0FBaUIsc0JBQVlPLE9BQVosQ0FBb0JGLENBQXBCLENBQWpCLENBQVA7QUFDRDs7O3lCQUVJQSxDLEVBQUdHLEMsRUFBRztBQUNULGFBQU8sbUJBQVNSLE9BQVQsQ0FBaUIsc0JBQVlTLE9BQVosQ0FBb0JKLENBQXBCLEVBQXVCRyxDQUF2QixDQUFqQixDQUFQO0FBQ0Q7Ozt5QkFFSUgsQyxFQUFHO0FBQ04sYUFBTyxtQkFBU0wsT0FBVCxDQUFpQixzQkFBWVUsVUFBWixDQUF1QkwsQ0FBdkIsQ0FBakIsQ0FBUDtBQUNEIiwiZmlsZSI6ImxvY2FsZm9yYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxvY2FsZm9yYWdlIGZyb20gJ2xvY2FsZm9yYWdlJztcbmltcG9ydCB7IEtleVZhbHVlU3RvcmUgfSBmcm9tICdwbHVtcCc7XG5pbXBvcnQgQmx1ZWJpcmQgZnJvbSAnYmx1ZWJpcmQnO1xuQmx1ZWJpcmQuY29uZmlnKHsgd2FybmluZ3M6IGZhbHNlIH0pO1xuXG5leHBvcnQgY2xhc3MgTG9jYWxGb3JhZ2VTdG9yZSBleHRlbmRzIEtleVZhbHVlU3RvcmUge1xuXG4gIGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5pc0NhY2hlID0gdHJ1ZTtcbiAgICB0aGlzLnRlcm1pbmFsID0gb3B0cy50ZXJtaW5hbDtcbiAgICBsb2NhbGZvcmFnZS5jb25maWcoe1xuICAgICAgbmFtZTogb3B0cy5uYW1lIHx8ICdUcmVsbGlzIFN0b3JhZ2UnLFxuICAgICAgc3RvcmVOYW1lOiBvcHRzLnN0b3JlTmFtZSB8fCAnbG9jYWxDYWNoZScsXG4gICAgfSk7XG4gIH1cblxuICBfa2V5cyh0eXBlTmFtZSkge1xuICAgIHJldHVybiBCbHVlYmlyZC5yZXNvbHZlKGxvY2FsZm9yYWdlLmtleXMoKSlcbiAgICAudGhlbigoa2V5QXJyYXkpID0+IGtleUFycmF5LmZpbHRlcigoaykgPT4gay5pbmRleE9mKGAke3R5cGVOYW1lfTphdHRyaWJ1dGVzOmApID09PSAwKSk7XG4gIH1cblxuICBfZ2V0KGspIHtcbiAgICByZXR1cm4gQmx1ZWJpcmQucmVzb2x2ZShsb2NhbGZvcmFnZS5nZXRJdGVtKGspKTtcbiAgfVxuXG4gIF9zZXQoaywgdikge1xuICAgIHJldHVybiBCbHVlYmlyZC5yZXNvbHZlKGxvY2FsZm9yYWdlLnNldEl0ZW0oaywgdikpO1xuICB9XG5cbiAgX2RlbChrKSB7XG4gICAgcmV0dXJuIEJsdWViaXJkLnJlc29sdmUobG9jYWxmb3JhZ2UucmVtb3ZlSXRlbShrKSk7XG4gIH1cbn1cbiJdfQ==
