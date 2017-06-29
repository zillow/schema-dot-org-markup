//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { TextType } from '../types';
import type { ItemListOrderTypeType } from '../types';
import type { IntegerType } from '../types';
import type { ListItemType } from '../types';
export type ItemListType = {
    itemListOrder?: TextType | ItemListOrderTypeType,
    numberOfItems?: IntegerType,
    itemListElement?: ListItemType | ThingType | TextType,
    } & ThingType;

export class ItemList extends Thing {
    itemListOrder: TextType | ItemListOrderTypeType;
    numberOfItems: IntegerType;
    itemListElement: ListItemType | ThingType | TextType;

    constructor(props : ItemListType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('ItemList');
    }
}