//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { ClassType } from '../types';
import type { PropertyType } from '../types';
export type EnumerationType = {
    supersededBy?: ClassType | EnumerationType | PropertyType,
    } & ThingType;

export class Enumeration extends Thing {
    supersededBy: ClassType | EnumerationType | PropertyType;

    constructor(props : EnumerationType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('Enumeration');
    }
}