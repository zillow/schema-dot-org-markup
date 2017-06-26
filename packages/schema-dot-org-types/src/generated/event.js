//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { CreativeWorkType } from '../types';
import type { IntegerType } from '../types';
import type { OrganizationType } from '../types';
import type { PersonType } from '../types';
import type { DateType } from '../types';
import type { DateTimeType } from '../types';
import type { EventStatusTypeType } from '../types';
export type EventType = {
    recordedIn?: CreativeWorkType,
    subEvents?: EventType,
    remainingAttendeeCapacity?: IntegerType,
    performers?: OrganizationType | PersonType,
    workPerformed?: CreativeWorkType,
    superEvent?: EventType,
    organizer?: OrganizationType | PersonType,
    performer?: OrganizationType | PersonType,
    previousStartDate?: DateType,
    doorTime?: DateTimeType,
    subEvent?: EventType,
    workFeatured?: CreativeWorkType,
    eventStatus?: EventStatusTypeType,
    attendee?: OrganizationType | PersonType,
    attendees?: OrganizationType | PersonType,
    } & ThingType;

export class Event extends Thing {
    recordedIn: CreativeWorkType;
    subEvents: EventType;
    remainingAttendeeCapacity: IntegerType;
    performers: OrganizationType | PersonType;
    workPerformed: CreativeWorkType;
    superEvent: EventType;
    organizer: OrganizationType | PersonType;
    performer: OrganizationType | PersonType;
    previousStartDate: DateType;
    doorTime: DateTimeType;
    subEvent: EventType;
    workFeatured: CreativeWorkType;
    eventStatus: EventStatusTypeType;
    attendee: OrganizationType | PersonType;
    attendees: OrganizationType | PersonType;

    constructor(props : EventType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('Event');
    }
}