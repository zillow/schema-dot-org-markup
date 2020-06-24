//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { CreativeWorkType } from '../types';
import type { URLType } from '../types';
import type { ImageObjectType } from '../types';
import type { TextType } from '../types';
import type { AggregateRatingType } from '../types';
import type { PersonType } from '../types';
import type { EventType } from '../types';
import type { QuantitativeValueType } from '../types';
import type { PlaceType } from '../types';
import type { ContactPointType } from '../types';
import type { AdministrativeAreaType } from '../types';
import type { GeoShapeType } from '../types';
import type { DateType } from '../types';
import type { LanguageType } from '../types';
import type { OfferType } from '../types';
import type { ArticleType } from '../types';
import type { OfferCatalogType } from '../types';
import type { ReviewType } from '../types';
import type { PostalAddressType } from '../types';
import type { DemandType } from '../types';
import type { BrandType } from '../types';
import type { OwnershipInfoType } from '../types';
import type { ProductType } from '../types';
import type { ProgramMembershipType } from '../types';
export type OrganizationType = {
    publishingPrinciples?: CreativeWorkType | URLType,
    logo?: URLType | ImageObjectType,
    department?: OrganizationType,
    vatID?: TextType,
    correctionsPolicy?: CreativeWorkType | URLType,
    globalLocationNumber?: TextType,
    leiCode?: TextType,
    aggregateRating?: AggregateRatingType,
    member?: OrganizationType | PersonType,
    event?: EventType,
    sponsor?: OrganizationType | PersonType,
    employee?: PersonType,
    email?: TextType,
    numberOfEmployees?: QuantitativeValueType,
    foundingLocation?: PlaceType,
    events?: EventType,
    contactPoint?: ContactPointType,
    serviceArea?: AdministrativeAreaType | PlaceType | GeoShapeType,
    taxID?: TextType,
    contactPoints?: ContactPointType,
    foundingDate?: DateType,
    award?: TextType,
    parentOrganization?: OrganizationType,
    dissolutionDate?: DateType,
    employees?: PersonType,
    naics?: TextType,
    knowsLanguage?: LanguageType | TextType,
    telephone?: TextType,
    knowsAbout?: URLType | ThingType | TextType,
    subOrganization?: OrganizationType,
    ownershipFundingInfo?: TextType | URLType | CreativeWorkType,
    duns?: TextType,
    legalName?: TextType,
    makesOffer?: OfferType,
    unnamedSourcesPolicy?: CreativeWorkType | URLType,
    diversityStaffingReport?: ArticleType | URLType,
    diversityPolicy?: CreativeWorkType | URLType,
    hasOfferCatalog?: OfferCatalogType,
    review?: ReviewType,
    ethicsPolicy?: URLType | CreativeWorkType,
    location?: TextType | PlaceType | PostalAddressType,
    reviews?: ReviewType,
    seeks?: DemandType,
    areaServed?: GeoShapeType | TextType | PlaceType | AdministrativeAreaType,
    brand?: BrandType | OrganizationType,
    owns?: OwnershipInfoType | ProductType,
    memberOf?: OrganizationType | ProgramMembershipType,
    founders?: PersonType,
    funder?: OrganizationType | PersonType,
    awards?: TextType,
    address?: PostalAddressType | TextType,
    members?: OrganizationType | PersonType,
    isicV4?: TextType,
    faxNumber?: TextType,
    alumni?: PersonType,
    actionableFeedbackPolicy?: URLType | CreativeWorkType,
    hasPOS?: PlaceType,
    founder?: PersonType,
    } & ThingType;

export class Organization extends Thing {
    publishingPrinciples: CreativeWorkType | URLType;
    logo: URLType | ImageObjectType;
    department: OrganizationType;
    vatID: TextType;
    correctionsPolicy: CreativeWorkType | URLType;
    globalLocationNumber: TextType;
    leiCode: TextType;
    aggregateRating: AggregateRatingType;
    member: OrganizationType | PersonType;
    event: EventType;
    sponsor: OrganizationType | PersonType;
    employee: PersonType;
    email: TextType;
    numberOfEmployees: QuantitativeValueType;
    foundingLocation: PlaceType;
    events: EventType;
    contactPoint: ContactPointType;
    serviceArea: AdministrativeAreaType | PlaceType | GeoShapeType;
    taxID: TextType;
    contactPoints: ContactPointType;
    foundingDate: DateType;
    award: TextType;
    parentOrganization: OrganizationType;
    dissolutionDate: DateType;
    employees: PersonType;
    naics: TextType;
    knowsLanguage: LanguageType | TextType;
    telephone: TextType;
    knowsAbout: URLType | ThingType | TextType;
    subOrganization: OrganizationType;
    ownershipFundingInfo: TextType | URLType | CreativeWorkType;
    duns: TextType;
    legalName: TextType;
    makesOffer: OfferType;
    unnamedSourcesPolicy: CreativeWorkType | URLType;
    diversityStaffingReport: ArticleType | URLType;
    diversityPolicy: CreativeWorkType | URLType;
    hasOfferCatalog: OfferCatalogType;
    review: ReviewType;
    ethicsPolicy: URLType | CreativeWorkType;
    location: TextType | PlaceType | PostalAddressType;
    reviews: ReviewType;
    seeks: DemandType;
    areaServed: GeoShapeType | TextType | PlaceType | AdministrativeAreaType;
    brand: BrandType | OrganizationType;
    owns: OwnershipInfoType | ProductType;
    memberOf: OrganizationType | ProgramMembershipType;
    founders: PersonType;
    funder: OrganizationType | PersonType;
    awards: TextType;
    address: PostalAddressType | TextType;
    members: OrganizationType | PersonType;
    isicV4: TextType;
    faxNumber: TextType;
    alumni: PersonType;
    actionableFeedbackPolicy: URLType | CreativeWorkType;
    hasPOS: PlaceType;
    founder: PersonType;

    constructor(props : OrganizationType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('Organization');
    }
}