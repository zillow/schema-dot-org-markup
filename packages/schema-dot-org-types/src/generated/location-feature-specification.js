//@flow
import objectAssign from 'object-assign';
import {PropertyValue} from './property-value';
import type { PropertyValueType } from './property-value';
import type { DateTimeType } from '../types';
import type { OpeningHoursSpecificationType } from '../types';
export type LocationFeatureSpecificationType = {
    validFrom?: DateTimeType,
    hoursAvailable?: OpeningHoursSpecificationType,
    validThrough?: DateTimeType,
    } & PropertyValueType;

export class LocationFeatureSpecification extends PropertyValue {
    validFrom: DateTimeType;
    hoursAvailable: OpeningHoursSpecificationType;
    validThrough: DateTimeType;

    constructor(props : LocationFeatureSpecificationType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('LocationFeatureSpecification');
    }
}