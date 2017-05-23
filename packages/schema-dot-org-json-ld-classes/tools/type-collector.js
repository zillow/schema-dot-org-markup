// @flow
import Inheritance from 'schema.org';

const inheritance = new Inheritance();
const ID = '@id';
const SIMPLE_NAME_PAT = /[^:]*:?(.*)/;

function extractType(domain : any) {
    return domain[ID].match(SIMPLE_NAME_PAT)[1];
}

export default class TypeCollector {
    schemas : {[string] : Array<string>};
    parents : {[string] : string};
    typeName : string;

    constructor(typeName : string) {
        this.parents = {};
        this.schemas = {};
        this.typeName = typeName;
    }

    recordParent(id: string, subClassOf : any) : string {
        const parent = extractType(subClassOf);

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
            let type : Array<string>;

            if (Array.isArray(typeElem)) {
                type = typeElem.map(function (value) {
                    return extractType(value);
                })
            } else {
                type = [extractType(typeElem)];
            }
            this.schemas[fromName] = [].concat({property: id, types: type}, this.schemas[fromName]);
        }
    }
}