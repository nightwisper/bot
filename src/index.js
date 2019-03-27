import "dotenv/config";

import Discord from "discord.js";
import Parser from "./Parser";
import CmdHandler from "./CmdHandler";

const handler = new CmdHandler(new Parser(process.env.TOKEN));

const client = new Discord.Client();

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setActivity(`with my dick ${process.env.TOKEN}help`);
});

client.on("message", msg => {
    if(msg.author.bot) return;
    handler.execute(msg);
});

client.on("error", error => {
    console.error(error);
});

client.login(process.env.API_KEY);
