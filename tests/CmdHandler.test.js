import assert from "assert";
import Parser from "../src/Parser";
import CmdHandler from "../src/CmdHandler";

const handler = new CmdHandler(new Parser());

describe("Check if command handler has a parser" , () => {
    it("handler.parser.token should return '!'", () => {
        assert.equal(handler.parser.token, "!");
    });
});

describe("Check if it will execute when given improper parameters", () => {
    it("Should always fail unless receiving a message object from user.", () => {
        assert.equal(handler.execute("!pong"), false, "Message as string");
        assert.equal(handler.execute(), false, "Empty message");
        assert.equal(handler.execute({content:"!pong"}), false, "Improper message object");
    });
});