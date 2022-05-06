// File that contains the slash command handlers
const DiscordJS = require("discord.js");

const help = interaction => {
  interaction.reply("hello!");
};

module.exports = {
  help
}