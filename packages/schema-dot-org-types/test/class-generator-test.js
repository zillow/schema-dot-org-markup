//@flow
import {describe, it, afterEach} from 'mocha';
import {expect} from 'chai';
import fs from 'fs';
import sinon from 'sinon';
import ClassGenerator, {toFilename, dependencies, outputFilename} from '../tools/class-generator';
import typeMember from './fixtures/type-member.json'
import typeMembers from './fixtures/type-members.json'
import typeInheritance from './fixtures/type-inheritance.json'
import type {MemberType} from "../tools/types";

describe('ClassGenerator.generateClass', () => {
    const cut = new ClassGenerator(typeMembers, typeInheritance);
    const PARENT_PROBE = 'CreativeWork';
    const CLASS_NAME_PROBE = 'Test';

    it('produces a class file', () => {
        const content = cut.generateClass(CLASS_NAME_PROBE, PARENT_PROBE, typeMember);
        const lines = content.split('\n');

        expect(content).to.match(/@flow/);
        expect(content).to.match(RegExp(`import\\b[^;]*${PARENT_PROBE}\\b[^;]*from\\b[^;]*${toFilename(PARENT_PROBE)}`))
        expect(content).to.match(RegExp(`import\\b[^;]*type\\b[^;]*${PARENT_PROBE}Type\\b.[^;]*rom\\b[^;]*${toFilename(PARENT_PROBE)}`))
        const dependencyImports = lines.reduce(function (count, line) {
            return count += line.match(/import\b[^;]*type/) && !line.match(PARENT_PROBE) ? 1 : 0;
        }, 0);
        expect(dependencyImports).to.equal(dependencies(typeMember).size - 1);
    });

    it('handles a null elmment', () => {
        const typeMemberWithNull : Array<?MemberType> = Array.from(typeMember);
        typeMemberWithNull.push(null);

        const content = cut.generateClass(CLASS_NAME_PROBE, PARENT_PROBE, typeMemberWithNull);
        expect(content).to.match(/@flow/);
    });

    it('imports the parent once', () => {
        const lines = cut.generateClass(CLASS_NAME_PROBE, PARENT_PROBE, typeMember).split('\n');
        const parentImportPattern = RegExp(`import\\b[^;]*type\\b[^;]*${PARENT_PROBE}`);

        // verify the fixture matches expectations
        expect(dependencies(typeMember).has(PARENT_PROBE)).to.be.true;
        const parentImports = lines.reduce(function (count, line) {
            return count += line.match(parentImportPattern) ? 1 : 0;
        }, 0);
        expect(parentImports).to.equal(1);
    })
});

describe('ClassGenerator.generateAll', () => {
    const cut = new ClassGenerator(typeMembers, typeInheritance);
    const DIR_PROBE = 'dir';
    let fsMock;

    function stub() {};
    cut.fs = Object.assign({}, fs);
    // Prevent the test from actually using the filesystem
    for (const method of Object.keys(cut.fs)) {
        if (typeof cut.fs[method] == 'function') {
            cut.fs[method] = stub;
        }
    }

    afterEach(() => {
        if (fsMock) {
            fsMock.restore();
            fsMock = null;
        }
    });

    it("creates a file for each class", () => {

        fsMock = sinon.mock(cut.fs);
        for (const className of Object.keys(typeMembers)) {
            fsMock.expects('writeFile').once().withArgs(outputFilename(DIR_PROBE, className));
        }

        cut.generateAll(DIR_PROBE);

        fsMock.verify();
    });

    it("resolves the promise when done", () => {
        // $FlowFixMe
        expect(cut.generateAll(DIR_PROBE)).to.be.fulfilled;
    })
});