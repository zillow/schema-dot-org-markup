//@flow
import objectAssign from 'object-assign';
import {Rating} from './rating';
import type { RatingType } from './rating';
import type { ThingType } from '../types';
import type { IntegerType } from '../types';
export type AggregateRatingType = {
    itemReviewed?: ThingType,
    ratingCount?: IntegerType,
    reviewCount?: IntegerType,
    } & RatingType;

export class AggregateRating extends Rating {
    itemReviewed: ThingType;
    ratingCount: IntegerType;
    reviewCount: IntegerType;

    constructor(props : AggregateRatingType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('AggregateRating');
    }
}