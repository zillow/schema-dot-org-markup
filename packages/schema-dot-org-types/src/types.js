//@flow

export type {ThingType} from './generated/thing';
export type {CreativeWorkType} from './generated/creative-work';
export type {VideoObjectType} from './generated/video-object';
export type {ArticleType} from './generated/article';
export type {NewsArticleType} from './generated/news-article';
export type {InteractionCounterType} from './generated/interaction-counter';
export type {MediaObjectType} from './generated/media-object';
export type {ProductType} from './generated/product';
export type {ProductModelType} from './generated/product-model';
export type {PlaceType} from './generated/place';
export type {SoftwareApplicationType} from './generated/software-application';
export type {OrganizationType} from './generated/organization';
export type {PersonType} from './generated/person';
export type {PublicationEventType} from './generated/publication-event';
export type {AlignmentObjectType} from './generated/alignment-object';
export type {EventType} from './generated/event';
export type {ContactPointType} from './generated/contact-point';
export type {DataFeedType} from './generated/data-feed';
export type {BroadcastServiceType} from './generated/broadcast-service';
export type {GeoCoordinatesType} from './generated/geo-coordinates';
export type {GeoShapeType} from './generated/geo-shape';
export type {MapType} from './generated/map';
export type {BroadcastChannelType} from './generated/broadcast-channel';
export type {ServiceType} from './generated/service';
export type {ServiceChannelType} from './generated/service-channel';
export type {AudienceType} from './generated/audience';
export type {OpeningHoursSpecificationType} from './generated/opening-hours-specification';
export type {DataFeedItemType} from './generated/data-feed-item'
export type {DataCatalogType} from './generated/data-catalog';
export type {PriceSpecificationType} from './generated/price-specification';
export type {PostalAddressType} from './generated/postal-address';
export type {DatasetType} from './generated/dataset';
export type {QuantitativeValueType} from './generated/quantitative-value';
export type {LocationFeatureSpecificationType} from './generated/location-feature-specification';
export type {GeospatialGeometryType} from './generated/geospatial-geometry';
export type {ReviewType} from './generated/review';
export type {QualitativeValueType} from './generated/qualitative-value';
export type {OfferType} from './generated/offer';
export type {AggregateRatingType} from './generated/aggregate-rating';
export type {EnumerationType} from './generated/enumeration';
export type {MonetaryAmountType} from './generated/monetary-amount';
export type {RatingType} from './generated/rating';
export type {TypeAndQuantityNodeType} from './generated/type-and-quantity-node';
export type {ClassType} from './generated/class';
export type {PropertyType} from './generated/property';
export type {CommentType} from './generated/comment';
export type {QuestionType} from './generated/question';
export type {LoanOrCreditType} from './generated/loan-or-credit';
export type {WarrantyPromiseType} from './generated/warranty-promise';
export type {BroadcastFrequencySpecificationType} from './generated/broadcast-frequency-specification';
export type {RepaymentSpecificationType} from './generated/repayment-specification';
export type {BrandType} from './generated/brand';
export type {ListItemType} from './generated/list-item'
export type {SingleFamilyResidenceType} from './generated/single-family-residence';
export type {ItemListType} from './generated/item-list';
export type {BreadcrumbListType} from './shim/breadcrumb-list';
export type {TripType} from './generated/trip';
export type {SocialMediaPostingType} from './generated/social-media-posting';
export type {BlogPostingType} from './generated/blog-posting';
export type {LiveBlogPostingType} from './generated/live-blog-posting';
export type {DemandType} from './generated/demand';
export type {MonetaryAmountDistributionType} from './generated/monetary-amount-distribution';
export type {OccupationType} from './generated/occupation';
export type {OwnershipInfoType} from './generated/ownership-info';
export type {ProgramMembershipType} from './generated/program-membership';
export type {ImageObjectType} from './generated/image-object';

import type moment from 'moment';

export type DurationType = moment$MomentDuration;
export type DateType = moment$Moment;
export type DateTimeType = moment$Moment;

import {URL} from 'url';
export type URLType = URL;

export type TextType = string;
export type ActionType = string;
export type PropertyValueType = string;
export type NumberType = number;
export type IntegerType = number;
export type BooleanType = boolean;
export type EventStatusTypeType = string;
export type GenderTypeType = string;
export type ContactPointOptionType = string;
export type LanguageType = string;
export type TimeType = string; // ISO-8601 time-of-day
export type DayOfWeekType =
    'Sunday'
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday';
export type MapCategoryTypeType =
    'ParkingMap'
    | 'SeatingMap'
    | 'TransitMap'
    | 'VenueMap';

//FIXME there should be classes generated for at least some of these.
import type {CreativeWorkType} from './generated/creative-work';
export type WebSiteType = CreativeWorkType;
export type AudioObjectType = CreativeWorkType;
export type PhotographType = CreativeWorkType;

import type {PlaceType} from './generated/place';
export type CountryType = PlaceType;
export type AdministrativeAreaType = PlaceType;

import type {ServiceType} from "./generated/service";
export type CableOrSatelliteServiceType = ServiceType;

import type {MediaObjectType} from './generated/media-object';
export type DataDownloadType = MediaObjectType;

import type {OrganizationType} from './generated/organization';
export type EducationalOrganizationType = OrganizationType;
export type MusicGroupType = OrganizationType;

import type {ThingType} from './generated/thing';
export type StructuredValueType = ThingType;

import type {EnumerationType} from './generated/enumeration';
export type PhysicalActivityCategoryType = EnumerationType;
export type BusinessEntityTypeType = EnumerationType;
export type BusinessFunctionType = EnumerationType;
export type DeliveryMethodType = EnumerationType;
export type ItemAvailabilityType = EnumerationType;
export type PaymentMethodType = EnumerationType;
export type OfferItemConditionType = EnumerationType;
export type ItemListOrderTypeType = EnumerationType;
export type WarrantyScopeType = WarrantyScopeType;

import type {CommentType} from './generated/comment';
export type AnswerType = CommentType;
export type CorrectionCommentType = CommentType;

import type {ItemListType} from './generated/item-list';
export type OfferCatalogType = ItemListType;

import type {SocialMediaPostingType} from './generated/social-media-posting';
export type DiscussionForumPosting = SocialMediaPostingType;

import type {QuantitativeValueType} from "./generated/quantitative-value";
export type DistanceType = QuantitativeValueType;