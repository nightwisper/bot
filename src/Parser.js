/**
 * Message Parser
 */
class Parser {
    /**
     * @constructor
     * @param {string} token - Command token used by the bot
     */
    constructor(token = "!"){
        this.token = token;
        this.tokenLength = this.token.length;  
    }

    /**
     * Checks if the message contains a valid command. If so it breaks down the message into command and parameters
     * @param {string} message - Message content sent by user
     * @returns {object}
     */
    getCommand(message) {
        try {
            if(message.substring(0,this.tokenLength) !== this.token){
                throw "Message is not a command";
            }
            message = message.split(" ");
            return {
                command: message[0].substring(this.tokenLength, message[0].length),
                parameters: message.slice(1, message.length)
            };

        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

export default Parser;