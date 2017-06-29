//@flow
export type MemberType = {property : string, types: Array<{name: string, last?: boolean}>};
export type TypeMembers = {[string] : Array<?MemberType>};
export type TypeInheritance = {[string]: string};
