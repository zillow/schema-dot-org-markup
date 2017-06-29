//@flow
import objectAssign from 'object-assign';
import {Enumeration} from './enumeration';
import type { EnumerationType } from './enumeration';
import type { QuantitativeValueType } from '../types';
import type { StructuredValueType } from '../types';
import type { PropertyValueType } from '../types';
export type QualitativeValueType = {
    nonEqual?: QualitativeValueType,
    valueReference?: QuantitativeValueType | EnumerationType | QualitativeValueType | StructuredValueType | PropertyValueType,
    greaterOrEqual?: QualitativeValueType,
    equal?: QualitativeValueType,
    additionalProperty?: PropertyValueType,
    lesser?: QualitativeValueType,
    lesserOrEqual?: QualitativeValueType,
    greater?: QualitativeValueType,
    } & EnumerationType;

export class QualitativeValue extends Enumeration {
    nonEqual: QualitativeValueType;
    valueReference: QuantitativeValueType | EnumerationType | QualitativeValueType | StructuredValueType | PropertyValueType;
    greaterOrEqual: QualitativeValueType;
    equal: QualitativeValueType;
    additionalProperty: PropertyValueType;
    lesser: QualitativeValueType;
    lesserOrEqual: QualitativeValueType;
    greater: QualitativeValueType;

    constructor(props : QualitativeValueType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('QualitativeValue');
    }
}