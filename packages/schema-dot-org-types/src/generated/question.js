//@flow
import objectAssign from 'object-assign';
import {CreativeWork} from './creative-work';
import type { CreativeWorkType } from './creative-work';
import type { IntegerType } from '../types';
import type { AnswerType } from '../types';
export type QuestionType = {
    downvoteCount?: IntegerType,
    suggestedAnswer?: AnswerType,
    acceptedAnswer?: AnswerType,
    answerCount?: IntegerType,
    upvoteCount?: IntegerType,
    } & CreativeWorkType;

export class Question extends CreativeWork {
    downvoteCount: IntegerType;
    suggestedAnswer: AnswerType;
    acceptedAnswer: AnswerType;
    answerCount: IntegerType;
    upvoteCount: IntegerType;

    constructor(props : QuestionType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('Question');
    }
}