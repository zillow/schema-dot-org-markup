//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { OfferType } from '../types';
import type { ImageObjectType } from '../types';
import type { URLType } from '../types';
import type { TextType } from '../types';
import type { DateType } from '../types';
import type { AudienceType } from '../types';
import type { PhysicalActivityCategoryType } from '../types';
import type { QuantitativeValueType } from '../types';
import type { DistanceType } from '../types';
import type { AggregateRatingType } from '../types';
import type { ReviewType } from '../types';
import type { PropertyValueType } from '../types';
import type { OrganizationType } from '../types';
import type { BrandType } from '../types';
import type { OfferItemConditionType } from '../types';
import type { ProductModelType } from '../types';
import type { ServiceType } from '../types';
export type ProductType = {
    offers?: OfferType,
    logo?: ImageObjectType | URLType,
    awards?: TextType,
    releaseDate?: DateType,
    audience?: AudienceType,
    category?: ThingType | TextType | PhysicalActivityCategoryType,
    material?: ProductType | TextType | URLType,
    productID?: TextType,
    weight?: QuantitativeValueType,
    height?: QuantitativeValueType | DistanceType,
    productionDate?: DateType,
    width?: QuantitativeValueType | DistanceType,
    mpn?: TextType,
    award?: TextType,
    isConsumableFor?: ProductType,
    isAccessoryOrSparePartFor?: ProductType,
    aggregateRating?: AggregateRatingType,
    reviews?: ReviewType,
    additionalProperty?: PropertyValueType,
    sku?: TextType,
    purchaseDate?: DateType,
    brand?: OrganizationType | BrandType,
    itemCondition?: OfferItemConditionType,
    gtin13?: TextType,
    gtin14?: TextType,
    depth?: DistanceType | QuantitativeValueType,
    review?: ReviewType,
    model?: ProductModelType | TextType,
    gtin8?: TextType,
    isRelatedTo?: ProductType | ServiceType,
    gtin12?: TextType,
    manufacturer?: OrganizationType,
    color?: TextType,
    isSimilarTo?: ProductType | ServiceType,
    } & ThingType;

export class Product extends Thing {
    offers: OfferType;
    logo: ImageObjectType | URLType;
    awards: TextType;
    releaseDate: DateType;
    audience: AudienceType;
    category: ThingType | TextType | PhysicalActivityCategoryType;
    material: ProductType | TextType | URLType;
    productID: TextType;
    weight: QuantitativeValueType;
    height: QuantitativeValueType | DistanceType;
    productionDate: DateType;
    width: QuantitativeValueType | DistanceType;
    mpn: TextType;
    award: TextType;
    isConsumableFor: ProductType;
    isAccessoryOrSparePartFor: ProductType;
    aggregateRating: AggregateRatingType;
    reviews: ReviewType;
    additionalProperty: PropertyValueType;
    sku: TextType;
    purchaseDate: DateType;
    brand: OrganizationType | BrandType;
    itemCondition: OfferItemConditionType;
    gtin13: TextType;
    gtin14: TextType;
    depth: DistanceType | QuantitativeValueType;
    review: ReviewType;
    model: ProductModelType | TextType;
    gtin8: TextType;
    isRelatedTo: ProductType | ServiceType;
    gtin12: TextType;
    manufacturer: OrganizationType;
    color: TextType;
    isSimilarTo: ProductType | ServiceType;

    constructor(props : ProductType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('Product');
    }
}