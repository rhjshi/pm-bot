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
      name: "title",
      description: "Title or summary of ticket/task.",
      type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
      required: true,
    },
    {
      name: "description",
      description: "Further details of ticket/task.",
      type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
      required: true,
    },
    {
      name: "assignee",
      description: "User the task is assigned to.",
      type: DiscordJS.Constants.ApplicationCommandOptionTypes.USER,
    },
    {
      name: "state",
      description: "State of the task.",
      type: DiscordJS.Constants.ApplicationCommandOptionTypes.INTEGER,
      choices: [
        {
          name: "todo",
          value: 0
        },
        {
          name: "in progress",
          value: 1
        },
        {
          name: "completed",
          value: 2
        },
      ],
    },
  ]
};

module.exports = {
  help, create
}
