//TODO the transform schema script doesn't currently generate trivial sub-classes
// see https://github.com/zillow/schema-dot-org-markup/issues/5
//@flow
import objectAssign from 'object-assign';
import {Thing} from '../generated/thing';
import type { ThingType } from '../generated/thing';
import type { IntegerType } from '../types';
import type { ItemListOrderTypeType } from '../types';
import type { TextType } from '../types';
import type { ListItemType } from '../types';
export type BreadcrumbListType = {
    numberOfItems?: IntegerType,
    itemListOrder?: ItemListOrderTypeType | TextType,
    itemListElement: [ListItemType | TextType | ThingType],
} & ThingType;

export class BreadcrumbList extends Thing {
    numberOfItems: ?IntegerType;
    itemListOrder: ?ItemListOrderTypeType | ?TextType;
    itemListElement: [ListItemType | TextType | ThingType];

    constructor(props : BreadcrumbListType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('BreadcrumbList');
    }
}