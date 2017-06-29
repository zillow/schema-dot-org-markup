//@flow
import objectAssign from 'object-assign';
import {CreativeWork} from './creative-work';
import type { CreativeWorkType } from './creative-work';
import type { NewsArticleType } from '../types';
import type { URLType } from '../types';
import type { TextType } from '../types';
import type { DateType } from '../types';
import type { BooleanType } from '../types';
import type { PlaceType } from '../types';
export type MediaObjectType = {
    associatedArticle?: NewsArticleType,
    contentUrl?: URLType,
    encodesCreativeWork?: CreativeWorkType,
    encodingFormat?: TextType,
    bitrate?: TextType,
    uploadDate?: DateType,
    embedUrl?: URLType,
    playerType?: TextType,
    contentSize?: TextType,
    expires?: DateType,
    requiresSubscription?: BooleanType,
    regionsAllowed?: PlaceType,
    } & CreativeWorkType;

export class MediaObject extends CreativeWork {
    associatedArticle: NewsArticleType;
    contentUrl: URLType;
    encodesCreativeWork: CreativeWorkType;
    encodingFormat: TextType;
    bitrate: TextType;
    uploadDate: DateType;
    embedUrl: URLType;
    playerType: TextType;
    contentSize: TextType;
    expires: DateType;
    requiresSubscription: BooleanType;
    regionsAllowed: PlaceType;

    constructor(props : MediaObjectType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('MediaObject');
    }
}