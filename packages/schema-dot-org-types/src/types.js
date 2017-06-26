//@flow

export type {ThingType} from './generated/thing';
export type {CreativeWorkType} from './generated/creative-work';
export type {VideoObjectType} from './generated/video-object';
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

import type moment from 'moment';

export type DurationType = moment$MomentDuration;
export type DateType = moment$Moment;
export type DateTimeType = moment$Moment;

import {URL} from 'url';
export type URLType = URL;

export type TextType = string;
export type ActionType = string;
export type ImageObjectType = string;
export type PropertyValueType = string;
export type NumberType = number;
export type IntegerType = number;
export type BooleanType = boolean;
export type EventStatusTypeType = string;
export type GenderTypeType = string;
export type ContactPointOptionType = string;
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

export type MonetaryAmountType = Object;
