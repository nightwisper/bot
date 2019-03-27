class CmdHandler {
    constructor(parser) {
        this.parser = parser;
    }

    execute(message) {
        try {
            var msg = this.parser.getCommand(message.contents);

            switch (msg.command) {
                case 'ping':
                    message.channel.send('pong')
                    return true;
            
                default:
                    throw 'Invalid Command';
            }
        } catch (error) {
            if(message == undefined || message.channel == undefined){
                console.log('Missing an argument')
                return false;
            }
            message.channel.send('Invalid Command');
            return false;
        }
        
    }
}

export default CmdHandler;