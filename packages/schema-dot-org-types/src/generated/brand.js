//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { URLType } from '../types';
import type { ImageObjectType } from '../types';
import type { AggregateRatingType } from '../types';
import type { ReviewType } from '../types';
export type BrandType = {
    logo?: URLType | ImageObjectType,
    aggregateRating?: AggregateRatingType,
    review?: ReviewType,
    } & ThingType;

export class Brand extends Thing {
    logo: URLType | ImageObjectType;
    aggregateRating: AggregateRatingType;
    review: ReviewType;

    constructor(props : BrandType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('Brand');
    }
}