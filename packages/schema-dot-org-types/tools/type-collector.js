// @flow
import Inheritance from '@zillow/schema.org';
import type {TypeMembers, TypeInheritance} from "./types";

const inheritance = new Inheritance();
const ID = '@id';
const SIMPLE_NAME_PAT = /[^:]*:?(.*)/;

function extractType(domain : any) {
    return domain[ID].match(SIMPLE_NAME_PAT)[1];
}

const INTANGIBLES = new Set([
    'Intangible'
]);

export default class TypeCollector {
    schemas : TypeMembers;
    parents : TypeInheritance;
    typeName : string;

    constructor(typeName : string) {
        this.parents = {};
        this.schemas = {};
        this.typeName = typeName;
    }

    recordParent(id: string, subClassOf : any) : string {
        let parent = extractType(subClassOf);

        // Hack around 'Intangible' inheritance. Possible because the schema.org package is not current with website.
        if (INTANGIBLES.has(parent)) {
            parent = 'Thing';
        }
        this.parents[id] = parent;
        return parent;
    }

    recordProperty(element : any) {
        const id = extractType(element);
        const domain = element['schema:domainIncludes'];
        const subClassOf = element['rdfs:subClassOf'];
        let fromType = domain;

        if (subClassOf) {
            this.recordParent(id, subClassOf);
        }
        if (Array.isArray(domain)) {
            fromType = domain.reduce((accumulator, value) => {
                return inheritance.is(this.typeName, extractType(value)) ? value : accumulator;
            }, null);
        }
        if (fromType) {
            const fromName = extractType(fromType);
            const typeElem = element['schema:rangeIncludes'];
            let type : Array<{name: string, last?: boolean}>;

            if (Array.isArray(typeElem)) {
                type = typeElem.map(function (value) {
                    return {
                        name: extractType(value)
                    }
                })
            } else {
                type = [{
                    name: extractType(typeElem)
                }];
            }
            type[type.length - 1].last = true;
            this.schemas[fromName] = [].concat({property: id, types: type}, this.schemas[fromName]);
        }
    }
}