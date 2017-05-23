// @flow

import JSONStream from "JSONStream";
import eventStream from 'event-stream';
import request from 'request';
import template from 'url-template';
import fs from 'fs';
import TypeCollector from './type-collector';

const SCHEMA_ORG_URL = template.parse('http://schema.org/{type}.jsonld');

function fetchType(typeName: string, processor : Function) : Promise<*> {
    return processType(
        request({url: SCHEMA_ORG_URL.expand({type: typeName})}),
        typeName, processor);
}

function readType(path : string, typeName : string, processor : Function) : Promise<*> {
    return processType(fs.createReadStream(path), typeName, processor);
}

function processType(stream: any, typeName : string, processor : Function) : Promise<*> {
    return new Promise(function (resolve, reject) {
        const events = eventStream.map(function (elem, callback) {
            console.log(elem);
            const result = processor(elem);
            callback(null, result);
        });
        stream.pipe(JSONStream.parse('@graph.*'))
            .pipe(events);
        events.on('error', function (error: Error) {
            reject(error);
        });
        events.on('end', function () {
            console.log("done?");
            resolve();
        })
    });
}


const collector = new TypeCollector('VideoObject');

readType('VideoObject.jsonld', collector.typeName, collector.recordProperty.bind(collector)).then(function () {console.log(collector.parents, JSON.stringify(collector.schemas, null, 2))}, function (error) {throw error});