// Load all environment variables from .env file
require('dotenv').config();

const slashCommands = require('./commands');
const slashCommandHandlers = require('./handlers');

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const testGuildID = "879055304392851486";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);

  const testGuild = client.guilds.cache.get(testGuildID);
  const commandManager = testGuild?.commands || client.application?.commands;
  
  if (!commandManager) return console.error("Could not get CommandManager");

  commandManager.create(slashCommands.help);
  commandManager.create(slashCommands.create);
});

client.on("interactionCreate", interaction => {
  if (!interaction.isCommand()) return;

  const { commandName, options } = interaction;

  slashCommandHandlers[commandName](interaction);

});

client.login(process.env.BOT_TOKEN);
