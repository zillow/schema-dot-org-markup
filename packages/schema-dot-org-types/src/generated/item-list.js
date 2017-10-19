//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { IntegerType } from '../types';
import type { ItemListOrderTypeType } from '../types';
import type { TextType } from '../types';
import type { ListItemType } from '../types';
export type ItemListType = {
    numberOfItems?: IntegerType,
    itemListOrder?: ItemListOrderTypeType | TextType,
    itemListElement?: ListItemType | TextType | ThingType,
    } & ThingType;

export class ItemList extends Thing {
    numberOfItems: IntegerType;
    itemListOrder: ItemListOrderTypeType | TextType;
    itemListElement: ListItemType | TextType | ThingType;

    constructor(props : ItemListType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('ItemList');
    }
}