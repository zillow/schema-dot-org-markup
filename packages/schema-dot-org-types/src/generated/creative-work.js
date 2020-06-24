//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { LanguageType } from '../types';
import type { TextType } from '../types';
import type { NumberType } from '../types';
import type { URLType } from '../types';
import type { OfferType } from '../types';
import type { EventType } from '../types';
import type { ProductType } from '../types';
import type { OrganizationType } from '../types';
import type { PersonType } from '../types';
import type { AudioObjectType } from '../types';
import type { InteractionCounterType } from '../types';
import type { RatingType } from '../types';
import type { AlignmentObjectType } from '../types';
import type { DateTimeType } from '../types';
import type { DateType } from '../types';
import type { PublicationEventType } from '../types';
import type { AggregateRatingType } from '../types';
import type { PlaceType } from '../types';
import type { MediaObjectType } from '../types';
import type { DurationType } from '../types';
import type { IntegerType } from '../types';
import type { BooleanType } from '../types';
import type { TripType } from '../types';
import type { CorrectionCommentType } from '../types';
import type { AudienceType } from '../types';
import type { ReviewType } from '../types';
import type { CommentType } from '../types';
import type { VideoObjectType } from '../types';
export type CreativeWorkType = {
    inLanguage?: LanguageType | TextType,
    copyrightYear?: NumberType,
    publishingPrinciples?: URLType | CreativeWorkType,
    offers?: OfferType,
    recordedAt?: EventType,
    material?: ProductType | URLType | TextType,
    sdPublisher?: OrganizationType | PersonType,
    accessibilityAPI?: TextType,
    audio?: AudioObjectType,
    translator?: OrganizationType | PersonType,
    interactionStatistic?: InteractionCounterType,
    contentRating?: TextType | RatingType,
    educationalAlignment?: AlignmentObjectType,
    learningResourceType?: TextType,
    dateModified?: DateTimeType | DateType,
    sdLicense?: CreativeWorkType | URLType,
    releasedEvent?: PublicationEventType,
    aggregateRating?: AggregateRatingType,
    discussionUrl?: URLType,
    citation?: CreativeWorkType | TextType,
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
    isBasedOnUrl?: URLType | ProductType | CreativeWorkType,
    temporalCoverage?: DateTimeType | URLType | TextType,
    isFamilyFriendly?: BooleanType,
    license?: CreativeWorkType | URLType,
    associatedMedia?: MediaObjectType,
    mentions?: ThingType,
    award?: TextType,
    locationCreated?: PlaceType,
    encodingFormat?: TextType | URLType,
    copyrightHolder?: OrganizationType | PersonType,
    editor?: PersonType,
    hasPart?: CreativeWorkType | TripType,
    creator?: PersonType | OrganizationType,
    headline?: TextType,
    sdDatePublished?: DateType,
    accessibilitySummary?: TextType,
    dateCreated?: DateType | DateTimeType,
    correction?: CorrectionCommentType | URLType | TextType,
    translationOfWork?: CreativeWorkType,
    mainEntity?: ThingType,
    accessibilityFeature?: TextType,
    position?: IntegerType | TextType,
    exampleOfWork?: CreativeWorkType,
    audience?: AudienceType,
    keywords?: TextType,
    typicalAgeRange?: TextType,
    contentLocation?: PlaceType,
    producer?: PersonType | OrganizationType,
    reviews?: ReviewType,
    awards?: TextType,
    accessMode?: TextType,
    contentReferenceTime?: DateTimeType,
    publisherImprint?: OrganizationType,
    accessibilityHazard?: TextType,
    contributor?: PersonType | OrganizationType,
    version?: NumberType | TextType,
    provider?: OrganizationType | PersonType,
    publication?: PublicationEventType,
    isPartOf?: CreativeWorkType | TripType,
    funder?: PersonType | OrganizationType,
    accessibilityControl?: TextType,
    accountablePerson?: PersonType,
    genre?: TextType | URLType,
    thumbnailUrl?: URLType,
    isAccessibleForFree?: BooleanType,
    educationalUse?: TextType,
    comment?: CommentType,
    publisher?: PersonType | OrganizationType,
    encodings?: MediaObjectType,
    fileFormat?: URLType | TextType,
    isBasedOn?: ProductType | URLType | CreativeWorkType,
    workExample?: CreativeWorkType,
    author?: OrganizationType | PersonType,
    review?: ReviewType,
    schemaVersion?: URLType | TextType,
    video?: VideoObjectType,
    accessModeSufficient?: TextType,
    expires?: DateType,
    interactivityType?: TextType,
    alternativeHeadline?: TextType,
    text?: TextType,
    } & ThingType;

export class CreativeWork extends Thing {
    inLanguage: LanguageType | TextType;
    copyrightYear: NumberType;
    publishingPrinciples: URLType | CreativeWorkType;
    offers: OfferType;
    recordedAt: EventType;
    material: ProductType | URLType | TextType;
    sdPublisher: OrganizationType | PersonType;
    accessibilityAPI: TextType;
    audio: AudioObjectType;
    translator: OrganizationType | PersonType;
    interactionStatistic: InteractionCounterType;
    contentRating: TextType | RatingType;
    educationalAlignment: AlignmentObjectType;
    learningResourceType: TextType;
    dateModified: DateTimeType | DateType;
    sdLicense: CreativeWorkType | URLType;
    releasedEvent: PublicationEventType;
    aggregateRating: AggregateRatingType;
    discussionUrl: URLType;
    citation: CreativeWorkType | TextType;
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
    isBasedOnUrl: URLType | ProductType | CreativeWorkType;
    temporalCoverage: DateTimeType | URLType | TextType;
    isFamilyFriendly: BooleanType;
    license: CreativeWorkType | URLType;
    associatedMedia: MediaObjectType;
    mentions: ThingType;
    award: TextType;
    locationCreated: PlaceType;
    encodingFormat: TextType | URLType;
    copyrightHolder: OrganizationType | PersonType;
    editor: PersonType;
    hasPart: CreativeWorkType | TripType;
    creator: PersonType | OrganizationType;
    headline: TextType;
    sdDatePublished: DateType;
    accessibilitySummary: TextType;
    dateCreated: DateType | DateTimeType;
    correction: CorrectionCommentType | URLType | TextType;
    translationOfWork: CreativeWorkType;
    mainEntity: ThingType;
    accessibilityFeature: TextType;
    position: IntegerType | TextType;
    exampleOfWork: CreativeWorkType;
    audience: AudienceType;
    keywords: TextType;
    typicalAgeRange: TextType;
    contentLocation: PlaceType;
    producer: PersonType | OrganizationType;
    reviews: ReviewType;
    awards: TextType;
    accessMode: TextType;
    contentReferenceTime: DateTimeType;
    publisherImprint: OrganizationType;
    accessibilityHazard: TextType;
    contributor: PersonType | OrganizationType;
    version: NumberType | TextType;
    provider: OrganizationType | PersonType;
    publication: PublicationEventType;
    isPartOf: CreativeWorkType | TripType;
    funder: PersonType | OrganizationType;
    accessibilityControl: TextType;
    accountablePerson: PersonType;
    genre: TextType | URLType;
    thumbnailUrl: URLType;
    isAccessibleForFree: BooleanType;
    educationalUse: TextType;
    comment: CommentType;
    publisher: PersonType | OrganizationType;
    encodings: MediaObjectType;
    fileFormat: URLType | TextType;
    isBasedOn: ProductType | URLType | CreativeWorkType;
    workExample: CreativeWorkType;
    author: OrganizationType | PersonType;
    review: ReviewType;
    schemaVersion: URLType | TextType;
    video: VideoObjectType;
    accessModeSufficient: TextType;
    expires: DateType;
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