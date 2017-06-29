//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { TextType } from '../types';
import type { NumberType } from '../types';
import type { PropertyValueType } from '../types';
import type { StructuredValueType } from '../types';
import type { BooleanType } from '../types';
import type { QualitativeValueType } from '../types';
import type { EnumerationType } from '../types';
import type { URLType } from '../types';
export type QuantitativeValueType = {
    unitText?: TextType,
    maxValue?: NumberType,
    additionalProperty?: PropertyValueType,
    value?: StructuredValueType | BooleanType | NumberType | TextType,
    valueReference?: PropertyValueType | QuantitativeValueType | QualitativeValueType | EnumerationType | StructuredValueType,
    minValue?: NumberType,
    unitCode?: TextType | URLType,
    } & ThingType;

export class QuantitativeValue extends Thing {
    unitText: TextType;
    maxValue: NumberType;
    additionalProperty: PropertyValueType;
    value: StructuredValueType | BooleanType | NumberType | TextType;
    valueReference: PropertyValueType | QuantitativeValueType | QualitativeValueType | EnumerationType | StructuredValueType;
    minValue: NumberType;
    unitCode: TextType | URLType;

    constructor(props : QuantitativeValueType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('QuantitativeValue');
    }
}