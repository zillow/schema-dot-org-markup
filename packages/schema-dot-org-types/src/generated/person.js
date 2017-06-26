//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { OrganizationType } from '../types';
import type { TextType } from '../types';
import type { EventType } from '../types';
import type { ContactPointType } from '../types';
import type { PlaceType } from '../types';
import type { EducationalOrganizationType } from '../types';
import type { CountryType } from '../types';
import type { MonetaryAmountType } from '../types';
import type { PriceSpecificationType } from '../types';
import type { DateType } from '../types';
import type { GenderTypeType } from '../types';
import type { URLType } from '../types';
export type PersonType = {
    worksFor?: OrganizationType,
    additionalName?: TextType,
    performerIn?: EventType,
    jobTitle?: TextType,
    homeLocation?: ContactPointType | PlaceType,
    alumniOf?: OrganizationType | EducationalOrganizationType,
    deathPlace?: PlaceType,
    nationality?: CountryType,
    affiliation?: OrganizationType,
    knows?: PersonType,
    honorificPrefix?: TextType,
    familyName?: TextType,
    follows?: PersonType,
    netWorth?: MonetaryAmountType | PriceSpecificationType,
    children?: PersonType,
    workLocation?: PlaceType | ContactPointType,
    deathDate?: DateType,
    birthDate?: DateType,
    honorificSuffix?: TextType,
    gender?: GenderTypeType | TextType,
    relatedTo?: PersonType,
    parent?: PersonType,
    colleague?: PersonType | URLType,
    colleagues?: PersonType,
    givenName?: TextType,
    spouse?: PersonType,
    birthPlace?: PlaceType,
    siblings?: PersonType,
    sibling?: PersonType,
    parents?: PersonType,
    } & ThingType;

export class Person extends Thing {
    worksFor: OrganizationType;
    additionalName: TextType;
    performerIn: EventType;
    jobTitle: TextType;
    homeLocation: ContactPointType | PlaceType;
    alumniOf: OrganizationType | EducationalOrganizationType;
    deathPlace: PlaceType;
    nationality: CountryType;
    affiliation: OrganizationType;
    knows: PersonType;
    honorificPrefix: TextType;
    familyName: TextType;
    follows: PersonType;
    netWorth: MonetaryAmountType | PriceSpecificationType;
    children: PersonType;
    workLocation: PlaceType | ContactPointType;
    deathDate: DateType;
    birthDate: DateType;
    honorificSuffix: TextType;
    gender: GenderTypeType | TextType;
    relatedTo: PersonType;
    parent: PersonType;
    colleague: PersonType | URLType;
    colleagues: PersonType;
    givenName: TextType;
    spouse: PersonType;
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