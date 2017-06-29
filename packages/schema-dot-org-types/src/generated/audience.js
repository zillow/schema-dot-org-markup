//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { AdministrativeAreaType } from '../types';
import type { TextType } from '../types';
export type AudienceType = {
    geographicArea?: AdministrativeAreaType,
    audienceType?: TextType,
    } & ThingType;

export class Audience extends Thing {
    geographicArea: AdministrativeAreaType;
    audienceType: TextType;

    constructor(props : AudienceType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('Audience');
    }
}