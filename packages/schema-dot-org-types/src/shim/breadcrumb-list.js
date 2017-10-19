//TODO the transform schema script doesn't currently generate trivial sub-classes
// see https://github.com/zillow/schema-dot-org-markup/issues/5
//@flow
import objectAssign from 'object-assign';
import {Thing} from '../generated/thing';
import type { ItemListType } from '../types';

export type BreadcrumbListType = ItemListType;

export class BreadcrumbList extends Thing {

    constructor(props : ItemListType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('BreadcrumbList');
    }
}