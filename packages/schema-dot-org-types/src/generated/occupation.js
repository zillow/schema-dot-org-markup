//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { TextType } from '../types';
import type { MonetaryAmountDistributionType } from '../types';
import type { MonetaryAmountType } from '../types';
import type { PriceSpecificationType } from '../types';
import type { NumberType } from '../types';
import type { AdministrativeAreaType } from '../types';
export type OccupationType = {
    occupationalCategory?: TextType,
    estimatedSalary?: MonetaryAmountDistributionType | MonetaryAmountType | PriceSpecificationType | NumberType,
    responsibilities?: TextType,
    qualifications?: TextType,
    occupationLocation?: AdministrativeAreaType,
    skills?: TextType,
    educationRequirements?: TextType,
    experienceRequirements?: TextType,
    } & ThingType;

export class Occupation extends Thing {
    occupationalCategory: TextType;
    estimatedSalary: MonetaryAmountDistributionType | MonetaryAmountType | PriceSpecificationType | NumberType;
    responsibilities: TextType;
    qualifications: TextType;
    occupationLocation: AdministrativeAreaType;
    skills: TextType;
    educationRequirements: TextType;
    experienceRequirements: TextType;

    constructor(props : OccupationType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('Occupation');
    }
}