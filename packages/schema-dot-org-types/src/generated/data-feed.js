//@flow
import objectAssign from 'object-assign';
import {Dataset} from './dataset';
import type { DatasetType } from './dataset';
import type { ThingType } from '../types';
import type { TextType } from '../types';
import type { DataFeedItemType } from '../types';
export type DataFeedType = {
    dataFeedElement?: ThingType | TextType | DataFeedItemType,
    } & DatasetType;

export class DataFeed extends Dataset {
    dataFeedElement: ThingType | TextType | DataFeedItemType;

    constructor(props : DataFeedType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('DataFeed');
    }
}