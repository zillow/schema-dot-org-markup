//@flow
import objectAssign from 'object-assign';
import {Event} from './event';
import type { EventType } from './event';
import type { BroadcastServiceType } from '../types';
import type { OrganizationType } from '../types';
import type { PersonType } from '../types';
import type { BooleanType } from '../types';
export type PublicationEventType = {
    publishedOn?: BroadcastServiceType,
    publishedBy?: OrganizationType | PersonType,
    free?: BooleanType,
    } & EventType;

export class PublicationEvent extends Event {
    publishedOn: BroadcastServiceType;
    publishedBy: OrganizationType | PersonType;
    free: BooleanType;

    constructor(props : PublicationEventType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('PublicationEvent');
    }
}