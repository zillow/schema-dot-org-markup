//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { ActionType } from '../types';
import type { IntegerType } from '../types';
import type { SoftwareApplicationType } from '../types';
import type { WebSiteType } from '../types';
export type InteractionCounterType = {
    interactionType?: ActionType,
    userInteractionCount?: IntegerType,
    interactionService?: SoftwareApplicationType | WebSiteType,
    } & ThingType;

export class InteractionCounter extends Thing {
    interactionType: ActionType;
    userInteractionCount: IntegerType;
    interactionService: SoftwareApplicationType | WebSiteType;

    constructor(props : InteractionCounterType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('InteractionCounter');
    }
}