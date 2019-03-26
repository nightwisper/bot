import "dotenv/config";

import Discord from "discord.js";
import Parser from "./Parser";

const parser = new Parser(process.env.TOKEN);

const client = new Discord.Client();

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on("message", msg => {
    var command = parser.getCommand(msg.content);
    console.log(command);
});

client.login(process.env.API_KEY);
