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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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SSxHQUFKLFVBQUssQ0FBUyxFQUFFLENBQVk7UUFDMUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELCtCQUFJLEdBQUosVUFBSyxDQUFTO1FBQ1osTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQXVCLENBQUM7SUFDaEcsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FoREEsQUFnREMsQ0FoRHFDLHFCQUFhLEdBZ0RsRDtBQWhEWSw0Q0FBZ0IiLCJmaWxlIjoibG9jYWxmb3JhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBsb2NhbGZvcmFnZSBmcm9tICdsb2NhbGZvcmFnZSc7XG5pbXBvcnQgeyBLZXlWYWx1ZVN0b3JlLCBNb2RlbERhdGEsIE1vZGVsU2NoZW1hLCBTdG9yYWdlT3B0aW9ucyB9IGZyb20gJ3BsdW1wJztcblxuZnVuY3Rpb24gc2FuZU51bWJlcihpKSB7XG4gIHJldHVybiAoKHR5cGVvZiBpID09PSAnbnVtYmVyJykgJiYgKCFpc05hTihpKSkgJiYgKGkgIT09IEluZmluaXR5KSAmJiAoaSAhPT0gLUluZmluaXR5KSk7XG59XG5cbmV4cG9ydCBjbGFzcyBMb2NhbEZvcmFnZVN0b3JlIGV4dGVuZHMgS2V5VmFsdWVTdG9yZSB7XG5cbiAgcHJpdmF0ZSBsb2NhbGZvcmFnZTtcblxuICBjb25zdHJ1Y3RvcihvcHRzOiBTdG9yYWdlT3B0aW9ucyAmIHtuYW1lPzogc3RyaW5nLCBzdG9yZU5hbWU/OiBzdHJpbmd9ID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcbiAgICB0aGlzLmxvY2FsZm9yYWdlID0gbG9jYWxmb3JhZ2UuY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgbmFtZTogb3B0cy5uYW1lIHx8ICdQbHVtcCBTdG9yYWdlJyxcbiAgICAgIHN0b3JlTmFtZTogb3B0cy5zdG9yZU5hbWUgfHwgJ2xvY2FsQ2FjaGUnLFxuICAgIH0pO1xuICB9XG5cbiAgYWRkU2NoZW1hKHQ6IHt0eXBlTmFtZTogc3RyaW5nLCBzY2hlbWE6IE1vZGVsU2NoZW1hfSkge1xuICAgIHJldHVybiBzdXBlci5hZGRTY2hlbWEodClcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5fa2V5cyh0LnR5cGVOYW1lKVxuICAgICAgLnRoZW4oKGtleUFycmF5KSA9PiB7XG4gICAgICAgIGlmIChrZXlBcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4ga2V5QXJyYXkubWFwKChrKSA9PiBrLnNwbGl0KCc6JylbMV0pXG4gICAgICAgICAgLm1hcCgoaykgPT4gcGFyc2VJbnQoaywgMTApKVxuICAgICAgICAgIC5maWx0ZXIoKGkpID0+IHNhbmVOdW1iZXIoaSkpXG4gICAgICAgICAgLnJlZHVjZSgobWF4LCBjdXJyZW50KSA9PiAoY3VycmVudCA+IG1heCkgPyBjdXJyZW50IDogbWF4LCAwKTtcbiAgICAgICAgfVxuICAgICAgfSkudGhlbigobikgPT4ge1xuICAgICAgICB0aGlzLm1heEtleXNbdC50eXBlTmFtZV0gPSBuO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuXG4gIF9rZXlzKHR5cGVOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmxvY2FsZm9yYWdlLmtleXMoKSlcbiAgICAudGhlbigoa2V5QXJyYXkpID0+IGtleUFycmF5LmZpbHRlcigoaykgPT4gay5pbmRleE9mKGAke3R5cGVOYW1lfTpgKSA9PT0gMCkpO1xuICB9XG5cbiAgX2dldChrOiBzdHJpbmcpOiBQcm9taXNlPE1vZGVsRGF0YT4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5sb2NhbGZvcmFnZS5nZXRJdGVtKGspKSBhcyBQcm9taXNlPE1vZGVsRGF0YT47XG4gIH1cblxuICBfc2V0KGs6IHN0cmluZywgdjogTW9kZWxEYXRhKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmxvY2FsZm9yYWdlLnNldEl0ZW0oaywgdikpO1xuICB9XG5cbiAgX2RlbChrOiBzdHJpbmcpOiBQcm9taXNlPE1vZGVsRGF0YT4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5sb2NhbGZvcmFnZS5yZW1vdmVJdGVtKGspKS50aGVuKCgpID0+IG51bGwpIGFzIFByb21pc2U8TW9kZWxEYXRhPjtcbiAgfVxufVxuIl19
