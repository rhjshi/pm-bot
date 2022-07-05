const DiscordJS = require("discord.js");

const TicketStates = {
  todo: 0,
  inProgress: 1,
  completed: 2,
};

const TicketStateToStr = [
  "Todo",
  "In progress",
  "Completed",
];

/**
 * returns String for discord formatted mention
 * if discId is a falsy value, will return empty string 
 */
const mention = discId => {
  if (!discId) return "";

  return `<@${discId}>`;
};

const createMessageEmbed = (ticket, color, desc) => {
  return new DiscordJS.MessageEmbed()
    .setColor(color)
    .setTitle(`Ticket #${ticket.number}`)
    .setDescription(desc)
    .addFields([
      {
        name: "Creator",
        value: mention(ticket.creatorId),
        inline: true,
      },
      {
        name: "Assignee",
        value: mention(ticket.assigneeId) || "None",
        inline: true,
      },
      {
        name: "State",
        value: TicketStateToStr[ticket.state],
        inline: true,
      },
      {
        name: "Title",
        value: ticket.title,
      },
      {
        name: "Description",
        value: ticket.description,
      },
    ]);
};

module.exports = {
  TicketStates,
  TicketStateToStr,
  mention,
  createMessageEmbed
}
