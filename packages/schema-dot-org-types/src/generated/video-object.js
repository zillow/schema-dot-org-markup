//@flow
import objectAssign from 'object-assign';
import {MediaObject} from './media-object';
import type { MediaObjectType } from './media-object';
import type { TextType } from '../types';
import type { PersonType } from '../types';
import type { MusicGroupType } from '../types';
import type { ImageObjectType } from '../types';
export type VideoObjectType = {
    videoFrameSize?: TextType,
    videoQuality?: TextType,
    director?: PersonType,
    actor?: PersonType,
    actors?: PersonType,
    musicBy?: MusicGroupType | PersonType,
    thumbnail?: ImageObjectType,
    directors?: PersonType,
    caption?: TextType,
    transcript?: TextType,
    } & MediaObjectType;

export class VideoObject extends MediaObject {
    videoFrameSize: TextType;
    videoQuality: TextType;
    director: PersonType;
    actor: PersonType;
    actors: PersonType;
    musicBy: MusicGroupType | PersonType;
    thumbnail: ImageObjectType;
    directors: PersonType;
    caption: TextType;
    transcript: TextType;

    constructor(props : VideoObjectType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('VideoObject');
    }
}