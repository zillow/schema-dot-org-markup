//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { ContactPointOptionType } from '../types';
import type { ProductType } from '../types';
import type { TextType } from '../types';
export type ContactPointType = {
    contactOption?: ContactPointOptionType,
    productSupported?: ProductType | TextType,
    contactType?: TextType,
    } & ThingType;

export class ContactPoint extends Thing {
    contactOption: ContactPointOptionType;
    productSupported: ProductType | TextType;
    contactType: TextType;

    constructor(props : ContactPointType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('ContactPoint');
    }
}