import localforage from 'localforage';
import { KeyValueStore } from 'plump';
import Bluebird from 'bluebird';
Bluebird.config({ warnings: false });

export class LocalForageStore extends KeyValueStore {

  constructor(opts = {}) {
    super();
    this.isCache = true;
    this.terminal = opts.terminal;
    localforage.config({
      name: opts.name || 'Trellis Storage',
      storeName: opts.storeName || 'localCache',
    });
  }

  _keys(typeName) {
    return Bluebird.resolve(localforage.keys())
    .then((keyArray) => keyArray.filter((k) => k.indexOf(`${typeName}:store:`) === 0));
  }

  _get(k) {
    return Bluebird.resolve(localforage.getItem(k));
  }

  _set(k, v) {
    return Bluebird.resolve(localforage.setItem(k, v));
  }

  _del(k) {
    return Bluebird.resolve(localforage.removeItem(k));
  }
}
