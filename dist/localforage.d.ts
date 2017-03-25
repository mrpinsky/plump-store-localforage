/// <reference types="bluebird" />
import { KeyValueStore, ModelData, ModelSchema } from 'plump';
import * as Bluebird from 'bluebird';
export declare class LocalForageStore extends KeyValueStore {
    constructor(opts?: {
        terminal?: boolean;
        name?: string;
        storeName?: string;
    });
    addSchema(t: {
        typeName: string;
        schema: ModelSchema;
    }): Bluebird<void>;
    _keys(typeName: string): Bluebird<string[]>;
    _get(k: string): Bluebird<ModelData>;
    _set(k: string, v: ModelData): Bluebird<ModelData>;
    _del(k: string): Bluebird<ModelData>;
}
