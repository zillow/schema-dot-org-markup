//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { QualitativeValueType } from '../types';
import type { EnumerationType } from '../types';
import type { StructuredValueType } from '../types';
import type { QuantitativeValueType } from '../types';
import type { URLType } from '../types';
import type { TextType } from '../types';
import type { NumberType } from '../types';
import type { BooleanType } from '../types';
export type PropertyValueType = {
    valueReference?: QualitativeValueType | PropertyValueType | EnumerationType | StructuredValueType | QuantitativeValueType,
    measurementTechnique?: URLType | TextType,
    propertyID?: URLType | TextType,
    unitText?: TextType,
    maxValue?: NumberType,
    minValue?: NumberType,
    value?: NumberType | BooleanType | TextType | StructuredValueType,
    unitCode?: TextType | URLType,
    } & ThingType;

export class PropertyValue extends Thing {
    valueReference: QualitativeValueType | PropertyValueType | EnumerationType | StructuredValueType | QuantitativeValueType;
    measurementTechnique: URLType | TextType;
    propertyID: URLType | TextType;
    unitText: TextType;
    maxValue: NumberType;
    minValue: NumberType;
    value: NumberType | BooleanType | TextType | StructuredValueType;
    unitCode: TextType | URLType;

    constructor(props : PropertyValueType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('PropertyValue');
    }
}