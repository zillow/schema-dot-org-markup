//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { DateType } from '../types';
import type { TextType } from '../types';
import type { ProductModelType } from '../types';
export type ProductType = {
    releaseDate?: DateType,
    productID?: TextType,
    isConsumableFor?: ProductType,
    isAccessoryOrSparePartFor?: ProductType,
    model?: ProductModelType | TextType,
    color?: TextType,
    } & ThingType;

export class Product extends Thing {
    releaseDate: DateType;
    productID: TextType;
    isConsumableFor: ProductType;
    isAccessoryOrSparePartFor: ProductType;
    model: ProductModelType | TextType;
    color: TextType;

    constructor(props : ProductType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('Product');
    }
}