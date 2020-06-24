//@flow
import objectAssign from 'object-assign';
import {SocialMediaPosting} from './social-media-posting';
import type { SocialMediaPostingType } from './social-media-posting';
export type BlogPostingType = {} & SocialMediaPostingType;

export class BlogPosting extends SocialMediaPosting {
    constructor(props : BlogPostingType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('BlogPosting');
    }
}