//@flow
import objectAssign from 'object-assign';
import {CreativeWork} from './creative-work';
import type { CreativeWorkType } from './creative-work';
import type { IntegerType } from '../types';
import type { TextType } from '../types';
export type ArticleType = {
    wordCount?: IntegerType,
    articleBody?: TextType,
    articleSection?: TextType,
    } & CreativeWorkType;

export class Article extends CreativeWork {
    wordCount: IntegerType;
    articleBody: TextType;
    articleSection: TextType;

    constructor(props : ArticleType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('Article');
    }
}