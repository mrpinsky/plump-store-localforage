import * as localforage from 'localforage';
import { KeyValueStore, ModelData, ModelSchema } from 'plump';
import * as Bluebird from 'bluebird';
Bluebird.config({ warnings: false });


function saneNumber(i) {
  return ((typeof i === 'number') && (!isNaN(i)) && (i !== Infinity) && (i !== -Infinity));
}

export class LocalForageStore extends KeyValueStore {

  constructor(opts: {terminal?: boolean, name?: string, storeName?: string} = {}) {
    super(opts);
    localforage.config({
      name: opts.name || 'Plump Storage',
      storeName: opts.storeName || 'localCache',
    });
  }

  addSchema(t: {typeName: string, schema: ModelSchema}) {
    return super.addSchema(t)
    .then(() => {
      return this._keys(t.typeName)
      .then((keyArray) => {
        if (keyArray.length === 0) {
          return 0;
        } else {
          return keyArray.map((k) => k.split(':')[1])
          .map((k) => parseInt(k, 10))
          .filter((i) => saneNumber(i))
          .reduce((max, current) => (current > max) ? current : max, 0);
        }
      }).then((n) => {
        this.maxKeys[t.typeName] = n;
      });
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
