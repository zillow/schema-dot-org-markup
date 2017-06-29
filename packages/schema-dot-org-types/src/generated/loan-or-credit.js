//@flow
import objectAssign from 'object-assign';
import {FinancialProduct} from './financial-product';
import type { FinancialProductType } from './financial-product';
import type { TextType } from '../types';
import type { ThingType } from '../types';
import type { BooleanType } from '../types';
import type { RepaymentSpecificationType } from '../types';
import type { QuantitativeValueType } from '../types';
import type { URLType } from '../types';
import type { MonetaryAmountType } from '../types';
import type { NumberType } from '../types';
import type { DurationType } from '../types';
export type LoanOrCreditType = {
    requiredCollateral?: TextType | ThingType,
    currency?: TextType,
    recourseLoan?: BooleanType,
    loanRepaymentForm?: RepaymentSpecificationType,
    loanTerm?: QuantitativeValueType,
    loanType?: TextType | URLType,
    renegotiableLoan?: BooleanType,
    amount?: MonetaryAmountType | NumberType,
    gracePeriod?: DurationType,
    } & FinancialProductType;

export class LoanOrCredit extends FinancialProduct {
    requiredCollateral: TextType | ThingType;
    currency: TextType;
    recourseLoan: BooleanType;
    loanRepaymentForm: RepaymentSpecificationType;
    loanTerm: QuantitativeValueType;
    loanType: TextType | URLType;
    renegotiableLoan: BooleanType;
    amount: MonetaryAmountType | NumberType;
    gracePeriod: DurationType;

    constructor(props : LoanOrCreditType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('LoanOrCredit');
    }
}