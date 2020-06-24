//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { StructuredValueType } from '../types';
import type { TextType } from '../types';
import type { ContactPointOptionType } from '../types';
import type { OpeningHoursSpecificationType } from '../types';
import type { PlaceType } from '../types';
import type { GeoShapeType } from '../types';
import type { AdministrativeAreaType } from '../types';
import type { LanguageType } from '../types';
import type { ProductType } from '../types';
export type ContactPointType = {
    faxNumber?: TextType,
    contactOption?: ContactPointOptionType,
    hoursAvailable?: OpeningHoursSpecificationType,
    areaServed?: PlaceType | TextType | GeoShapeType | AdministrativeAreaType,
    availableLanguage?: TextType | LanguageType,
    telephone?: TextType,
    email?: TextType,
    productSupported?: TextType | ProductType,
    serviceArea?: AdministrativeAreaType | GeoShapeType | PlaceType,
    contactType?: TextType,
    } & StructuredValueType;

export class ContactPoint extends Thing {
    faxNumber: TextType;
    contactOption: ContactPointOptionType;
    hoursAvailable: OpeningHoursSpecificationType;
    areaServed: PlaceType | TextType | GeoShapeType | AdministrativeAreaType;
    availableLanguage: TextType | LanguageType;
    telephone: TextType;
    email: TextType;
    productSupported: TextType | ProductType;
    serviceArea: AdministrativeAreaType | GeoShapeType | PlaceType;
    contactType: TextType;

    constructor(props : ContactPointType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('ContactPoint');
    }
}