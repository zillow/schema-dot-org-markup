//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { StructuredValueType } from '../types';
import type { TextType } from '../types';
import type { NumberType } from '../types';
import type { PostalAddressType } from '../types';
import type { CountryType } from '../types';
export type GeoCoordinatesType = {
    longitude?: TextType | NumberType,
    address?: TextType | PostalAddressType,
    postalCode?: TextType,
    elevation?: NumberType | TextType,
    latitude?: NumberType | TextType,
    addressCountry?: TextType | CountryType,
    } & StructuredValueType;

export class GeoCoordinates extends Thing {
    longitude: TextType | NumberType;
    address: TextType | PostalAddressType;
    postalCode: TextType;
    elevation: NumberType | TextType;
    latitude: NumberType | TextType;
    addressCountry: TextType | CountryType;

    constructor(props : GeoCoordinatesType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('GeoCoordinates');
    }
}