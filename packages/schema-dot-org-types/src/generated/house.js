//@flow
import objectAssign from 'object-assign';
import {Accommodation} from './accommodation';
import type { AccommodationType } from './accommodation';
import type { QuantitativeValueType } from '../types';
import type { NumberType } from '../types';
export type HouseType = {
    numberOfRooms?: QuantitativeValueType | NumberType,
    } & AccommodationType;

export class House extends Accommodation {
    numberOfRooms: QuantitativeValueType | NumberType;

    constructor(props : HouseType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('House');
    }
}