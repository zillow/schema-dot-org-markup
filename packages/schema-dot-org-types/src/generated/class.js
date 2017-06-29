//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { PhysicalActivityCategoryType } from '../types';
import type { TextType } from '../types';
import type { EnumerationType } from '../types';
import type { PropertyType } from '../types';
export type ClassType = {
    category?: PhysicalActivityCategoryType | TextType | ThingType,
    supersededBy?: EnumerationType | ClassType | PropertyType,
    } & ThingType;

export class Class extends Thing {
    category: PhysicalActivityCategoryType | TextType | ThingType;
    supersededBy: EnumerationType | ClassType | PropertyType;

    constructor(props : ClassType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('Class');
    }
}