//@flow
import objectAssign from 'object-assign';
import {CreativeWork} from './creative-work';
import type { CreativeWorkType } from './creative-work';
import type { TextType } from '../types';
import type { URLType } from '../types';
import type { ImageObjectType } from '../types';
import type { DataFeedType } from '../types';
export type SoftwareApplicationType = {
    applicationSubCategory?: TextType | URLType,
    storageRequirements?: TextType | URLType,
    screenshot?: ImageObjectType | URLType,
    softwareRequirements?: TextType | URLType,
    featureList?: TextType | URLType,
    downloadUrl?: URLType,
    releaseNotes?: URLType | TextType,
    availableOnDevice?: TextType,
    applicationSuite?: TextType,
    operatingSystem?: TextType,
    requirements?: TextType | URLType,
    softwareHelp?: CreativeWorkType,
    countriesNotSupported?: TextType,
    memoryRequirements?: URLType | TextType,
    applicationCategory?: TextType | URLType,
    permissions?: TextType,
    softwareVersion?: TextType,
    installUrl?: URLType,
    supportingData?: DataFeedType,
    device?: TextType,
    countriesSupported?: TextType,
    processorRequirements?: TextType,
    fileSize?: TextType,
    softwareAddOn?: SoftwareApplicationType,
    } & CreativeWorkType;

export default class SoftwareApplication extends CreativeWork {
    applicationSubCategory: TextType | URLType;
    storageRequirements: TextType | URLType;
    screenshot: ImageObjectType | URLType;
    softwareRequirements: TextType | URLType;
    featureList: TextType | URLType;
    downloadUrl: URLType;
    releaseNotes: URLType | TextType;
    availableOnDevice: TextType;
    applicationSuite: TextType;
    operatingSystem: TextType;
    requirements: TextType | URLType;
    softwareHelp: CreativeWorkType;
    countriesNotSupported: TextType;
    memoryRequirements: URLType | TextType;
    applicationCategory: TextType | URLType;
    permissions: TextType;
    softwareVersion: TextType;
    installUrl: URLType;
    supportingData: DataFeedType;
    device: TextType;
    countriesSupported: TextType;
    processorRequirements: TextType;
    fileSize: TextType;
    softwareAddOn: SoftwareApplicationType;

    constructor(props : SoftwareApplicationType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('SoftwareApplication');
    }
}