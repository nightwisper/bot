/**
 * Comand handler.
 */
class CmdHandler {
    /**
     * @constructor
     * @param {object} parser - Command Parser
     */
    constructor(parser) {
        this.parser = parser;
    }

    /**
     * Checks and executes message if deemed needed
     * @param {object} message 
     */
    execute(message) {
        try {
            var msg = this.parser.getCommand(message.content);

            if(!msg) return false;

            switch (msg.command) {
            case "ping":
                message.channel.send("pong");
                return true;
            
            default:
                throw "Invalid Command";
            }
        } catch (error) {
            if(message == undefined || message.channel == undefined){
                console.log("Missing an argument");
                return false;
            }
            message.channel.send("Invalid Command");
            return false;
        }
        
    }
}

export default CmdHandler;