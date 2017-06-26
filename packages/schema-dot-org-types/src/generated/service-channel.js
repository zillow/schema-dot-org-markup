//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { URLType } from '../types';
import type { ServiceType } from '../types';
import type { PlaceType } from '../types';
import type { PostalAddressType } from '../types';
import type { DurationType } from '../types';
import type { ContactPointType } from '../types';
export type ServiceChannelType = {
    serviceUrl?: URLType,
    providesService?: ServiceType,
    serviceLocation?: PlaceType,
    servicePostalAddress?: PostalAddressType,
    processingTime?: DurationType,
    servicePhone?: ContactPointType,
    serviceSmsNumber?: ContactPointType,
    } & ThingType;

export default class ServiceChannel extends Thing {
    serviceUrl: URLType;
    providesService: ServiceType;
    serviceLocation: PlaceType;
    servicePostalAddress: PostalAddressType;
    processingTime: DurationType;
    servicePhone: ContactPointType;
    serviceSmsNumber: ContactPointType;

    constructor(props : ServiceChannelType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('ServiceChannel');
    }
}