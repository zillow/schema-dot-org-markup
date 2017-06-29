//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { QuantitativeValueType } from '../types';
import type { NumberType } from '../types';
export type BroadcastFrequencySpecificationType = {
    broadcastFrequencyValue?: QuantitativeValueType | NumberType,
    } & ThingType;

export class BroadcastFrequencySpecification extends Thing {
    broadcastFrequencyValue: QuantitativeValueType | NumberType;

    constructor(props : BroadcastFrequencySpecificationType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('BroadcastFrequencySpecification');
    }
}