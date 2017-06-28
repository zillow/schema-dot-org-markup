#!/usr/bin/env node
// @flow

import JSONStream from "JSONStream";
import eventStream from 'event-stream';
import request from 'request';
import template from 'url-template';
import fs from 'fs';
import TypeCollector from './type-collector';
import TypeGenerator from './class-generator';
import program from 'commander';
import path from 'path';

const SCHEMA_ORG_URL = template.parse('http://schema.org/{type}.jsonld');

function fetchType(url: string, processor : Function) : Promise<*> {
    return processType(
        request({ url }),
        processor);
}

function readType(path : string, processor : Function) : Promise<*> {
    return processType(
        fs.createReadStream(path),
        processor);
}

function processType(stream: any, processor : Function) : Promise<*> {
    return new Promise(function (resolve, reject) {
        const events = eventStream.map(function (elem, callback) {
            const result = processor(elem);
            callback(null, result);
        });
        stream.pipe(JSONStream.parse('@graph.*'))
            .pipe(events);
        events.on('error', function (error: Error) {
            reject(error);
        });
        events.on('end', function () {
            resolve();
        })
    });
}

let commandName = process.argv[0];
if (commandName.match(/node$/)) {
    commandName = path.basename(process.argv[1]);
}
const USAGE = `${commandName} [options] <schema-type>`;
program
    .usage(USAGE)
    .option('-f, --from-file <filename>', 'Load a scheme type from <filename>')
    .option('-d, --to-dir <path>', 'Write class files to <path>', val => val, 'src/generated')
    .option('-t, --type-file <filename>', 'import types from <filename>', val => val, '../types');
const args = program.parseOptions(process.argv.slice(2)).args;

if (args.length != 1) {
    program.help();
}
const type = args[0];
const toDir = program.opts().toDir;
const dirBase = path.isAbsolute(toDir) ? '/' : '.';

let readFunc = fetchType;
let source = SCHEMA_ORG_URL.expand({type});

//create destination folder
toDir.split(path.sep).reduce((parentDir, childDir) => {
    // Resolving an absolute path to the current working directory. To resolve to
    // the current script dir, use `__dirname` for `path.resolve()` as 1st param.
    // Use `path.resolve()`, don't '/' concate, also to avoid cross-platform issues.
    const curDir = path.resolve(parentDir, childDir);
    try {
        fs.mkdirSync(curDir);
    } catch (e) {
        if (e.code != 'EEXIST') {
            throw e;
        }
    }
    return curDir;
}, dirBase);
if (!fs.statSync(toDir).isDirectory()) {
    throw `<${toDir}> is not a folder.`;
}

const fromFile = program.opts().fromFile;

if (fromFile) {
    readFunc = readType;
    source = fromFile;
}
const collector = new TypeCollector(type);

readFunc(source, collector.recordProperty.bind(collector)).then(function () {
    new TypeGenerator(collector.schemas, collector.parents).generateAll(toDir).then(function () {
        console.log("done.");
    }, function (err) {
        console.error(err);
        process.exit(1);
    });
});