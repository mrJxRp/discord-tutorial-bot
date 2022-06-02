require('dotenv').config();

console.log(process.env.DISCORDJS_BOT_TOKEN);

const { Client} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES] });


Client.login(process.env.DISCORDJS_BOT_TOKEN);
