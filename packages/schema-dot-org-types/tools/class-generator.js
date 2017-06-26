// @flow

import type {MemberType, TypeInheritance, TypeMembers} from "./types";
import fs from 'fs';
import path from 'path';
import mustache from 'mustache';
import decamelize from 'decamelize';

export function toFilename(name: string) {
    return decamelize(name, '-');
}

export function dependencies(typeMembers: Array<?MemberType>, className?: string, parentClass? : string) {
    return new Set(
        [].concat(...typeMembers.map(function (property) {
            return property && property.types.map(function (type) {
                return type.name
            })
        })).filter(function (item) {
            return item // remove null
                && (!parentClass || parentClass !== item)
                && (!className || className !== item);
    }));
}

export function outputFilename(dir: string, className: string) {
    return path.join(dir, toFilename(className) + '.js');
}

export default class TypeGenerator {
    typeMembers: TypeMembers;
    typeInheritance: TypeInheritance;
    classFile: string;
    typeFile: string;
    fs: typeof fs;

    constructor(typeMembers: TypeMembers, typeInheritance : TypeInheritance, typeFile?: string) {
        this.typeMembers = typeMembers;
        this.typeInheritance = typeInheritance;
        this.typeFile = typeFile || '../types';
        this.fs = fs; // facilitate tests stubbing fs.
        this.classFile = this.fs.readFileSync(path.join(__dirname, 'class-file.mustache'), 'utf8');
    }

    generateClass(className: string, parentClass: string, typeMembers: Array<?MemberType>, filename: ?string): string {
        const validMembers = typeMembers.filter(function (item) {
            return item; // remove null
        });
        const obj = {
            className,
            parentClass,
            parentClassFile: filename || './' + toFilename(parentClass),
            dependencies: Array.from(dependencies(typeMembers, className, parentClass).values()),
            typeFile: this.typeFile,
            typeMembers: validMembers,
        };
        return mustache.render(this.classFile, obj);
    }

    generateAll(dir: string): Promise<*> {
        return new Promise((resolve, reject) => {
            const errors = [];
            const classes = Object.keys(this.typeMembers);
            let written = 0;

            for (let className of classes) {
                const filename = outputFilename(dir, className);
                let parent = this.typeInheritance[className];
                let parentClassfile = null;

                if (!parent) {
                    parent = 'Context';
                    parentClassfile = '../context';
                }
                this.fs.writeFile(
                    filename,
                    this.generateClass(className,
                        parent,
                        this.typeMembers[className],
                        parentClassfile),
                    'utf8',
                    function (error) {
                        if (error) {
                            errors.push(error);
                        } else {
                            console.log(`Generated ${filename}`);
                        }
                        if (++written === classes.length) {
                            if (!errors.length) {
                                resolve();
                            } else {
                                reject(errors);
                            }
                        }
                    }
                )
            }
        });
    }
}
