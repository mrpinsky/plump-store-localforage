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
function saneNumber(i) {
    return ((typeof i === 'number') && (!isNaN(i)) && (i !== Infinity) && (i !== -Infinity));
}
var LocalForageStore = (function (_super) {
    __extends(LocalForageStore, _super);
    function LocalForageStore(opts) {
        if (opts === void 0) { opts = {}; }
        var _this = _super.call(this, opts) || this;
        localforage.config({
            name: opts.name || 'Plump Storage',
            storeName: opts.storeName || 'localCache',
        });
        return _this;
    }
    LocalForageStore.prototype.addSchema = function (t) {
        var _this = this;
        return _super.prototype.addSchema.call(this, t)
            .then(function () {
            return _this._keys(t.typeName)
                .then(function (keyArray) {
                if (keyArray.length === 0) {
                    return 0;
                }
                else {
                    return keyArray.map(function (k) { return k.split(':')[1]; })
                        .map(function (k) { return parseInt(k, 10); })
                        .filter(function (i) { return saneNumber(i); })
                        .reduce(function (max, current) { return (current > max) ? current : max; }, 0);
                }
            }).then(function (n) {
                _this.maxKeys[t.typeName] = n;
            });
        });
    };
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUMsQ0FBd0IsQ0FBQztJQUN6RSxDQUFDO0lBRUQsK0JBQUksR0FBSixVQUFLLENBQVMsRUFBRSxDQUFZO1FBQzFCLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELCtCQUFJLEdBQUosVUFBSyxDQUFTO1FBQ1osTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBd0IsQ0FBQztJQUM3RixDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQTlDQSxBQThDQyxDQTlDcUMscUJBQWEsR0E4Q2xEO0FBOUNZLDRDQUFnQiIsImZpbGUiOiJsb2NhbGZvcmFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGxvY2FsZm9yYWdlIGZyb20gJ2xvY2FsZm9yYWdlJztcbmltcG9ydCB7IEtleVZhbHVlU3RvcmUsIE1vZGVsRGF0YSwgTW9kZWxTY2hlbWEgfSBmcm9tICdwbHVtcCc7XG5pbXBvcnQgKiBhcyBCbHVlYmlyZCBmcm9tICdibHVlYmlyZCc7XG5CbHVlYmlyZC5jb25maWcoeyB3YXJuaW5nczogZmFsc2UgfSk7XG5cblxuZnVuY3Rpb24gc2FuZU51bWJlcihpKSB7XG4gIHJldHVybiAoKHR5cGVvZiBpID09PSAnbnVtYmVyJykgJiYgKCFpc05hTihpKSkgJiYgKGkgIT09IEluZmluaXR5KSAmJiAoaSAhPT0gLUluZmluaXR5KSk7XG59XG5cbmV4cG9ydCBjbGFzcyBMb2NhbEZvcmFnZVN0b3JlIGV4dGVuZHMgS2V5VmFsdWVTdG9yZSB7XG5cbiAgY29uc3RydWN0b3Iob3B0czoge3Rlcm1pbmFsPzogYm9vbGVhbiwgbmFtZT86IHN0cmluZywgc3RvcmVOYW1lPzogc3RyaW5nfSA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG4gICAgbG9jYWxmb3JhZ2UuY29uZmlnKHtcbiAgICAgIG5hbWU6IG9wdHMubmFtZSB8fCAnUGx1bXAgU3RvcmFnZScsXG4gICAgICBzdG9yZU5hbWU6IG9wdHMuc3RvcmVOYW1lIHx8ICdsb2NhbENhY2hlJyxcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFNjaGVtYSh0OiB7dHlwZU5hbWU6IHN0cmluZywgc2NoZW1hOiBNb2RlbFNjaGVtYX0pIHtcbiAgICByZXR1cm4gc3VwZXIuYWRkU2NoZW1hKHQpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX2tleXModC50eXBlTmFtZSlcbiAgICAgIC50aGVuKChrZXlBcnJheSkgPT4ge1xuICAgICAgICBpZiAoa2V5QXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGtleUFycmF5Lm1hcCgoaykgPT4gay5zcGxpdCgnOicpWzFdKVxuICAgICAgICAgIC5tYXAoKGspID0+IHBhcnNlSW50KGssIDEwKSlcbiAgICAgICAgICAuZmlsdGVyKChpKSA9PiBzYW5lTnVtYmVyKGkpKVxuICAgICAgICAgIC5yZWR1Y2UoKG1heCwgY3VycmVudCkgPT4gKGN1cnJlbnQgPiBtYXgpID8gY3VycmVudCA6IG1heCwgMCk7XG4gICAgICAgIH1cbiAgICAgIH0pLnRoZW4oKG4pID0+IHtcbiAgICAgICAgdGhpcy5tYXhLZXlzW3QudHlwZU5hbWVdID0gbjtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cblxuICBfa2V5cyh0eXBlTmFtZTogc3RyaW5nKTogQmx1ZWJpcmQ8c3RyaW5nW10+IHtcbiAgICByZXR1cm4gQmx1ZWJpcmQucmVzb2x2ZShsb2NhbGZvcmFnZS5rZXlzKCkpXG4gICAgLnRoZW4oKGtleUFycmF5KSA9PiBrZXlBcnJheS5maWx0ZXIoKGspID0+IGsuaW5kZXhPZihgJHt0eXBlTmFtZX06YCkgPT09IDApKTtcbiAgfVxuXG4gIF9nZXQoazogc3RyaW5nKTogQmx1ZWJpcmQ8TW9kZWxEYXRhPiB7XG4gICAgcmV0dXJuIEJsdWViaXJkLnJlc29sdmUobG9jYWxmb3JhZ2UuZ2V0SXRlbShrKSkgYXMgQmx1ZWJpcmQ8TW9kZWxEYXRhPjtcbiAgfVxuXG4gIF9zZXQoazogc3RyaW5nLCB2OiBNb2RlbERhdGEpIHtcbiAgICByZXR1cm4gQmx1ZWJpcmQucmVzb2x2ZShsb2NhbGZvcmFnZS5zZXRJdGVtKGssIHYpKTtcbiAgfVxuXG4gIF9kZWwoazogc3RyaW5nKTogQmx1ZWJpcmQ8TW9kZWxEYXRhPiB7XG4gICAgcmV0dXJuIEJsdWViaXJkLnJlc29sdmUobG9jYWxmb3JhZ2UucmVtb3ZlSXRlbShrKSkudGhlbigoKSA9PiBudWxsKSBhcyBCbHVlYmlyZDxNb2RlbERhdGE+O1xuICB9XG59XG4iXX0=
