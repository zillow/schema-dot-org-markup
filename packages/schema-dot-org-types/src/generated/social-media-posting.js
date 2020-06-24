//@flow
import objectAssign from 'object-assign';
import {Article} from './article';
import type { ArticleType } from './article';
import type { CreativeWorkType } from '../types';
export type SocialMediaPostingType = {
    sharedContent?: CreativeWorkType,
    } & ArticleType;

export class SocialMediaPosting extends Article {
    sharedContent: CreativeWorkType;

    constructor(props : SocialMediaPostingType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('SocialMediaPosting');
    }
}