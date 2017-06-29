//@flow
import objectAssign from 'object-assign';
import {Context} from '../context';
import type { ContextType } from '../context';
import type { TextType } from '../types';
import type { URLType } from '../types';
import type { ImageObjectType } from '../types';
import type { CreativeWorkType } from '../types';
import type { ActionType } from '../types';
import type { PropertyValueType } from '../types';
export type ThingType = {
    disambiguatingDescription?: TextType,
    sameAs?: URLType,
    alternateName?: TextType,
    image?: URLType | ImageObjectType,
    name?: TextType,
    mainEntityOfPage?: URLType | CreativeWorkType,
    potentialAction?: ActionType,
    description?: TextType,
    identifier?: TextType | PropertyValueType | URLType,
    url?: URLType,
    additionalType?: URLType,
    } & ContextType;

export class Thing extends Context {
    disambiguatingDescription: TextType;
    sameAs: URLType;
    alternateName: TextType;
    image: URLType | ImageObjectType;
    name: TextType;
    mainEntityOfPage: URLType | CreativeWorkType;
    potentialAction: ActionType;
    description: TextType;
    identifier: TextType | PropertyValueType | URLType;
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