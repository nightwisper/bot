import assert from 'assert';
import Parser from '../src/Parser';

const parser = new Parser();

describe("Parser's token", () => {
    it("Should be '!'", () => {
        assert.equal(parser.token, "!");
    })
})

describe("Testing command parsing", () => {
    describe("Command without parameters", ()=> {
        it("Should return an object with a command but no parameters", () => {
            var test = parser.getCommand('!test')
            assert.equal(test.command, 'test', "Command")
            assert.equal(test.parameters.length, 0, "Parameters length")
        })
    })

    describe("Command with parameters", () => {
        it("Should return an object with a command and parameters", () => {
            var test = parser.getCommand('!test 1')
            assert.equal(test.command, 'test', "Command")
            assert.equal(test.parameters.length, 1, "Parameters length")
            assert.equal(test.parameters[0], '1', "parameter value")
        })
    })

    describe("Not a command", () => {
        it("Should return undefined", () => {
            assert.equal(parser.getCommand('test'), undefined)
        })
    })
})