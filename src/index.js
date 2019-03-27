import "dotenv/config";

import Discord from "discord.js";
import Parser from "./Parser";
import CmdHandler from "./CmdHandler";

const handler = new CmdHandler(new Parser(process.env.TOKEN));

const client = new Discord.Client();

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on("message", msg => {
    if(msg.author.bot) return;
    handler.execute(msg);
});

client.login(process.env.API_KEY);
