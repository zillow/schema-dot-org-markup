//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { URLType } from '../types';
import type { OpeningHoursSpecificationType } from '../types';
import type { ImageObjectType } from '../types';
import type { GeoCoordinatesType } from '../types';
import type { GeoShapeType } from '../types';
import type { TextType } from '../types';
import type { GeospatialGeometryType } from '../types';
import type { PhotographType } from '../types';
import type { PostalAddressType } from '../types';
import type { IntegerType } from '../types';
import type { AggregateRatingType } from '../types';
import type { ReviewType } from '../types';
import type { PropertyValueType } from '../types';
import type { BooleanType } from '../types';
import type { MapType } from '../types';
import type { EventType } from '../types';
export type PlaceType = {
    maps?: URLType,
    specialOpeningHoursSpecification?: OpeningHoursSpecificationType,
    logo?: ImageObjectType | URLType,
    geo?: GeoCoordinatesType | GeoShapeType,
    map?: URLType,
    faxNumber?: TextType,
    geospatiallyDisjoint?: GeospatialGeometryType | PlaceType,
    geospatiallyCrosses?: PlaceType | GeospatialGeometryType,
    photos?: ImageObjectType | PhotographType,
    address?: TextType | PostalAddressType,
    containedIn?: PlaceType,
    geospatiallyTouches?: GeospatialGeometryType | PlaceType,
    globalLocationNumber?: TextType,
    maximumAttendeeCapacity?: IntegerType,
    openingHoursSpecification?: OpeningHoursSpecificationType,
    aggregateRating?: AggregateRatingType,
    reviews?: ReviewType,
    additionalProperty?: PropertyValueType,
    geospatiallyContains?: PlaceType | GeospatialGeometryType,
    geospatiallyOverlaps?: PlaceType | GeospatialGeometryType,
    branchCode?: TextType,
    geospatiallyCoveredBy?: PlaceType | GeospatialGeometryType,
    photo?: PhotographType | ImageObjectType,
    containsPlace?: PlaceType,
    telephone?: TextType,
    review?: ReviewType,
    containedInPlace?: PlaceType,
    smokingAllowed?: BooleanType,
    hasMap?: MapType | URLType,
    geospatiallyWithin?: GeospatialGeometryType | PlaceType,
    geospatiallyCovers?: GeospatialGeometryType | PlaceType,
    events?: EventType,
    isicV4?: TextType,
    geospatiallyIntersects?: PlaceType | GeospatialGeometryType,
    event?: EventType,
    geospatiallyEquals?: GeospatialGeometryType | PlaceType,
    } & ThingType;

export class Place extends Thing {
    maps: URLType;
    specialOpeningHoursSpecification: OpeningHoursSpecificationType;
    logo: ImageObjectType | URLType;
    geo: GeoCoordinatesType | GeoShapeType;
    map: URLType;
    faxNumber: TextType;
    geospatiallyDisjoint: GeospatialGeometryType | PlaceType;
    geospatiallyCrosses: PlaceType | GeospatialGeometryType;
    photos: ImageObjectType | PhotographType;
    address: TextType | PostalAddressType;
    containedIn: PlaceType;
    geospatiallyTouches: GeospatialGeometryType | PlaceType;
    globalLocationNumber: TextType;
    maximumAttendeeCapacity: IntegerType;
    openingHoursSpecification: OpeningHoursSpecificationType;
    aggregateRating: AggregateRatingType;
    reviews: ReviewType;
    additionalProperty: PropertyValueType;
    geospatiallyContains: PlaceType | GeospatialGeometryType;
    geospatiallyOverlaps: PlaceType | GeospatialGeometryType;
    branchCode: TextType;
    geospatiallyCoveredBy: PlaceType | GeospatialGeometryType;
    photo: PhotographType | ImageObjectType;
    containsPlace: PlaceType;
    telephone: TextType;
    review: ReviewType;
    containedInPlace: PlaceType;
    smokingAllowed: BooleanType;
    hasMap: MapType | URLType;
    geospatiallyWithin: GeospatialGeometryType | PlaceType;
    geospatiallyCovers: GeospatialGeometryType | PlaceType;
    events: EventType;
    isicV4: TextType;
    geospatiallyIntersects: PlaceType | GeospatialGeometryType;
    event: EventType;
    geospatiallyEquals: GeospatialGeometryType | PlaceType;

    constructor(props : PlaceType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('Place');
    }
}