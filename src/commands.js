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

const get = {
  name: "get",
  description: "Get details about tickets.",
  options: [
    {
      name: "all",
      type: DiscordJS.Constants.ApplicationCommandOptionTypes.SUB_COMMAND,
      description: "Get all tickets.",
    },
    {
      name: "number",
      description: "Get ticket by ticket number",
      type: DiscordJS.Constants.ApplicationCommandOptionTypes.SUB_COMMAND,
      options: [
        {
          name: "number",
          description: "The ticket number.",
          type: DiscordJS.Constants.ApplicationCommandOptionTypes.INTEGER,
          required: true,
        },
      ],
    },
    {
      name: "assignee",
      description: "Get tickets by assignee",
      type: DiscordJS.Constants.ApplicationCommandOptionTypes.SUB_COMMAND,
      options: [
        {
          name: "assignee",
          description: "The user name for the assigned tickets.",
          type: DiscordJS.Constants.ApplicationCommandOptionTypes.USER,
          required: true,
        },
      ],
    },
  ],
};

const update = {
  name: "update",
  description: "Update a ticket.",
  options: [
    {
      name: "assignee",
      type: DiscordJS.Constants.ApplicationCommandOptionTypes.SUB_COMMAND,
      description: "Update the assignee.",
      options: [
        {
          name: "number",
          description: "The ticket number.",
          type: DiscordJS.Constants.ApplicationCommandOptionTypes.INTEGER,
          required: true,
        },
        {
          name: "assignee",
          description: "User the task is assigned to.",
          type: DiscordJS.Constants.ApplicationCommandOptionTypes.USER,
          required: true,
        },
      ],
    },
    {
      name: "state",
      type: DiscordJS.Constants.ApplicationCommandOptionTypes.SUB_COMMAND,
      description: "Update the state.",
      options: [
        {
          name: "number",
          description: "The ticket number.",
          type: DiscordJS.Constants.ApplicationCommandOptionTypes.INTEGER,
          required: true,
        },
        {
          name: "state",
          description: "State of the task.",
          type: DiscordJS.Constants.ApplicationCommandOptionTypes.INTEGER,
          required: true,
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
      ],
    },
  ],
};

const remove = {
  name: "remove",
  description: "Delete a specific ticket.",
  options: [
    {
      name: "number",
      description: "The ticket number.",
      type: DiscordJS.Constants.ApplicationCommandOptionTypes.INTEGER,
      required: true,
    },
  ],
};

module.exports = {
  help, create, get, update, remove
}
