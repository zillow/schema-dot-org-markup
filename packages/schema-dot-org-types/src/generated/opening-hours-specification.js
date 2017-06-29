//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { TimeType } from '../types';
import type { DayOfWeekType } from '../types';
export type OpeningHoursSpecificationType = {
    opens?: TimeType,
    dayOfWeek?: DayOfWeekType,
    closes?: TimeType,
    } & ThingType;

export class OpeningHoursSpecification extends Thing {
    opens: TimeType;
    dayOfWeek: DayOfWeekType;
    closes: TimeType;

    constructor(props : OpeningHoursSpecificationType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('OpeningHoursSpecification');
    }
}