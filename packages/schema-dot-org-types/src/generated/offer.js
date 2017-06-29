//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { DateType } from '../types';
import type { DeliveryMethodType } from '../types';
import type { ProductType } from '../types';
import type { ServiceType } from '../types';
import type { QuantitativeValueType } from '../types';
import type { TextType } from '../types';
import type { ItemAvailabilityType } from '../types';
import type { NumberType } from '../types';
import type { OrganizationType } from '../types';
import type { PersonType } from '../types';
import type { LoanOrCreditType } from '../types';
import type { PaymentMethodType } from '../types';
import type { PlaceType } from '../types';
import type { DateTimeType } from '../types';
import type { GeoShapeType } from '../types';
import type { PriceSpecificationType } from '../types';
import type { BusinessFunctionType } from '../types';
import type { AggregateRatingType } from '../types';
import type { ReviewType } from '../types';
import type { AdministrativeAreaType } from '../types';
import type { OfferItemConditionType } from '../types';
import type { WarrantyPromiseType } from '../types';
import type { PhysicalActivityCategoryType } from '../types';
import type { TypeAndQuantityNodeType } from '../types';
import type { BusinessEntityTypeType } from '../types';
export type OfferType = {
    priceValidUntil?: DateType,
    availableDeliveryMethod?: DeliveryMethodType,
    itemOffered?: ProductType | ServiceType,
    eligibleQuantity?: QuantitativeValueType,
    serialNumber?: TextType,
    availability?: ItemAvailabilityType,
    eligibleDuration?: QuantitativeValueType,
    price?: NumberType | TextType,
    offeredBy?: OrganizationType | PersonType,
    acceptedPaymentMethod?: LoanOrCreditType | PaymentMethodType,
    seller?: OrganizationType | PersonType,
    availableAtOrFrom?: PlaceType,
    validFrom?: DateTimeType,
    mpn?: TextType,
    eligibleRegion?: TextType | PlaceType | GeoShapeType,
    priceSpecification?: PriceSpecificationType,
    deliveryLeadTime?: QuantitativeValueType,
    businessFunction?: BusinessFunctionType,
    aggregateRating?: AggregateRatingType,
    reviews?: ReviewType,
    sku?: TextType,
    eligibleTransactionVolume?: PriceSpecificationType,
    availabilityStarts?: DateTimeType,
    areaServed?: GeoShapeType | TextType | AdministrativeAreaType | PlaceType,
    ineligibleRegion?: PlaceType | GeoShapeType | TextType,
    advanceBookingRequirement?: QuantitativeValueType,
    gtin12?: TextType,
    gtin13?: TextType,
    gtin14?: TextType,
    priceCurrency?: TextType,
    review?: ReviewType,
    availabilityEnds?: DateTimeType,
    itemCondition?: OfferItemConditionType,
    warranty?: WarrantyPromiseType,
    category?: ThingType | TextType | PhysicalActivityCategoryType,
    includesObject?: TypeAndQuantityNodeType,
    validThrough?: DateTimeType,
    addOn?: OfferType,
    eligibleCustomerType?: BusinessEntityTypeType,
    gtin8?: TextType,
    inventoryLevel?: QuantitativeValueType,
    } & ThingType;

export class Offer extends Thing {
    priceValidUntil: DateType;
    availableDeliveryMethod: DeliveryMethodType;
    itemOffered: ProductType | ServiceType;
    eligibleQuantity: QuantitativeValueType;
    serialNumber: TextType;
    availability: ItemAvailabilityType;
    eligibleDuration: QuantitativeValueType;
    price: NumberType | TextType;
    offeredBy: OrganizationType | PersonType;
    acceptedPaymentMethod: LoanOrCreditType | PaymentMethodType;
    seller: OrganizationType | PersonType;
    availableAtOrFrom: PlaceType;
    validFrom: DateTimeType;
    mpn: TextType;
    eligibleRegion: TextType | PlaceType | GeoShapeType;
    priceSpecification: PriceSpecificationType;
    deliveryLeadTime: QuantitativeValueType;
    businessFunction: BusinessFunctionType;
    aggregateRating: AggregateRatingType;
    reviews: ReviewType;
    sku: TextType;
    eligibleTransactionVolume: PriceSpecificationType;
    availabilityStarts: DateTimeType;
    areaServed: GeoShapeType | TextType | AdministrativeAreaType | PlaceType;
    ineligibleRegion: PlaceType | GeoShapeType | TextType;
    advanceBookingRequirement: QuantitativeValueType;
    gtin12: TextType;
    gtin13: TextType;
    gtin14: TextType;
    priceCurrency: TextType;
    review: ReviewType;
    availabilityEnds: DateTimeType;
    itemCondition: OfferItemConditionType;
    warranty: WarrantyPromiseType;
    category: ThingType | TextType | PhysicalActivityCategoryType;
    includesObject: TypeAndQuantityNodeType;
    validThrough: DateTimeType;
    addOn: OfferType;
    eligibleCustomerType: BusinessEntityTypeType;
    gtin8: TextType;
    inventoryLevel: QuantitativeValueType;

    constructor(props : OfferType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('Offer');
    }
}