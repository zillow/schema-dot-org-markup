//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { ClassType } from '../types';
import type { TextType } from '../types';
import type { PhysicalActivityCategoryType } from '../types';
import type { EnumerationType } from '../types';
export type PropertyType = {
    rangeIncludes?: ClassType,
    domainIncludes?: ClassType,
    category?: TextType | PhysicalActivityCategoryType | ThingType,
    inverseOf?: PropertyType,
    supersededBy?: EnumerationType | PropertyType | ClassType,
    } & ThingType;

export class Property extends Thing {
    rangeIncludes: ClassType;
    domainIncludes: ClassType;
    category: TextType | PhysicalActivityCategoryType | ThingType;
    inverseOf: PropertyType;
    supersededBy: EnumerationType | PropertyType | ClassType;

    constructor(props : PropertyType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('Property');
    }
}