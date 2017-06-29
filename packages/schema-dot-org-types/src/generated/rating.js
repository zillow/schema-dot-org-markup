//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { NumberType } from '../types';
import type { TextType } from '../types';
import type { PersonType } from '../types';
import type { OrganizationType } from '../types';
export type RatingType = {
    bestRating?: NumberType | TextType,
    worstRating?: TextType | NumberType,
    author?: PersonType | OrganizationType,
    ratingValue?: NumberType | TextType,
    } & ThingType;

export class Rating extends Thing {
    bestRating: NumberType | TextType;
    worstRating: TextType | NumberType;
    author: PersonType | OrganizationType;
    ratingValue: NumberType | TextType;

    constructor(props : RatingType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('Rating');
    }
}