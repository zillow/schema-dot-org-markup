//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { ProductType } from '../types';
import type { ServiceType } from '../types';
import type { NumberType } from '../types';
import type { TextType } from '../types';
import type { BusinessFunctionType } from '../types';
import type { URLType } from '../types';
export type TypeAndQuantityNodeType = {
    typeOfGood?: ProductType | ServiceType,
    amountOfThisGood?: NumberType,
    unitText?: TextType,
    businessFunction?: BusinessFunctionType,
    unitCode?: URLType | TextType,
    } & ThingType;

export class TypeAndQuantityNode extends Thing {
    typeOfGood: ProductType | ServiceType;
    amountOfThisGood: NumberType;
    unitText: TextType;
    businessFunction: BusinessFunctionType;
    unitCode: URLType | TextType;

    constructor(props : TypeAndQuantityNodeType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('TypeAndQuantityNode');
    }
}