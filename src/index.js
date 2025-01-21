const { Client, IntentsBitField } = require("discord.js");
require('dotenv').config();

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent
  ],
});

client.on('ready', (c) => {
    console.log(`tag: ${c.user.tag} ONLINE`)
})
 
client.on('messageCreate', (message) => {
    console.log(`message: ${message.content} | from ${message.author.username}`);
})

client.

client.login(process.env.DISCORD_TOKEN);

