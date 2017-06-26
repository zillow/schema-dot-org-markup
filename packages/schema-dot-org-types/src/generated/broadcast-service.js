//@flow
import Service from './service';
import type { ServiceType } from './service';
import type { OrganizationType } from '../types';
import type { TextType } from '../types';
import type { PlaceType } from '../types';
import type { BroadcastChannelType } from '../types';
export type BroadcastServiceType = {
    parentService?: BroadcastServiceType,
    broadcaster?: OrganizationType,
    broadcastAffiliateOf?: OrganizationType,
    broadcastTimezone?: TextType,
    broadcastDisplayName?: TextType,
    area?: PlaceType,
    hasBroadcastChannel?: BroadcastChannelType,
    } & ServiceType;

export default class BroadcastService extends Service {
    parentService: BroadcastServiceType;
    broadcaster: OrganizationType;
    broadcastAffiliateOf: OrganizationType;
    broadcastTimezone: TextType;
    broadcastDisplayName: TextType;
    area: PlaceType;
    hasBroadcastChannel: BroadcastChannelType;

    constructor(props : BroadcastServiceType) {
        super(props);
        Object.assign(this, props);
    }

    getType(): string {
        return ('BroadcastService');
    }
}