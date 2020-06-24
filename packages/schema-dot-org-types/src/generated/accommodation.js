//@flow
import objectAssign from 'object-assign';
import {Place} from './place';
import type { PlaceType } from './place';
import type { QuantitativeValueType } from '../types';
import type { LocationFeatureSpecificationType } from '../types';
import type { TextType } from '../types';
import type { BooleanType } from '../types';
export type AccommodationType = {
    floorSize?: QuantitativeValueType,
    amenityFeature?: LocationFeatureSpecificationType,
    petsAllowed?: TextType | BooleanType,
    permittedUsage?: TextType,
    } & PlaceType;

export class Accommodation extends Place {
    floorSize: QuantitativeValueType;
    amenityFeature: LocationFeatureSpecificationType;
    petsAllowed: TextType | BooleanType;
    permittedUsage: TextType;

    constructor(props : AccommodationType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('Accommodation');
    }
}