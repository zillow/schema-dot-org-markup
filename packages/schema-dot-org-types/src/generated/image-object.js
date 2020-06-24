//@flow
import objectAssign from 'object-assign';
import {MediaObject} from './media-object';
import type { MediaObjectType } from './media-object';
import type { BooleanType } from '../types';
import type { PropertyValueType } from '../types';
import type { TextType } from '../types';
export type ImageObjectType = {
    representativeOfPage?: BooleanType,
    exifData?: PropertyValueType | TextType,
    thumbnail?: ImageObjectType,
    caption?: TextType,
    } & MediaObjectType;

export class ImageObject extends MediaObject {
    representativeOfPage: BooleanType;
    exifData: PropertyValueType | TextType;
    thumbnail: ImageObjectType;
    caption: TextType;

    constructor(props : ImageObjectType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('ImageObject');
    }
}