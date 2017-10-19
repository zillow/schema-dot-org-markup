//@flow
import objectAssign from 'object-assign';
import {Context} from '../context';
import type { ContextType } from '../context';
import type { TextType } from '../types';
import type { CreativeWorkType } from '../types';
import type { EventType } from '../types';
import type { URLType } from '../types';
import type { ImageObjectType } from '../types';
import type { ActionType } from '../types';
import type { PropertyValueType } from '../types';
export type ThingType = {
    disambiguatingDescription?: TextType,
    subjectOf?: CreativeWorkType | EventType,
    sameAs?: URLType,
    alternateName?: TextType,
    image?: ImageObjectType | URLType,
    mainEntityOfPage?: CreativeWorkType | URLType,
    potentialAction?: ActionType,
    description?: TextType,
    name?: TextType,
    identifier?: URLType | PropertyValueType | TextType,
    url?: URLType,
    additionalType?: URLType,
    } & ContextType;

export class Thing extends Context {
    disambiguatingDescription: TextType;
    subjectOf: CreativeWorkType | EventType;
    sameAs: URLType;
    alternateName: TextType;
    image: ImageObjectType | URLType;
    mainEntityOfPage: CreativeWorkType | URLType;
    potentialAction: ActionType;
    description: TextType;
    name: TextType;
    identifier: URLType | PropertyValueType | TextType;
    url: URLType;
    additionalType: URLType;

    constructor(props : ThingType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('Thing');
    }
}