//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { MonetaryAmountType } from '../types';
import type { NumberType } from '../types';
export type RepaymentSpecificationType = {
    loanPaymentAmount?: MonetaryAmountType,
    loanPaymentFrequency?: NumberType,
    numberOfLoanPayments?: NumberType,
    earlyPrepaymentPenalty?: MonetaryAmountType,
    downPayment?: MonetaryAmountType | NumberType,
    } & ThingType;

export class RepaymentSpecification extends Thing {
    loanPaymentAmount: MonetaryAmountType;
    loanPaymentFrequency: NumberType;
    numberOfLoanPayments: NumberType;
    earlyPrepaymentPenalty: MonetaryAmountType;
    downPayment: MonetaryAmountType | NumberType;

    constructor(props : RepaymentSpecificationType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('RepaymentSpecification');
    }
}