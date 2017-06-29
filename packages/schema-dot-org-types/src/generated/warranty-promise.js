//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { QuantitativeValueType } from '../types';
import type { WarrantyScopeType } from '../types';
export type WarrantyPromiseType = {
    durationOfWarranty?: QuantitativeValueType,
    warrantyScope?: WarrantyScopeType,
    } & ThingType;

export class WarrantyPromise extends Thing {
    durationOfWarranty: QuantitativeValueType;
    warrantyScope: WarrantyScopeType;

    constructor(props : WarrantyPromiseType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('WarrantyPromise');
    }
}