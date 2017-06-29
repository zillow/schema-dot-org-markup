//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { AudienceType } from '../types';
import type { OfferType } from '../types';
import type { ImageObjectType } from '../types';
import type { URLType } from '../types';
import type { PhysicalActivityCategoryType } from '../types';
import type { TextType } from '../types';
import type { OfferCatalogType } from '../types';
import type { AggregateRatingType } from '../types';
import type { OpeningHoursSpecificationType } from '../types';
import type { AdministrativeAreaType } from '../types';
import type { PlaceType } from '../types';
import type { GeoShapeType } from '../types';
import type { BrandType } from '../types';
import type { OrganizationType } from '../types';
import type { ServiceChannelType } from '../types';
import type { ReviewType } from '../types';
import type { PersonType } from '../types';
import type { ProductType } from '../types';
export type ServiceType = {
    serviceAudience?: AudienceType,
    offers?: OfferType,
    logo?: ImageObjectType | URLType,
    audience?: AudienceType,
    category?: ThingType | PhysicalActivityCategoryType | TextType,
    produces?: ThingType,
    termsOfService?: TextType | URLType,
    hasOfferCatalog?: OfferCatalogType,
    award?: TextType,
    aggregateRating?: AggregateRatingType,
    hoursAvailable?: OpeningHoursSpecificationType,
    areaServed?: TextType | AdministrativeAreaType | PlaceType | GeoShapeType,
    providerMobility?: TextType,
    brand?: BrandType | OrganizationType,
    availableChannel?: ServiceChannelType,
    serviceOutput?: ThingType,
    review?: ReviewType,
    serviceType?: TextType,
    provider?: PersonType | OrganizationType,
    serviceArea?: PlaceType | GeoShapeType | AdministrativeAreaType,
    isRelatedTo?: ServiceType | ProductType,
    broker?: PersonType | OrganizationType,
    isSimilarTo?: ServiceType | ProductType,
    } & ThingType;

export class Service extends Thing {
    serviceAudience: AudienceType;
    offers: OfferType;
    logo: ImageObjectType | URLType;
    audience: AudienceType;
    category: ThingType | PhysicalActivityCategoryType | TextType;
    produces: ThingType;
    termsOfService: TextType | URLType;
    hasOfferCatalog: OfferCatalogType;
    award: TextType;
    aggregateRating: AggregateRatingType;
    hoursAvailable: OpeningHoursSpecificationType;
    areaServed: TextType | AdministrativeAreaType | PlaceType | GeoShapeType;
    providerMobility: TextType;
    brand: BrandType | OrganizationType;
    availableChannel: ServiceChannelType;
    serviceOutput: ThingType;
    review: ReviewType;
    serviceType: TextType;
    provider: PersonType | OrganizationType;
    serviceArea: PlaceType | GeoShapeType | AdministrativeAreaType;
    isRelatedTo: ServiceType | ProductType;
    broker: PersonType | OrganizationType;
    isSimilarTo: ServiceType | ProductType;

    constructor(props : ServiceType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('Service');
    }
}