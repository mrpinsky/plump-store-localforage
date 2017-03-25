"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var localforage = require("localforage");
var plump_1 = require("plump");
var Bluebird = require("bluebird");
Bluebird.config({ warnings: false });
var LocalForageStore = (function (_super) {
    __extends(LocalForageStore, _super);
    function LocalForageStore(opts) {
        if (opts === void 0) { opts = {}; }
        var _this = _super.call(this, opts) || this;
        localforage.config({
            name: opts.name || 'Trellis Storage',
            storeName: opts.storeName || 'localCache',
        });
        return _this;
    }
    LocalForageStore.prototype._keys = function (typeName) {
        return Bluebird.resolve(localforage.keys())
            .then(function (keyArray) { return keyArray.filter(function (k) { return k.indexOf(typeName + ":") === 0; }); });
    };
    LocalForageStore.prototype._get = function (k) {
        return Bluebird.resolve(localforage.getItem(k));
    };
    LocalForageStore.prototype._set = function (k, v) {
        return Bluebird.resolve(localforage.setItem(k, v));
    };
    LocalForageStore.prototype._del = function (k) {
        return Bluebird.resolve(localforage.removeItem(k)).then(function () { return null; });
    };
    return LocalForageStore;
}(plump_1.KeyValueStore));
exports.LocalForageStore = LocalForageStore;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2FsZm9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHlDQUEyQztBQUMzQywrQkFBaUQ7QUFDakQsbUNBQXFDO0FBQ3JDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUVyQztJQUFzQyxvQ0FBYTtJQUVqRCwwQkFBWSxJQUFrRTtRQUFsRSxxQkFBQSxFQUFBLFNBQWtFO1FBQTlFLFlBQ0Usa0JBQU0sSUFBSSxDQUFDLFNBS1o7UUFKQyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBQ2pCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLGlCQUFpQjtZQUNwQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsSUFBSSxZQUFZO1NBQzFDLENBQUMsQ0FBQzs7SUFDTCxDQUFDO0lBRUQsZ0NBQUssR0FBTCxVQUFNLFFBQWdCO1FBQ3BCLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUMxQyxJQUFJLENBQUMsVUFBQyxRQUFRLElBQUssT0FBQSxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBSSxRQUFRLE1BQUcsQ0FBQyxLQUFLLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxFQUF2RCxDQUF1RCxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVELCtCQUFJLEdBQUosVUFBSyxDQUFTO1FBQ1osTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBd0IsQ0FBQztJQUN6RSxDQUFDO0lBRUQsK0JBQUksR0FBSixVQUFLLENBQVMsRUFBRSxDQUFZO1FBQzFCLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELCtCQUFJLEdBQUosVUFBSyxDQUFTO1FBQ1osTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBd0IsQ0FBQztJQUM3RixDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQTFCQSxBQTBCQyxDQTFCcUMscUJBQWEsR0EwQmxEO0FBMUJZLDRDQUFnQiIsImZpbGUiOiJsb2NhbGZvcmFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGxvY2FsZm9yYWdlIGZyb20gJ2xvY2FsZm9yYWdlJztcbmltcG9ydCB7IEtleVZhbHVlU3RvcmUsIE1vZGVsRGF0YSB9IGZyb20gJ3BsdW1wJztcbmltcG9ydCAqIGFzIEJsdWViaXJkIGZyb20gJ2JsdWViaXJkJztcbkJsdWViaXJkLmNvbmZpZyh7IHdhcm5pbmdzOiBmYWxzZSB9KTtcblxuZXhwb3J0IGNsYXNzIExvY2FsRm9yYWdlU3RvcmUgZXh0ZW5kcyBLZXlWYWx1ZVN0b3JlIHtcblxuICBjb25zdHJ1Y3RvcihvcHRzOiB7dGVybWluYWw/OiBib29sZWFuLCBuYW1lPzogc3RyaW5nLCBzdG9yZU5hbWU/OiBzdHJpbmd9ID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcbiAgICBsb2NhbGZvcmFnZS5jb25maWcoe1xuICAgICAgbmFtZTogb3B0cy5uYW1lIHx8ICdUcmVsbGlzIFN0b3JhZ2UnLFxuICAgICAgc3RvcmVOYW1lOiBvcHRzLnN0b3JlTmFtZSB8fCAnbG9jYWxDYWNoZScsXG4gICAgfSk7XG4gIH1cblxuICBfa2V5cyh0eXBlTmFtZTogc3RyaW5nKTogQmx1ZWJpcmQ8c3RyaW5nW10+IHtcbiAgICByZXR1cm4gQmx1ZWJpcmQucmVzb2x2ZShsb2NhbGZvcmFnZS5rZXlzKCkpXG4gICAgLnRoZW4oKGtleUFycmF5KSA9PiBrZXlBcnJheS5maWx0ZXIoKGspID0+IGsuaW5kZXhPZihgJHt0eXBlTmFtZX06YCkgPT09IDApKTtcbiAgfVxuXG4gIF9nZXQoazogc3RyaW5nKTogQmx1ZWJpcmQ8TW9kZWxEYXRhPiB7XG4gICAgcmV0dXJuIEJsdWViaXJkLnJlc29sdmUobG9jYWxmb3JhZ2UuZ2V0SXRlbShrKSkgYXMgQmx1ZWJpcmQ8TW9kZWxEYXRhPjtcbiAgfVxuXG4gIF9zZXQoazogc3RyaW5nLCB2OiBNb2RlbERhdGEpIHtcbiAgICByZXR1cm4gQmx1ZWJpcmQucmVzb2x2ZShsb2NhbGZvcmFnZS5zZXRJdGVtKGssIHYpKTtcbiAgfVxuXG4gIF9kZWwoazogc3RyaW5nKTogQmx1ZWJpcmQ8TW9kZWxEYXRhPiB7XG4gICAgcmV0dXJuIEJsdWViaXJkLnJlc29sdmUobG9jYWxmb3JhZ2UucmVtb3ZlSXRlbShrKSkudGhlbigoKSA9PiBudWxsKSBhcyBCbHVlYmlyZDxNb2RlbERhdGE+O1xuICB9XG59XG4iXX0=
