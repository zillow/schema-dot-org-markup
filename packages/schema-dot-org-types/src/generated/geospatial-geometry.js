//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { PlaceType } from '../types';
export type GeospatialGeometryType = {
    geospatiallyDisjoint?: GeospatialGeometryType | PlaceType,
    geospatiallyCrosses?: PlaceType | GeospatialGeometryType,
    geospatiallyTouches?: GeospatialGeometryType | PlaceType,
    geospatiallyOverlaps?: GeospatialGeometryType | PlaceType,
    geospatiallyContains?: GeospatialGeometryType | PlaceType,
    geospatiallyIntersects?: PlaceType | GeospatialGeometryType,
    geospatiallyCoveredBy?: PlaceType | GeospatialGeometryType,
    geospatiallyWithin?: GeospatialGeometryType | PlaceType,
    geospatiallyCovers?: PlaceType | GeospatialGeometryType,
    geospatiallyEquals?: PlaceType | GeospatialGeometryType,
    } & ThingType;

export class GeospatialGeometry extends Thing {
    geospatiallyDisjoint: GeospatialGeometryType | PlaceType;
    geospatiallyCrosses: PlaceType | GeospatialGeometryType;
    geospatiallyTouches: GeospatialGeometryType | PlaceType;
    geospatiallyOverlaps: GeospatialGeometryType | PlaceType;
    geospatiallyContains: GeospatialGeometryType | PlaceType;
    geospatiallyIntersects: PlaceType | GeospatialGeometryType;
    geospatiallyCoveredBy: PlaceType | GeospatialGeometryType;
    geospatiallyWithin: GeospatialGeometryType | PlaceType;
    geospatiallyCovers: PlaceType | GeospatialGeometryType;
    geospatiallyEquals: PlaceType | GeospatialGeometryType;

    constructor(props : GeospatialGeometryType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('GeospatialGeometry');
    }
}