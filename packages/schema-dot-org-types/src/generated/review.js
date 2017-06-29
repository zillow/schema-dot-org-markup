//@flow
import objectAssign from 'object-assign';
import {CreativeWork} from './creative-work';
import type { CreativeWorkType } from './creative-work';
import type { TextType } from '../types';
import type { ThingType } from '../types';
import type { RatingType } from '../types';
export type ReviewType = {
    reviewBody?: TextType,
    itemReviewed?: ThingType,
    reviewRating?: RatingType,
    } & CreativeWorkType;

export class Review extends CreativeWork {
    reviewBody: TextType;
    itemReviewed: ThingType;
    reviewRating: RatingType;

    constructor(props : ReviewType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('Review');
    }
}