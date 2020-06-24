//@flow
import objectAssign from 'object-assign';
import {StructuredValue} from './structured-value';
import type { StructuredValueType } from './structured-value';
import type { DateTimeType } from '../types';
import type { OrganizationType } from '../types';
import type { PersonType } from '../types';
import type { ProductType } from '../types';
import type { ServiceType } from '../types';
export type OwnershipInfoType = {
    ownedThrough?: DateTimeType,
    acquiredFrom?: OrganizationType | PersonType,
    ownedFrom?: DateTimeType,
    typeOfGood?: ProductType | ServiceType,
    } & StructuredValueType;

export class OwnershipInfo extends StructuredValue {
    ownedThrough: DateTimeType;
    acquiredFrom: OrganizationType | PersonType;
    ownedFrom: DateTimeType;
    typeOfGood: ProductType | ServiceType;

    constructor(props : OwnershipInfoType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('OwnershipInfo');
    }
}