//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { DateTimeType } from '../types';
import type { TextType } from '../types';
import type { NumberType } from '../types';
import type { BooleanType } from '../types';
import type { StructuredValueType } from '../types';
export type MonetaryAmountType = {
    validFrom?: DateTimeType,
    currency?: TextType,
    maxValue?: NumberType,
    minValue?: NumberType,
    value?: BooleanType | TextType | NumberType | StructuredValueType,
    validThrough?: DateTimeType,
    } & ThingType;

export class MonetaryAmount extends Thing {
    validFrom: DateTimeType;
    currency: TextType;
    maxValue: NumberType;
    minValue: NumberType;
    value: BooleanType | TextType | NumberType | StructuredValueType;
    validThrough: DateTimeType;

    constructor(props : MonetaryAmountType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('MonetaryAmount');
    }
}