//@flow
import objectAssign from 'object-assign';
import {Product} from './product';
import type { ProductType } from './product';
export type ProductModelType = {
    successorOf?: ProductModelType,
    predecessorOf?: ProductModelType,
    isVariantOf?: ProductModelType,
    } & ProductType;

export class ProductModel extends Product {
    successorOf: ProductModelType;
    predecessorOf: ProductModelType;
    isVariantOf: ProductModelType;

    constructor(props : ProductModelType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('ProductModel');
    }
}