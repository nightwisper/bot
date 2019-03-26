class Parser {
    constructor(token){
        this.token = token;
        this.tokenLength = this.token.length;  
    }

    getCommand(message) {
        try {
            if(message.substring(0,this.tokenLength) !== this.token){
                return;
            }
            message = message.split(" ");
            return {
                command: message[0].substring(this.tokenLength-1, message[0].length),
                payload: message.slice(1, message.length)
            };

        } catch (error) {
            console.log("Invalid message");
            return;
        }
    }
}

export default Parser;