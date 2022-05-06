// Load all environment variables from .env file
require('dotenv').config();

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const prefix = '!';
client.on("messageCreate", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  message.channel.send(`You said "${message.content}"`);
  message.reply("hi")
});

client.login(process.env.BOT_TOKEN);
