//@flow
import objectAssign from 'object-assign';
import {ContactPoint} from './contact-point';
import type { ContactPointType } from './contact-point';
import type { TextType } from '../types';
import type { CountryType } from '../types';
export type PostalAddressType = {
    streetAddress?: TextType,
    addressLocality?: TextType,
    postalCode?: TextType,
    addressCountry?: CountryType | TextType,
    addressRegion?: TextType,
    postOfficeBoxNumber?: TextType,
    } & ContactPointType;

export class PostalAddress extends ContactPoint {
    streetAddress: TextType;
    addressLocality: TextType;
    postalCode: TextType;
    addressCountry: CountryType | TextType;
    addressRegion: TextType;
    postOfficeBoxNumber: TextType;

    constructor(props : PostalAddressType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('PostalAddress');
    }
}