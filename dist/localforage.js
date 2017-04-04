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
function saneNumber(i) {
    return ((typeof i === 'number') && (!isNaN(i)) && (i !== Infinity) && (i !== -Infinity));
}
var LocalForageStore = (function (_super) {
    __extends(LocalForageStore, _super);
    function LocalForageStore(opts) {
        if (opts === void 0) { opts = {}; }
        var _this = _super.call(this, opts) || this;
        _this.localforage = localforage.createInstance({
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
        return Promise.resolve(this.localforage.keys())
            .then(function (keyArray) { return keyArray.filter(function (k) { return k.indexOf(typeName + ":") === 0; }); });
    };
    LocalForageStore.prototype._get = function (k) {
        return Promise.resolve(this.localforage.getItem(k));
    };
    LocalForageStore.prototype._set = function (k, v) {
        return Promise.resolve(this.localforage.setItem(k, v));
    };
    LocalForageStore.prototype._del = function (k) {
        return Promise.resolve(this.localforage.removeItem(k)).then(function () { return null; });
    };
    return LocalForageStore;
}(plump_1.KeyValueStore));
exports.LocalForageStore = LocalForageStore;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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RUQsK0JBQUksR0FBSixVQUFLLENBQVMsRUFBRSxDQUFZO1FBQzFCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCwrQkFBSSxHQUFKLFVBQUssQ0FBUztRQUNaLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUF1QixDQUFDO0lBQ2hHLENBQUM7SUFDSCx1QkFBQztBQUFELENBaERBLEFBZ0RDLENBaERxQyxxQkFBYSxHQWdEbEQ7QUFoRFksNENBQWdCIiwiZmlsZSI6ImxvY2FsZm9yYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbG9jYWxmb3JhZ2UgZnJvbSAnbG9jYWxmb3JhZ2UnO1xuaW1wb3J0IHsgS2V5VmFsdWVTdG9yZSwgTW9kZWxEYXRhLCBNb2RlbFNjaGVtYSwgU3RvcmFnZU9wdGlvbnMgfSBmcm9tICdwbHVtcCc7XG5cbmZ1bmN0aW9uIHNhbmVOdW1iZXIoaSkge1xuICByZXR1cm4gKCh0eXBlb2YgaSA9PT0gJ251bWJlcicpICYmICghaXNOYU4oaSkpICYmIChpICE9PSBJbmZpbml0eSkgJiYgKGkgIT09IC1JbmZpbml0eSkpO1xufVxuXG5leHBvcnQgY2xhc3MgTG9jYWxGb3JhZ2VTdG9yZSBleHRlbmRzIEtleVZhbHVlU3RvcmUge1xuXG4gIHByaXZhdGUgbG9jYWxmb3JhZ2U7XG5cbiAgY29uc3RydWN0b3Iob3B0czogU3RvcmFnZU9wdGlvbnMgJiB7bmFtZT86IHN0cmluZywgc3RvcmVOYW1lPzogc3RyaW5nfSA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG4gICAgdGhpcy5sb2NhbGZvcmFnZSA9IGxvY2FsZm9yYWdlLmNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIG5hbWU6IG9wdHMubmFtZSB8fCAnUGx1bXAgU3RvcmFnZScsXG4gICAgICBzdG9yZU5hbWU6IG9wdHMuc3RvcmVOYW1lIHx8ICdsb2NhbENhY2hlJyxcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFNjaGVtYSh0OiB7dHlwZU5hbWU6IHN0cmluZywgc2NoZW1hOiBNb2RlbFNjaGVtYX0pIHtcbiAgICByZXR1cm4gc3VwZXIuYWRkU2NoZW1hKHQpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX2tleXModC50eXBlTmFtZSlcbiAgICAgIC50aGVuKChrZXlBcnJheSkgPT4ge1xuICAgICAgICBpZiAoa2V5QXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGtleUFycmF5Lm1hcCgoaykgPT4gay5zcGxpdCgnOicpWzFdKVxuICAgICAgICAgIC5tYXAoKGspID0+IHBhcnNlSW50KGssIDEwKSlcbiAgICAgICAgICAuZmlsdGVyKChpKSA9PiBzYW5lTnVtYmVyKGkpKVxuICAgICAgICAgIC5yZWR1Y2UoKG1heCwgY3VycmVudCkgPT4gKGN1cnJlbnQgPiBtYXgpID8gY3VycmVudCA6IG1heCwgMCk7XG4gICAgICAgIH1cbiAgICAgIH0pLnRoZW4oKG4pID0+IHtcbiAgICAgICAgdGhpcy5tYXhLZXlzW3QudHlwZU5hbWVdID0gbjtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cblxuICBfa2V5cyh0eXBlTmFtZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5sb2NhbGZvcmFnZS5rZXlzKCkpXG4gICAgLnRoZW4oKGtleUFycmF5KSA9PiBrZXlBcnJheS5maWx0ZXIoKGspID0+IGsuaW5kZXhPZihgJHt0eXBlTmFtZX06YCkgPT09IDApKTtcbiAgfVxuXG4gIF9nZXQoazogc3RyaW5nKTogUHJvbWlzZTxNb2RlbERhdGE+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMubG9jYWxmb3JhZ2UuZ2V0SXRlbShrKSkgYXMgUHJvbWlzZTxNb2RlbERhdGE+O1xuICB9XG5cbiAgX3NldChrOiBzdHJpbmcsIHY6IE1vZGVsRGF0YSkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5sb2NhbGZvcmFnZS5zZXRJdGVtKGssIHYpKTtcbiAgfVxuXG4gIF9kZWwoazogc3RyaW5nKTogUHJvbWlzZTxNb2RlbERhdGE+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMubG9jYWxmb3JhZ2UucmVtb3ZlSXRlbShrKSkudGhlbigoKSA9PiBudWxsKSBhcyBQcm9taXNlPE1vZGVsRGF0YT47XG4gIH1cbn1cbiJdfQ==
