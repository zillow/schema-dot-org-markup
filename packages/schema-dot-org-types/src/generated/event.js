//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { LanguageType } from '../types';
import type { TextType } from '../types';
import type { PersonType } from '../types';
import type { OrganizationType } from '../types';
import type { OfferType } from '../types';
import type { BooleanType } from '../types';
import type { AudienceType } from '../types';
import type { DurationType } from '../types';
import type { CreativeWorkType } from '../types';
import type { IntegerType } from '../types';
import type { DateType } from '../types';
import type { DateTimeType } from '../types';
import type { ReviewType } from '../types';
import type { PostalAddressType } from '../types';
import type { PlaceType } from '../types';
import type { AggregateRatingType } from '../types';
import type { EventStatusTypeType } from '../types';
export type EventType = {
    inLanguage?: LanguageType | TextType,
    contributor?: PersonType | OrganizationType,
    director?: PersonType,
    offers?: OfferType,
    isAccessibleForFree?: BooleanType,
    audience?: AudienceType,
    duration?: DurationType,
    typicalAgeRange?: TextType,
    recordedIn?: CreativeWorkType,
    subEvents?: EventType,
    remainingAttendeeCapacity?: IntegerType,
    translator?: OrganizationType | PersonType,
    performers?: PersonType | OrganizationType,
    startDate?: DateType | DateTimeType,
    review?: ReviewType,
    workPerformed?: CreativeWorkType,
    location?: TextType | PostalAddressType | PlaceType,
    maximumAttendeeCapacity?: IntegerType,
    doorTime?: DateTimeType,
    performer?: PersonType | OrganizationType,
    superEvent?: EventType,
    organizer?: OrganizationType | PersonType,
    previousStartDate?: DateType,
    sponsor?: OrganizationType | PersonType,
    aggregateRating?: AggregateRatingType,
    about?: ThingType,
    subEvent?: EventType,
    workFeatured?: CreativeWorkType,
    funder?: OrganizationType | PersonType,
    eventStatus?: EventStatusTypeType,
    endDate?: DateTimeType | DateType,
    attendee?: OrganizationType | PersonType,
    actor?: PersonType,
    attendees?: OrganizationType | PersonType,
    composer?: PersonType | OrganizationType,
    } & ThingType;

export class Event extends Thing {
    inLanguage: LanguageType | TextType;
    contributor: PersonType | OrganizationType;
    director: PersonType;
    offers: OfferType;
    isAccessibleForFree: BooleanType;
    audience: AudienceType;
    duration: DurationType;
    typicalAgeRange: TextType;
    recordedIn: CreativeWorkType;
    subEvents: EventType;
    remainingAttendeeCapacity: IntegerType;
    translator: OrganizationType | PersonType;
    performers: PersonType | OrganizationType;
    startDate: DateType | DateTimeType;
    review: ReviewType;
    workPerformed: CreativeWorkType;
    location: TextType | PostalAddressType | PlaceType;
    maximumAttendeeCapacity: IntegerType;
    doorTime: DateTimeType;
    performer: PersonType | OrganizationType;
    superEvent: EventType;
    organizer: OrganizationType | PersonType;
    previousStartDate: DateType;
    sponsor: OrganizationType | PersonType;
    aggregateRating: AggregateRatingType;
    about: ThingType;
    subEvent: EventType;
    workFeatured: CreativeWorkType;
    funder: OrganizationType | PersonType;
    eventStatus: EventStatusTypeType;
    endDate: DateTimeType | DateType;
    attendee: OrganizationType | PersonType;
    actor: PersonType;
    attendees: OrganizationType | PersonType;
    composer: PersonType | OrganizationType;

    constructor(props : EventType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('Event');
    }
}