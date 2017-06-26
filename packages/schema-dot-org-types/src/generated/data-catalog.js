//@flow
import objectAssign from 'object-assign';
import {CreativeWork} from './creative-work';
import type { CreativeWorkType } from './creative-work';
import type { DatasetType } from '../types';
export type DataCatalogType = {
    dataset?: DatasetType,
    } & CreativeWorkType;

export class DataCatalog extends CreativeWork {
    dataset: DatasetType;

    constructor(props : DataCatalogType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('DataCatalog');
    }
}