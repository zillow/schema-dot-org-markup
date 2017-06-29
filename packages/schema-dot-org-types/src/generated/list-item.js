//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { TextType } from '../types';
import type { IntegerType } from '../types';
export type ListItemType = {
    nextItem?: ListItemType,
    position?: TextType | IntegerType,
    item?: ThingType,
    previousItem?: ListItemType,
    } & ThingType;

export class ListItem extends Thing {
    nextItem: ListItemType;
    position: TextType | IntegerType;
    item: ThingType;
    previousItem: ListItemType;

    constructor(props : ListItemType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('ListItem');
    }
}