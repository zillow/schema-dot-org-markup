//@flow
import objectAssign from 'object-assign';
import {Thing} from './thing';
import type { ThingType } from './thing';
import type { TextType } from '../types';
import type { PersonType } from '../types';
import type { OrganizationType } from '../types';
export type ProgramMembershipType = {
    membershipNumber?: TextType,
    programName?: TextType,
    member?: PersonType | OrganizationType,
    members?: OrganizationType | PersonType,
    hostingOrganization?: OrganizationType,
    } & ThingType;

export class ProgramMembership extends Thing {
    membershipNumber: TextType;
    programName: TextType;
    member: PersonType | OrganizationType;
    members: OrganizationType | PersonType;
    hostingOrganization: OrganizationType;

    constructor(props : ProgramMembershipType) {
        super(props);
        objectAssign(this, props);
    }

    getType(): string {
        return ('ProgramMembership');
    }
}