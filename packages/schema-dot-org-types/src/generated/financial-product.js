//@flow
import objectAssign from 'object-assign';
import {Service} from './service';
import type { ServiceType } from './service';
import type { NumberType } from '../types';
import type { QuantitativeValueType } from '../types';
import type { TextType } from '../types';
import type { URLType } from '../types';
export type FinancialProductType = {
    interestRate?: NumberType | QuantitativeValueType,
    feesAndCommissionsSpecification?: TextType | URLType,
    annualPercentageRate?: NumberType | QuantitativeValueType,
    } & ServiceType;

export class FinancialProduct extends Service {
    interestRate: NumberType | QuantitativeValueType;
    feesAndCommissionsSpecification: TextType | URLType;
    annualPercentageRate: NumberType | QuantitativeValueType;

    constructor(props : FinancialProductType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('FinancialProduct');
    }
}