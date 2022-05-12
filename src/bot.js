// Load all environment variables from .env file
require('dotenv').config();
const mongoose = require("mongoose");
const { Client, Intents } = require('discord.js');

const slashCommands = require('./commands');
const slashCommandHandlers = require('./handlers');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const testGuildID = "879055304392851486";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);

  const testGuild = client.guilds.cache.get(testGuildID);
  const commandManager = testGuild?.commands || client.application?.commands;
  
  if (!commandManager) return console.error("Could not get CommandManager");

  commandManager.create(slashCommands.help);
  commandManager.create(slashCommands.create);
  commandManager.create(slashCommands.get);
  commandManager.create(slashCommands.update);
});

client.on("interactionCreate", interaction => {
  if (!interaction.isCommand()) return;

  const { commandName, options } = interaction;
  console.log(`Cmd "${commandName}" ran.`);
  
  slashCommandHandlers[commandName](interaction);

  // interaction.options.getString
  // interaction.user.toString
  // interaction.guildId
  // options.getSubcommand
});

client.login(process.env.BOT_TOKEN);

mongoose.connect(process.env.MONGO_SRV, {
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  // useCreateIndex: true
})
.then( () => console.log("MongoDB connection successfully established.") )
.catch( err => console.log("MongoDB connection failed:", err) );
