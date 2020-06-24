//@flow
import objectAssign from 'object-assign';
import {CreativeWork} from './creative-work';
import type { CreativeWorkType } from './creative-work';
import type { DurationType } from '../types';
import type { NewsArticleType } from '../types';
import type { OrganizationType } from '../types';
import type { URLType } from '../types';
import type { TextType } from '../types';
import type { DateType } from '../types';
import type { QuantitativeValueType } from '../types';
import type { DistanceType } from '../types';
import type { BooleanType } from '../types';
import type { PlaceType } from '../types';
export type MediaObjectType = {
    duration?: DurationType,
    associatedArticle?: NewsArticleType,
    productionCompany?: OrganizationType,
    contentUrl?: URLType,
    encodesCreativeWork?: CreativeWorkType,
    bitrate?: TextType,
    uploadDate?: DateType,
    embedUrl?: URLType,
    playerType?: TextType,
    contentSize?: TextType,
    height?: QuantitativeValueType | DistanceType,
    width?: DistanceType | QuantitativeValueType,
    requiresSubscription?: BooleanType,
    regionsAllowed?: PlaceType,
    } & CreativeWorkType;

export class MediaObject extends CreativeWork {
    duration: DurationType;
    associatedArticle: NewsArticleType;
    productionCompany: OrganizationType;
    contentUrl: URLType;
    encodesCreativeWork: CreativeWorkType;
    bitrate: TextType;
    uploadDate: DateType;
    embedUrl: URLType;
    playerType: TextType;
    contentSize: TextType;
    height: QuantitativeValueType | DistanceType;
    width: DistanceType | QuantitativeValueType;
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