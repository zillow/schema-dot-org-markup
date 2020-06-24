//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { DeliveryMethodType } from '../types';
import type { ServiceType } from '../types';
import type { ProductType } from '../types';
import type { QuantitativeValueType } from '../types';
import type { TextType } from '../types';
import type { ItemAvailabilityType } from '../types';
import type { LoanOrCreditType } from '../types';
import type { PaymentMethodType } from '../types';
import type { PersonType } from '../types';
import type { OrganizationType } from '../types';
import type { PlaceType } from '../types';
import type { GeoShapeType } from '../types';
import type { PriceSpecificationType } from '../types';
import type { BusinessEntityTypeType } from '../types';
import type { DateTimeType } from '../types';
import type { AdministrativeAreaType } from '../types';
import type { BusinessFunctionType } from '../types';
import type { OfferItemConditionType } from '../types';
import type { WarrantyPromiseType } from '../types';
import type { TypeAndQuantityNodeType } from '../types';
export type DemandType = {
    availableDeliveryMethod?: DeliveryMethodType,
    itemOffered?: ServiceType | ProductType,
    eligibleQuantity?: QuantitativeValueType,
    serialNumber?: TextType,
    availability?: ItemAvailabilityType,
    eligibleDuration?: QuantitativeValueType,
    acceptedPaymentMethod?: LoanOrCreditType | PaymentMethodType,
    seller?: PersonType | OrganizationType,
    availableAtOrFrom?: PlaceType,
    mpn?: TextType,
    eligibleRegion?: PlaceType | GeoShapeType | TextType,
    priceSpecification?: PriceSpecificationType,
    deliveryLeadTime?: QuantitativeValueType,
    eligibleCustomerType?: BusinessEntityTypeType,
    sku?: TextType,
    eligibleTransactionVolume?: PriceSpecificationType,
    availabilityStarts?: DateTimeType,
    areaServed?: AdministrativeAreaType | GeoShapeType | TextType | PlaceType,
    ineligibleRegion?: GeoShapeType | PlaceType | TextType,
    advanceBookingRequirement?: QuantitativeValueType,
    gtin12?: TextType,
    gtin13?: TextType,
    gtin14?: TextType,
    validFrom?: DateTimeType,
    businessFunction?: BusinessFunctionType,
    availabilityEnds?: DateTimeType,
    itemCondition?: OfferItemConditionType,
    warranty?: WarrantyPromiseType,
    includesObject?: TypeAndQuantityNodeType,
    validThrough?: DateTimeType,
    gtin8?: TextType,
    inventoryLevel?: QuantitativeValueType,
    } & ThingType;

export class Demand extends Thing {
    availableDeliveryMethod: DeliveryMethodType;
    itemOffered: ServiceType | ProductType;
    eligibleQuantity: QuantitativeValueType;
    serialNumber: TextType;
    availability: ItemAvailabilityType;
    eligibleDuration: QuantitativeValueType;
    acceptedPaymentMethod: LoanOrCreditType | PaymentMethodType;
    seller: PersonType | OrganizationType;
    availableAtOrFrom: PlaceType;
    mpn: TextType;
    eligibleRegion: PlaceType | GeoShapeType | TextType;
    priceSpecification: PriceSpecificationType;
    deliveryLeadTime: QuantitativeValueType;
    eligibleCustomerType: BusinessEntityTypeType;
    sku: TextType;
    eligibleTransactionVolume: PriceSpecificationType;
    availabilityStarts: DateTimeType;
    areaServed: AdministrativeAreaType | GeoShapeType | TextType | PlaceType;
    ineligibleRegion: GeoShapeType | PlaceType | TextType;
    advanceBookingRequirement: QuantitativeValueType;
    gtin12: TextType;
    gtin13: TextType;
    gtin14: TextType;
    validFrom: DateTimeType;
    businessFunction: BusinessFunctionType;
    availabilityEnds: DateTimeType;
    itemCondition: OfferItemConditionType;
    warranty: WarrantyPromiseType;
    includesObject: TypeAndQuantityNodeType;
    validThrough: DateTimeType;
    gtin8: TextType;
    inventoryLevel: QuantitativeValueType;

    constructor(props : DemandType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('Demand');
    }
}