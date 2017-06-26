//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { OpeningHoursSpecificationType } from '../types';
import type { PhotographType } from '../types';
import type { ImageObjectType } from '../types';
import type { BooleanType } from '../types';
import type { URLType } from '../types';
import type { MapType } from '../types';
import type { GeoShapeType } from '../types';
import type { GeoCoordinatesType } from '../types';
import type { TextType } from '../types';
export type PlaceType = {
    specialOpeningHoursSpecification?: OpeningHoursSpecificationType,
    photos?: PhotographType | ImageObjectType,
    smokingAllowed?: BooleanType,
    containedIn?: PlaceType,
    map?: URLType,
    containedInPlace?: PlaceType,
    hasMap?: URLType | MapType,
    openingHoursSpecification?: OpeningHoursSpecificationType,
    geo?: GeoShapeType | GeoCoordinatesType,
    branchCode?: TextType,
    photo?: PhotographType | ImageObjectType,
    maps?: URLType,
    containsPlace?: PlaceType,
    } & ThingType;

export class Place extends Thing {
    specialOpeningHoursSpecification: OpeningHoursSpecificationType;
    photos: PhotographType | ImageObjectType;
    smokingAllowed: BooleanType;
    containedIn: PlaceType;
    map: URLType;
    containedInPlace: PlaceType;
    hasMap: URLType | MapType;
    openingHoursSpecification: OpeningHoursSpecificationType;
    geo: GeoShapeType | GeoCoordinatesType;
    branchCode: TextType;
    photo: PhotographType | ImageObjectType;
    maps: URLType;
    containsPlace: PlaceType;

    constructor(props : PlaceType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('Place');
    }
}