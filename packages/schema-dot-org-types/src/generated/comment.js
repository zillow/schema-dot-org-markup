//@flow
import objectAssign from 'object-assign';
import {CreativeWork} from './creative-work';
import type { CreativeWorkType } from './creative-work';
import type { IntegerType } from '../types';
import type { QuestionType } from '../types';
export type CommentType = {
    downvoteCount?: IntegerType,
    parentItem?: QuestionType,
    upvoteCount?: IntegerType,
    } & CreativeWorkType;

export class Comment extends CreativeWork {
    downvoteCount: IntegerType;
    parentItem: QuestionType;
    upvoteCount: IntegerType;

    constructor(props : CommentType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('Comment');
    }
}