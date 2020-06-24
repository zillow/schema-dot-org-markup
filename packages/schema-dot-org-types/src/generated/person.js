//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { URLType } from '../types';
import type { CreativeWorkType } from '../types';
import type { OrganizationType } from '../types';
import type { QuantitativeValueType } from '../types';
import type { TextType } from '../types';
import type { PlaceType } from '../types';
import type { OccupationType } from '../types';
import type { EventType } from '../types';
import type { ContactPointType } from '../types';
import type { EducationalOrganizationType } from '../types';
import type { LanguageType } from '../types';
import type { CountryType } from '../types';
import type { DemandType } from '../types';
import type { OfferType } from '../types';
import type { OfferCatalogType } from '../types';
import type { MonetaryAmountType } from '../types';
import type { PriceSpecificationType } from '../types';
import type { BrandType } from '../types';
import type { ProductType } from '../types';
import type { OwnershipInfoType } from '../types';
import type { DateType } from '../types';
import type { ProgramMembershipType } from '../types';
import type { DistanceType } from '../types';
import type { GenderTypeType } from '../types';
import type { PostalAddressType } from '../types';
export type PersonType = {
    publishingPrinciples?: URLType | CreativeWorkType,
    worksFor?: OrganizationType,
    weight?: QuantitativeValueType,
    faxNumber?: TextType,
    additionalName?: TextType,
    globalLocationNumber?: TextType,
    hasPOS?: PlaceType,
    sponsor?: PersonType | OrganizationType,
    email?: TextType,
    hasOccupation?: OccupationType,
    performerIn?: EventType,
    jobTitle?: TextType,
    funder?: OrganizationType | PersonType,
    contactPoint?: ContactPointType,
    homeLocation?: PlaceType | ContactPointType,
    taxID?: TextType,
    alumniOf?: EducationalOrganizationType | OrganizationType,
    contactPoints?: ContactPointType,
    parent?: PersonType,
    award?: TextType,
    deathPlace?: PlaceType,
    naics?: TextType,
    knowsLanguage?: TextType | LanguageType,
    nationality?: CountryType,
    telephone?: TextType,
    affiliation?: OrganizationType,
    seeks?: DemandType,
    knows?: PersonType,
    knowsAbout?: TextType | ThingType | URLType,
    isicV4?: TextType,
    duns?: TextType,
    honorificPrefix?: TextType,
    spouse?: PersonType,
    makesOffer?: OfferType,
    familyName?: TextType,
    follows?: PersonType,
    hasOfferCatalog?: OfferCatalogType,
    netWorth?: MonetaryAmountType | PriceSpecificationType,
    children?: PersonType,
    workLocation?: ContactPointType | PlaceType,
    brand?: OrganizationType | BrandType,
    owns?: ProductType | OwnershipInfoType,
    deathDate?: DateType,
    memberOf?: OrganizationType | ProgramMembershipType,
    birthDate?: DateType,
    honorificSuffix?: TextType,
    height?: QuantitativeValueType | DistanceType,
    awards?: TextType,
    gender?: TextType | GenderTypeType,
    relatedTo?: PersonType,
    address?: TextType | PostalAddressType,
    colleague?: URLType | PersonType,
    vatID?: TextType,
    colleagues?: PersonType,
    givenName?: TextType,
    birthPlace?: PlaceType,
    siblings?: PersonType,
    sibling?: PersonType,
    parents?: PersonType,
    } & ThingType;

export class Person extends Thing {
    publishingPrinciples: URLType | CreativeWorkType;
    worksFor: OrganizationType;
    weight: QuantitativeValueType;
    faxNumber: TextType;
    additionalName: TextType;
    globalLocationNumber: TextType;
    hasPOS: PlaceType;
    sponsor: PersonType | OrganizationType;
    email: TextType;
    hasOccupation: OccupationType;
    performerIn: EventType;
    jobTitle: TextType;
    funder: OrganizationType | PersonType;
    contactPoint: ContactPointType;
    homeLocation: PlaceType | ContactPointType;
    taxID: TextType;
    alumniOf: EducationalOrganizationType | OrganizationType;
    contactPoints: ContactPointType;
    parent: PersonType;
    award: TextType;
    deathPlace: PlaceType;
    naics: TextType;
    knowsLanguage: TextType | LanguageType;
    nationality: CountryType;
    telephone: TextType;
    affiliation: OrganizationType;
    seeks: DemandType;
    knows: PersonType;
    knowsAbout: TextType | ThingType | URLType;
    isicV4: TextType;
    duns: TextType;
    honorificPrefix: TextType;
    spouse: PersonType;
    makesOffer: OfferType;
    familyName: TextType;
    follows: PersonType;
    hasOfferCatalog: OfferCatalogType;
    netWorth: MonetaryAmountType | PriceSpecificationType;
    children: PersonType;
    workLocation: ContactPointType | PlaceType;
    brand: OrganizationType | BrandType;
    owns: ProductType | OwnershipInfoType;
    deathDate: DateType;
    memberOf: OrganizationType | ProgramMembershipType;
    birthDate: DateType;
    honorificSuffix: TextType;
    height: QuantitativeValueType | DistanceType;
    awards: TextType;
    gender: TextType | GenderTypeType;
    relatedTo: PersonType;
    address: TextType | PostalAddressType;
    colleague: URLType | PersonType;
    vatID: TextType;
    colleagues: PersonType;
    givenName: TextType;
    birthPlace: PlaceType;
    siblings: PersonType;
    sibling: PersonType;
    parents: PersonType;

    constructor(props : PersonType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('Person');
    }
}