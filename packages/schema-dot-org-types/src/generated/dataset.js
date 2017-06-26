//@flow
import objectAssign from 'object-assign';
import {CreativeWork} from './creative-work';
import type { CreativeWorkType } from './creative-work';
import type { DateTimeType } from '../types';
import type { DataCatalogType } from '../types';
import type { PlaceType } from '../types';
import type { DataDownloadType } from '../types';
import type { TextType } from '../types';
import type { PropertyValueType } from '../types';
export type DatasetType = {
    temporal?: DateTimeType,
    includedInDataCatalog?: DataCatalogType,
    includedDataCatalog?: DataCatalogType,
    spatial?: PlaceType,
    distribution?: DataDownloadType,
    variableMeasured?: TextType | PropertyValueType,
    datasetTimeInterval?: DateTimeType,
    catalog?: DataCatalogType,
    } & CreativeWorkType;

export class Dataset extends CreativeWork {
    temporal: DateTimeType;
    includedInDataCatalog: DataCatalogType;
    includedDataCatalog: DataCatalogType;
    spatial: PlaceType;
    distribution: DataDownloadType;
    variableMeasured: TextType | PropertyValueType;
    datasetTimeInterval: DateTimeType;
    catalog: DataCatalogType;

    constructor(props : DatasetType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('Dataset');
    }
}