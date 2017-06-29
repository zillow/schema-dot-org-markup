//@flow
import objectAssign from 'object-assign';
import {MediaObject} from './media-object';
import type { MediaObjectType } from './media-object';
import type { TextType } from '../types';
export type VideoObjectType = {
    videoFrameSize?: TextType,
    videoQuality?: TextType,
    } & MediaObjectType;

export class VideoObject extends MediaObject {
    videoFrameSize: TextType;
    videoQuality: TextType;

    constructor(props : VideoObjectType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('VideoObject');
    }
}