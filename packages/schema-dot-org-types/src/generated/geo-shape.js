//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { TextType } from '../types';
export type GeoShapeType = {
    circle?: TextType,
    polygon?: TextType,
    box?: TextType,
    line?: TextType,
    } & ThingType;

export class GeoShape extends Thing {
    circle: TextType;
    polygon: TextType;
    box: TextType;
    line: TextType;

    constructor(props : GeoShapeType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('GeoShape');
    }
}