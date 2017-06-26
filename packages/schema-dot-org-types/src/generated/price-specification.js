//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { NumberType } from '../types';
import type { BooleanType } from '../types';
export type PriceSpecificationType = {
    minPrice?: NumberType,
    valueAddedTaxIncluded?: BooleanType,
    maxPrice?: NumberType,
    } & ThingType;

export class PriceSpecification extends Thing {
    minPrice: NumberType;
    valueAddedTaxIncluded: BooleanType;
    maxPrice: NumberType;

    constructor(props : PriceSpecificationType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('PriceSpecification');
    }
}