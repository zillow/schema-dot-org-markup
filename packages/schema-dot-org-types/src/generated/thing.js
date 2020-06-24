//@flow
import objectAssign from 'object-assign';
import {Context} from '../context';
import type { ContextType } from '../context';
import type { URLType } from '../types';
import type { CreativeWorkType } from '../types';
import type { TextType } from '../types';
import type { EventType } from '../types';
import type { PropertyValueType } from '../types';
import type { ImageObjectType } from '../types';
import type { ActionType } from '../types';
export type ThingType = {
    mainEntityOfPage?: URLType | CreativeWorkType,
    disambiguatingDescription?: TextType,
    url?: URLType,
    subjectOf?: CreativeWorkType | EventType,
    identifier?: TextType | PropertyValueType | URLType,
    name?: TextType,
    sameAs?: URLType,
    alternateName?: TextType,
    image?: ImageObjectType | URLType,
    description?: TextType,
    potentialAction?: ActionType,
    additionalType?: URLType,
    } & ContextType;

export class Thing extends Context {
    mainEntityOfPage: URLType | CreativeWorkType;
    disambiguatingDescription: TextType;
    url: URLType;
    subjectOf: CreativeWorkType | EventType;
    identifier: TextType | PropertyValueType | URLType;
    name: TextType;
    sameAs: URLType;
    alternateName: TextType;
    image: ImageObjectType | URLType;
    description: TextType;
    potentialAction: ActionType;
    additionalType: URLType;

    constructor(props : ThingType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('Thing');
    }
}