//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { OpeningHoursSpecificationType } from '../types';
import type { ImageObjectType } from '../types';
import type { URLType } from '../types';
import type { PhotographType } from '../types';
import type { TextType } from '../types';
import type { BooleanType } from '../types';
import type { AggregateRatingType } from '../types';
import type { PropertyValueType } from '../types';
import type { EventType } from '../types';
import type { LocationFeatureSpecificationType } from '../types';
import type { GeospatialGeometryType } from '../types';
import type { MapType } from '../types';
import type { GeoShapeType } from '../types';
import type { GeoCoordinatesType } from '../types';
import type { ReviewType } from '../types';
import type { PostalAddressType } from '../types';
import type { IntegerType } from '../types';
export type PlaceType = {
    specialOpeningHoursSpecification?: OpeningHoursSpecificationType,
    logo?: ImageObjectType | URLType,
    photos?: PhotographType | ImageObjectType,
    globalLocationNumber?: TextType,
    publicAccess?: BooleanType,
    aggregateRating?: AggregateRatingType,
    additionalProperty?: PropertyValueType,
    event?: EventType,
    amenityFeature?: LocationFeatureSpecificationType,
    smokingAllowed?: BooleanType,
    events?: EventType,
    containedIn?: PlaceType,
    map?: URLType,
    geospatiallyOverlaps?: GeospatialGeometryType | PlaceType,
    telephone?: TextType,
    containedInPlace?: PlaceType,
    geospatiallyCoveredBy?: PlaceType | GeospatialGeometryType,
    hasMap?: MapType | URLType,
    geospatiallyWithin?: PlaceType | GeospatialGeometryType,
    isicV4?: TextType,
    geospatiallyIntersects?: GeospatialGeometryType | PlaceType,
    openingHoursSpecification?: OpeningHoursSpecificationType,
    geo?: GeoShapeType | GeoCoordinatesType,
    geospatiallyDisjoint?: PlaceType | GeospatialGeometryType,
    geospatiallyCrosses?: PlaceType | GeospatialGeometryType,
    geospatiallyTouches?: PlaceType | GeospatialGeometryType,
    reviews?: ReviewType,
    branchCode?: TextType,
    photo?: ImageObjectType | PhotographType,
    geospatiallyCovers?: PlaceType | GeospatialGeometryType,
    maps?: URLType,
    isAccessibleForFree?: BooleanType,
    address?: TextType | PostalAddressType,
    faxNumber?: TextType,
    maximumAttendeeCapacity?: IntegerType,
    geospatiallyContains?: GeospatialGeometryType | PlaceType,
    containsPlace?: PlaceType,
    review?: ReviewType,
    geospatiallyEquals?: PlaceType | GeospatialGeometryType,
    } & ThingType;

export class Place extends Thing {
    specialOpeningHoursSpecification: OpeningHoursSpecificationType;
    logo: ImageObjectType | URLType;
    photos: PhotographType | ImageObjectType;
    globalLocationNumber: TextType;
    publicAccess: BooleanType;
    aggregateRating: AggregateRatingType;
    additionalProperty: PropertyValueType;
    event: EventType;
    amenityFeature: LocationFeatureSpecificationType;
    smokingAllowed: BooleanType;
    events: EventType;
    containedIn: PlaceType;
    map: URLType;
    geospatiallyOverlaps: GeospatialGeometryType | PlaceType;
    telephone: TextType;
    containedInPlace: PlaceType;
    geospatiallyCoveredBy: PlaceType | GeospatialGeometryType;
    hasMap: MapType | URLType;
    geospatiallyWithin: PlaceType | GeospatialGeometryType;
    isicV4: TextType;
    geospatiallyIntersects: GeospatialGeometryType | PlaceType;
    openingHoursSpecification: OpeningHoursSpecificationType;
    geo: GeoShapeType | GeoCoordinatesType;
    geospatiallyDisjoint: PlaceType | GeospatialGeometryType;
    geospatiallyCrosses: PlaceType | GeospatialGeometryType;
    geospatiallyTouches: PlaceType | GeospatialGeometryType;
    reviews: ReviewType;
    branchCode: TextType;
    photo: ImageObjectType | PhotographType;
    geospatiallyCovers: PlaceType | GeospatialGeometryType;
    maps: URLType;
    isAccessibleForFree: BooleanType;
    address: TextType | PostalAddressType;
    faxNumber: TextType;
    maximumAttendeeCapacity: IntegerType;
    geospatiallyContains: GeospatialGeometryType | PlaceType;
    containsPlace: PlaceType;
    review: ReviewType;
    geospatiallyEquals: PlaceType | GeospatialGeometryType;

    constructor(props : PlaceType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('Place');
    }
}