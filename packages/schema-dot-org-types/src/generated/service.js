//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { AudienceType } from '../types';
import type { TextType } from '../types';
import type { URLType } from '../types';
import type { ServiceChannelType } from '../types';
export type ServiceType = {
    serviceAudience?: AudienceType,
    termsOfService?: TextType | URLType,
    produces?: ThingType,
    providerMobility?: TextType,
    availableChannel?: ServiceChannelType,
    serviceOutput?: ThingType,
    serviceType?: TextType,
    } & ThingType;

export default class Service extends Thing {
    serviceAudience: AudienceType;
    termsOfService: TextType | URLType;
    produces: ThingType;
    providerMobility: TextType;
    availableChannel: ServiceChannelType;
    serviceOutput: ThingType;
    serviceType: TextType;

    constructor(props : ServiceType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('Service');
    }
}