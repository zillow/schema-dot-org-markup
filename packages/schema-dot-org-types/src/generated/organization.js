//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { TextType } from '../types';
import type { PersonType } from '../types';
import type { PlaceType } from '../types';
import type { DateType } from '../types';
export type OrganizationType = {
    department?: OrganizationType,
    leiCode?: TextType,
    employee?: PersonType,
    foundingLocation?: PlaceType,
    foundingDate?: DateType,
    parentOrganization?: OrganizationType,
    dissolutionDate?: DateType,
    employees?: PersonType,
    subOrganization?: OrganizationType,
    legalName?: TextType,
    founders?: PersonType,
    founder?: PersonType,
    } & ThingType;

export class Organization extends Thing {
    department: OrganizationType;
    leiCode: TextType;
    employee: PersonType;
    foundingLocation: PlaceType;
    foundingDate: DateType;
    parentOrganization: OrganizationType;
    dissolutionDate: DateType;
    employees: PersonType;
    subOrganization: OrganizationType;
    legalName: TextType;
    founders: PersonType;
    founder: PersonType;

    constructor(props : OrganizationType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('Organization');
    }
}