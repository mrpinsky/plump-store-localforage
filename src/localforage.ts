import * as localforage from 'localforage';
import { KeyValueStore, ModelData } from 'plump';
import * as Bluebird from 'bluebird';
Bluebird.config({ warnings: false });

export class LocalForageStore extends KeyValueStore {

  constructor(opts: {terminal?: boolean, name?: string, storeName?: string} = {}) {
    super(opts);
    localforage.config({
      name: opts.name || 'Trellis Storage',
      storeName: opts.storeName || 'localCache',
    });
  }

  _keys(typeName: string): Bluebird<string[]> {
    return Bluebird.resolve(localforage.keys())
    .then((keyArray) => keyArray.filter((k) => k.indexOf(`${typeName}:`) === 0));
  }

  _get(k: string): Bluebird<ModelData> {
    return Bluebird.resolve(localforage.getItem(k)) as Bluebird<ModelData>;
  }

  _set(k: string, v: ModelData) {
    return Bluebird.resolve(localforage.setItem(k, v));
  }

  _del(k: string): Bluebird<ModelData> {
    return Bluebird.resolve(localforage.removeItem(k)).then(() => null) as Bluebird<ModelData>;
  }
}
