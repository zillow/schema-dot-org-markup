//@flow
import objectAssign from 'object-assign';
import {CreativeWork} from './creative-work';
import type { CreativeWorkType } from './creative-work';
import type { MapCategoryTypeType } from '../types';
export type MapType = {
    mapType?: MapCategoryTypeType,
    } & CreativeWorkType;

export class Map extends CreativeWork {
    mapType: MapCategoryTypeType;

    constructor(props : MapType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('Map');
    }
}