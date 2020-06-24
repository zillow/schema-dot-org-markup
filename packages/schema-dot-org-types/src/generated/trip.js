//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { OfferType } from '../types';
import type { CreativeWorkType } from '../types';
import type { DateTimeType } from '../types';
import type { OrganizationType } from '../types';
import type { PersonType } from '../types';
import type { ItemListType } from '../types';
import type { PlaceType } from '../types';
export type TripType = {
    offers?: OfferType,
    hasPart?: CreativeWorkType | TripType,
    arrivalTime?: DateTimeType,
    provider?: OrganizationType | PersonType,
    isPartOf?: TripType | CreativeWorkType,
    departureTime?: DateTimeType,
    itinerary?: ItemListType | PlaceType,
    } & ThingType;

export class Trip extends Thing {
    offers: OfferType;
    hasPart: CreativeWorkType | TripType;
    arrivalTime: DateTimeType;
    provider: OrganizationType | PersonType;
    isPartOf: TripType | CreativeWorkType;
    departureTime: DateTimeType;
    itinerary: ItemListType | PlaceType;

    constructor(props : TripType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('Trip');
    }
}