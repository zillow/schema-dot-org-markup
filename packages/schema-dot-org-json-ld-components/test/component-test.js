//@flow
import {shallow} from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import {describe, it} from 'mocha';
import chai, {expect} from 'chai';

import {URL} from 'url';
import React from 'react';
import {VideoObject} from 'schema-dot-org-types';
import {DEFAULT_CONTEXT} from 'schema-dot-org-types/lib/context';
import type {VideoObjectType} from 'schema-dot-org-types/lib/types';

import moment from 'moment';

import Component from '../src';

chai.use(chaiEnzyme());

function parseJson(text: string) : ?Object {
    let result = null;

    expect(() => {result = JSON.parse(text)}).to.not.throw(/./);
    return result;
}

describe('The json-ld component', () => {
    const DATE_PROBE = moment();
    const props : VideoObjectType = {};

    props.url = new URL("http://foo");
    props.uploadDate = DATE_PROBE;

    const schemaObject = new VideoObject(props);
    const tree = shallow(<Component markup={schemaObject} />);

    it('renders a script tag', () => {
    // $FlowFixMe
        expect(tree).to.have.tagName('script');
    });

    it('has JSON contents', () => {
        parseJson(tree.text());
    });

    it('provides JSON with the expected schema type', () => {
        const obj = parseJson(tree.text());

        expect(obj).to.include({'@type': schemaObject.getType()});
    })

    it('provides JSON with the shema.org context', () => {
        const obj = parseJson(tree.text());

        expect(obj).to.include({'@context': DEFAULT_CONTEXT});
    });

    it('encodes the date property according to ISO-8601', () => {
        const obj = parseJson(tree.text());

        expect(obj).to.include({uploadDate: DATE_PROBE.toJSON()});
    });
});

