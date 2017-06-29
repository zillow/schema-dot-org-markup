//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { LanguageType } from '../types';
import type { TextType } from '../types';
import type { NumberType } from '../types';
import type { OfferType } from '../types';
import type { EventType } from '../types';
import type { URLType } from '../types';
import type { ProductType } from '../types';
import type { AudioObjectType } from '../types';
import type { OrganizationType } from '../types';
import type { PersonType } from '../types';
import type { InteractionCounterType } from '../types';
import type { AlignmentObjectType } from '../types';
import type { DateType } from '../types';
import type { DateTimeType } from '../types';
import type { PublicationEventType } from '../types';
import type { AggregateRatingType } from '../types';
import type { PlaceType } from '../types';
import type { MediaObjectType } from '../types';
import type { DurationType } from '../types';
import type { IntegerType } from '../types';
import type { BooleanType } from '../types';
import type { AudienceType } from '../types';
import type { ReviewType } from '../types';
import type { CommentType } from '../types';
import type { VideoObjectType } from '../types';
export type CreativeWorkType = {
    inLanguage?: LanguageType | TextType,
    copyrightYear?: NumberType,
    offers?: OfferType,
    recordedAt?: EventType,
    material?: URLType | TextType | ProductType,
    accessibilityAPI?: TextType,
    audio?: AudioObjectType,
    translator?: OrganizationType | PersonType,
    interactionStatistic?: InteractionCounterType,
    publishingPrinciples?: URLType,
    contentRating?: TextType,
    educationalAlignment?: AlignmentObjectType,
    learningResourceType?: TextType,
    dateModified?: DateType | DateTimeType,
    releasedEvent?: PublicationEventType,
    aggregateRating?: AggregateRatingType,
    discussionUrl?: URLType,
    citation?: TextType | CreativeWorkType,
    spatialCoverage?: PlaceType,
    character?: PersonType,
    datePublished?: DateType,
    sponsor?: OrganizationType | PersonType,
    encoding?: MediaObjectType,
    timeRequired?: DurationType,
    about?: ThingType,
    sourceOrganization?: OrganizationType,
    workTranslation?: CreativeWorkType,
    commentCount?: IntegerType,
    isBasedOnUrl?: URLType | CreativeWorkType | ProductType,
    temporalCoverage?: TextType | DateTimeType | URLType,
    isFamilyFriendly?: BooleanType,
    license?: URLType | CreativeWorkType,
    associatedMedia?: MediaObjectType,
    mentions?: ThingType,
    award?: TextType,
    locationCreated?: PlaceType,
    copyrightHolder?: OrganizationType | PersonType,
    editor?: PersonType,
    hasPart?: CreativeWorkType,
    creator?: PersonType | OrganizationType,
    headline?: TextType,
    accessibilitySummary?: TextType,
    dateCreated?: DateType | DateTimeType,
    translationOfWork?: CreativeWorkType,
    mainEntity?: ThingType,
    accessibilityFeature?: TextType,
    position?: TextType | IntegerType,
    exampleOfWork?: CreativeWorkType,
    audience?: AudienceType,
    keywords?: TextType,
    typicalAgeRange?: TextType,
    contentLocation?: PlaceType,
    producer?: OrganizationType | PersonType,
    reviews?: ReviewType,
    educationalUse?: TextType,
    accessMode?: TextType,
    contentReferenceTime?: DateTimeType,
    publisherImprint?: OrganizationType,
    contributor?: OrganizationType | PersonType,
    version?: TextType | NumberType,
    provider?: OrganizationType | PersonType,
    publication?: PublicationEventType,
    isPartOf?: CreativeWorkType,
    funder?: PersonType | OrganizationType,
    accessibilityControl?: TextType,
    accountablePerson?: PersonType,
    genre?: URLType | TextType,
    thumbnailUrl?: URLType,
    isAccessibleForFree?: BooleanType,
    awards?: TextType,
    comment?: CommentType,
    publisher?: OrganizationType | PersonType,
    fileFormat?: TextType | URLType,
    isBasedOn?: ProductType | URLType | CreativeWorkType,
    accessibilityHazard?: TextType,
    workExample?: CreativeWorkType,
    author?: PersonType | OrganizationType,
    review?: ReviewType,
    schemaVersion?: URLType | TextType,
    video?: VideoObjectType,
    accessModeSufficient?: TextType,
    encodings?: MediaObjectType,
    interactivityType?: TextType,
    alternativeHeadline?: TextType,
    text?: TextType,
    } & ThingType;

export class CreativeWork extends Thing {
    inLanguage: LanguageType | TextType;
    copyrightYear: NumberType;
    offers: OfferType;
    recordedAt: EventType;
    material: URLType | TextType | ProductType;
    accessibilityAPI: TextType;
    audio: AudioObjectType;
    translator: OrganizationType | PersonType;
    interactionStatistic: InteractionCounterType;
    publishingPrinciples: URLType;
    contentRating: TextType;
    educationalAlignment: AlignmentObjectType;
    learningResourceType: TextType;
    dateModified: DateType | DateTimeType;
    releasedEvent: PublicationEventType;
    aggregateRating: AggregateRatingType;
    discussionUrl: URLType;
    citation: TextType | CreativeWorkType;
    spatialCoverage: PlaceType;
    character: PersonType;
    datePublished: DateType;
    sponsor: OrganizationType | PersonType;
    encoding: MediaObjectType;
    timeRequired: DurationType;
    about: ThingType;
    sourceOrganization: OrganizationType;
    workTranslation: CreativeWorkType;
    commentCount: IntegerType;
    isBasedOnUrl: URLType | CreativeWorkType | ProductType;
    temporalCoverage: TextType | DateTimeType | URLType;
    isFamilyFriendly: BooleanType;
    license: URLType | CreativeWorkType;
    associatedMedia: MediaObjectType;
    mentions: ThingType;
    award: TextType;
    locationCreated: PlaceType;
    copyrightHolder: OrganizationType | PersonType;
    editor: PersonType;
    hasPart: CreativeWorkType;
    creator: PersonType | OrganizationType;
    headline: TextType;
    accessibilitySummary: TextType;
    dateCreated: DateType | DateTimeType;
    translationOfWork: CreativeWorkType;
    mainEntity: ThingType;
    accessibilityFeature: TextType;
    position: TextType | IntegerType;
    exampleOfWork: CreativeWorkType;
    audience: AudienceType;
    keywords: TextType;
    typicalAgeRange: TextType;
    contentLocation: PlaceType;
    producer: OrganizationType | PersonType;
    reviews: ReviewType;
    educationalUse: TextType;
    accessMode: TextType;
    contentReferenceTime: DateTimeType;
    publisherImprint: OrganizationType;
    contributor: OrganizationType | PersonType;
    version: TextType | NumberType;
    provider: OrganizationType | PersonType;
    publication: PublicationEventType;
    isPartOf: CreativeWorkType;
    funder: PersonType | OrganizationType;
    accessibilityControl: TextType;
    accountablePerson: PersonType;
    genre: URLType | TextType;
    thumbnailUrl: URLType;
    isAccessibleForFree: BooleanType;
    awards: TextType;
    comment: CommentType;
    publisher: OrganizationType | PersonType;
    fileFormat: TextType | URLType;
    isBasedOn: ProductType | URLType | CreativeWorkType;
    accessibilityHazard: TextType;
    workExample: CreativeWorkType;
    author: PersonType | OrganizationType;
    review: ReviewType;
    schemaVersion: URLType | TextType;
    video: VideoObjectType;
    accessModeSufficient: TextType;
    encodings: MediaObjectType;
    interactivityType: TextType;
    alternativeHeadline: TextType;
    text: TextType;

    constructor(props : CreativeWorkType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('CreativeWork');
    }
}