//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { DateTimeType } from '../types';
export type DataFeedItemType = {
    dateDeleted?: DateTimeType,
    } & ThingType;

export class DataFeedItem extends Thing {
    dateDeleted: DateTimeType;

    constructor(props : DataFeedItemType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('DataFeedItem');
    }
}