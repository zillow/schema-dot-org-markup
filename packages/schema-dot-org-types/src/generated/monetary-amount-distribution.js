//@flow
import objectAssign from 'object-assign';
import {QuantitativeValue} from './quantitative-value';
import type { QuantitativeValueType } from './quantitative-value';
import type { TextType } from '../types';
export type MonetaryAmountDistributionType = {
    currency?: TextType,
    } & QuantitativeValueType;

export class MonetaryAmountDistribution extends QuantitativeValue {
    currency: TextType;

    constructor(props : MonetaryAmountDistributionType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('MonetaryAmountDistribution');
    }
}