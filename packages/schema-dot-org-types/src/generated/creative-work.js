//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { NumberType } from '../types';
import type { URLType } from '../types';
import type { EventType } from '../types';
import type { TextType } from '../types';
import type { AudioObjectType } from '../types';
import type { InteractionCounterType } from '../types';
import type { AlignmentObjectType } from '../types';
import type { PublicationEventType } from '../types';
import type { PlaceType } from '../types';
import type { PersonType } from '../types';
import type { DateType } from '../types';
import type { MediaObjectType } from '../types';
import type { DurationType } from '../types';
import type { OrganizationType } from '../types';
import type { IntegerType } from '../types';
import type { ProductType } from '../types';
import type { DateTimeType } from '../types';
import type { BooleanType } from '../types';
import type { VideoObjectType } from '../types';
export type CreativeWorkType = {
    copyrightYear?: NumberType,
    publishingPrinciples?: URLType,
    recordedAt?: EventType,
    accessibilityAPI?: TextType,
    audio?: AudioObjectType,
    interactionStatistic?: InteractionCounterType,
    contentRating?: TextType,
    educationalAlignment?: AlignmentObjectType,
    learningResourceType?: TextType,
    releasedEvent?: PublicationEventType,
    discussionUrl?: URLType,
    citation?: TextType | CreativeWorkType,
    spatialCoverage?: PlaceType,
    character?: PersonType,
    datePublished?: DateType,
    encoding?: MediaObjectType,
    timeRequired?: DurationType,
    sourceOrganization?: OrganizationType,
    workTranslation?: CreativeWorkType,
    commentCount?: IntegerType,
    isBasedOnUrl?: URLType | CreativeWorkType | ProductType,
    temporalCoverage?: TextType | DateTimeType | URLType,
    isFamilyFriendly?: BooleanType,
    license?: CreativeWorkType | URLType,
    associatedMedia?: MediaObjectType,
    mentions?: ThingType,
    locationCreated?: PlaceType,
    copyrightHolder?: PersonType | OrganizationType,
    editor?: PersonType,
    hasPart?: CreativeWorkType,
    headline?: TextType,
    accessibilitySummary?: TextType,
    translationOfWork?: CreativeWorkType,
    mainEntity?: ThingType,
    accessibilityFeature?: TextType,
    exampleOfWork?: CreativeWorkType,
    keywords?: TextType,
    contentLocation?: PlaceType,
    producer?: PersonType | OrganizationType,
    educationalUse?: TextType,
    accessMode?: TextType,
    contentReferenceTime?: DateTimeType,
    publisherImprint?: OrganizationType,
    accessibilityHazard?: TextType,
    version?: TextType | NumberType,
    publication?: PublicationEventType,
    isPartOf?: CreativeWorkType,
    accessibilityControl?: TextType,
    accountablePerson?: PersonType,
    thumbnailUrl?: URLType,
    publisher?: OrganizationType | PersonType,
    fileFormat?: TextType | URLType,
    isBasedOn?: ProductType | URLType | CreativeWorkType,
    workExample?: CreativeWorkType,
    schemaVersion?: URLType | TextType,
    video?: VideoObjectType,
    accessModeSufficient?: TextType,
    encodings?: MediaObjectType,
    interactivityType?: TextType,
    alternativeHeadline?: TextType,
    text?: TextType,
    } & ThingType;

export class CreativeWork extends Thing {
    copyrightYear: NumberType;
    publishingPrinciples: URLType;
    recordedAt: EventType;
    accessibilityAPI: TextType;
    audio: AudioObjectType;
    interactionStatistic: InteractionCounterType;
    contentRating: TextType;
    educationalAlignment: AlignmentObjectType;
    learningResourceType: TextType;
    releasedEvent: PublicationEventType;
    discussionUrl: URLType;
    citation: TextType | CreativeWorkType;
    spatialCoverage: PlaceType;
    character: PersonType;
    datePublished: DateType;
    encoding: MediaObjectType;
    timeRequired: DurationType;
    sourceOrganization: OrganizationType;
    workTranslation: CreativeWorkType;
    commentCount: IntegerType;
    isBasedOnUrl: URLType | CreativeWorkType | ProductType;
    temporalCoverage: TextType | DateTimeType | URLType;
    isFamilyFriendly: BooleanType;
    license: CreativeWorkType | URLType;
    associatedMedia: MediaObjectType;
    mentions: ThingType;
    locationCreated: PlaceType;
    copyrightHolder: PersonType | OrganizationType;
    editor: PersonType;
    hasPart: CreativeWorkType;
    headline: TextType;
    accessibilitySummary: TextType;
    translationOfWork: CreativeWorkType;
    mainEntity: ThingType;
    accessibilityFeature: TextType;
    exampleOfWork: CreativeWorkType;
    keywords: TextType;
    contentLocation: PlaceType;
    producer: PersonType | OrganizationType;
    educationalUse: TextType;
    accessMode: TextType;
    contentReferenceTime: DateTimeType;
    publisherImprint: OrganizationType;
    accessibilityHazard: TextType;
    version: TextType | NumberType;
    publication: PublicationEventType;
    isPartOf: CreativeWorkType;
    accessibilityControl: TextType;
    accountablePerson: PersonType;
    thumbnailUrl: URLType;
    publisher: OrganizationType | PersonType;
    fileFormat: TextType | URLType;
    isBasedOn: ProductType | URLType | CreativeWorkType;
    workExample: CreativeWorkType;
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