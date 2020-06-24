//@flow
import objectAssign from 'object-assign';
import {BlogPosting} from './blog-posting';
import type { BlogPostingType } from './blog-posting';
import type { DateTimeType } from '../types';
export type LiveBlogPostingType = {
    coverageStartTime?: DateTimeType,
    liveBlogUpdate?: BlogPostingType,
    coverageEndTime?: DateTimeType,
    } & BlogPostingType;

export class LiveBlogPosting extends BlogPosting {
    coverageStartTime: DateTimeType;
    liveBlogUpdate: BlogPostingType;
    coverageEndTime: DateTimeType;

    constructor(props : LiveBlogPostingType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('LiveBlogPosting');
    }
}