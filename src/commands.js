// File that contains the slash command definitions
const DiscordJS = require("discord.js");

const help = {
  name: "help",
  description: "I need help!"
};

const create = {
  name: "create",
  description: "Create a ticket/task.",
  options: [
    {
      name: "assignee",
      description: "User the task is assigned to.",
      type: DiscordJS.Constants.ApplicationCommandOptionTypes.USER,
    },
  ]
};

module.exports = {
  help, create
}
