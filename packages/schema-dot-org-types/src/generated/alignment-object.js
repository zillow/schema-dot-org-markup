//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { TextType } from '../types';
import type { URLType } from '../types';
export type AlignmentObjectType = {
    targetName?: TextType,
    educationalFramework?: TextType,
    alignmentType?: TextType,
    targetUrl?: URLType,
    targetDescription?: TextType,
    } & ThingType;

export class AlignmentObject extends Thing {
    targetName: TextType;
    educationalFramework: TextType;
    alignmentType: TextType;
    targetUrl: URLType;
    targetDescription: TextType;

    constructor(props : AlignmentObjectType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('AlignmentObject');
    }
}