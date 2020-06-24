//@flow
import objectAssign from 'object-assign';
import {CreativeWork} from './creative-work';
import type { CreativeWorkType } from './creative-work';
import type { TextType } from '../types';
import type { IntegerType } from '../types';
import type { URLType } from '../types';
export type ArticleType = {
    pagination?: TextType,
    wordCount?: IntegerType,
    pageEnd?: IntegerType | TextType,
    articleBody?: TextType,
    pageStart?: IntegerType | TextType,
    articleSection?: TextType,
    backstory?: CreativeWorkType | TextType,
    } & CreativeWorkType;

export class Article extends CreativeWork {
    pagination: TextType;
    wordCount: IntegerType;
    pageEnd: IntegerType | TextType;
    articleBody: TextType;
    pageStart: IntegerType | TextType;
    articleSection: TextType;
    backstory: CreativeWorkType | TextType;

    constructor(props : ArticleType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('Article');
    }
}