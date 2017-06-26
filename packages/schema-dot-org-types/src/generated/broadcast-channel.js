//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { TextType } from '../types';
import type { CableOrSatelliteServiceType } from '../types';
import type { BroadcastServiceType } from '../types';
export type BroadcastChannelType = {
    broadcastServiceTier?: TextType,
    inBroadcastLineup?: CableOrSatelliteServiceType,
    providesBroadcastService?: BroadcastServiceType,
    broadcastChannelId?: TextType,
    } & ThingType;

export class BroadcastChannel extends Thing {
    broadcastServiceTier: TextType;
    inBroadcastLineup: CableOrSatelliteServiceType;
    providesBroadcastService: BroadcastServiceType;
    broadcastChannelId: TextType;

    constructor(props : BroadcastChannelType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('BroadcastChannel');
    }
}