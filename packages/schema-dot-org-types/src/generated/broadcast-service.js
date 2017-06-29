//@flow
import objectAssign from 'object-assign';
import {Service} from './service';
import type { ServiceType } from './service';
import type { TextType } from '../types';
import type { OrganizationType } from '../types';
import type { BroadcastFrequencySpecificationType } from '../types';
import type { PlaceType } from '../types';
import type { BroadcastChannelType } from '../types';
export type BroadcastServiceType = {
    parentService?: BroadcastServiceType,
    videoFormat?: TextType,
    broadcaster?: OrganizationType,
    broadcastAffiliateOf?: OrganizationType,
    broadcastFrequency?: TextType | BroadcastFrequencySpecificationType,
    broadcastTimezone?: TextType,
    broadcastDisplayName?: TextType,
    area?: PlaceType,
    hasBroadcastChannel?: BroadcastChannelType,
    } & ServiceType;

export class BroadcastService extends Service {
    parentService: BroadcastServiceType;
    videoFormat: TextType;
    broadcaster: OrganizationType;
    broadcastAffiliateOf: OrganizationType;
    broadcastFrequency: TextType | BroadcastFrequencySpecificationType;
    broadcastTimezone: TextType;
    broadcastDisplayName: TextType;
    area: PlaceType;
    hasBroadcastChannel: BroadcastChannelType;

    constructor(props : BroadcastServiceType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('BroadcastService');
    }
}