//@flow
import {describe, it} from 'mocha';
import {expect} from 'chai';
import {Context, DEFAULT_CONTEXT} from '../src/context';

const TYPE_PROBE = 'TestClass';
const PROPS_PROBE = {one: 'one', two: 'two'};

class TestClass extends Context {
    constructor(props: Object) {
        super(props);
        Object.assign(this, props);
    }

    getType() : string {
        return TYPE_PROBE;
    }
}
describe("Schema.org context", () => {
    const cut = new TestClass(PROPS_PROBE);
    const json = JSON.stringify(cut);

    it("implements type", () => {
        expect(JSON.parse(json)).to.be.an('object').that.includes({'@type': TYPE_PROBE});
    });

    it("implements context", () => {
        expect(JSON.parse(json)).to.be.an('object').that.includes({'@context': DEFAULT_CONTEXT});
    })

    it("renders its properties", () => {
        expect(JSON.parse(json)).to.be.an('object').that.includes(PROPS_PROBE);
    })
})