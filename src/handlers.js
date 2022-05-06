// File that contains the slash command handlers
const DiscordJS = require("discord.js");

const help = interaction => {
  interaction.reply("hello!");
};

const create = interaction => {
  const { options } = interaction;
  interaction.reply(`assignee: ${options.getUser("assignee")}`);
};

module.exports = {
  help, create
}