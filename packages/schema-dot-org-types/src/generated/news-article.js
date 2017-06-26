//@flow
import objectAssign from 'object-assign';
import {Article} from './article';
import type { ArticleType } from './article';
import type { TextType } from '../types';
export type NewsArticleType = {
    printSection?: TextType,
    dateline?: TextType,
    printEdition?: TextType,
    printColumn?: TextType,
    printPage?: TextType,
    } & ArticleType;

export class NewsArticle extends Article {
    printSection: TextType;
    dateline: TextType;
    printEdition: TextType;
    printColumn: TextType;
    printPage: TextType;

    constructor(props : NewsArticleType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('NewsArticle');
    }
}