//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { NumberType } from '../types';
import type { TextType } from '../types';
export type GeoCoordinatesType = {
    longitude?: NumberType | TextType,
    latitude?: TextType | NumberType,
    } & ThingType;

export class GeoCoordinates extends Thing {
    longitude: NumberType | TextType;
    latitude: TextType | NumberType;

    constructor(props : GeoCoordinatesType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('GeoCoordinates');
    }
}