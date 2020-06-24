//@flow
import objectAssign from 'object-assign';
import {House} from './house';
import type { HouseType } from './house';
import type { NumberType } from '../types';
import type { QuantitativeValueType } from '../types';
export type SingleFamilyResidenceType = {
    numberOfRooms?: NumberType | QuantitativeValueType,
    occupancy?: QuantitativeValueType,
    } & HouseType;

export class SingleFamilyResidence extends House {
    numberOfRooms: NumberType | QuantitativeValueType;
    occupancy: QuantitativeValueType;

    constructor(props : SingleFamilyResidenceType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('SingleFamilyResidence');
    }
}