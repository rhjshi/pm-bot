// File that contains the slash command handlers
const utility = require("./util");
const TicketController = require("./controllers/ticket");

const help = interaction => {
  interaction.reply("hello!");
};

const create = async interaction => {
  const { options } = interaction;

  const ticket = await TicketController.createTicket({
    guildId: interaction.guildId,
    creatorId: interaction.user.id,
    assigneeId: options.getUser("assignee")?.id,
    title: options.getString("title"),
    description: options.getString("description"),
    state: options.getInteger("state"),
  });
  
  interaction.reply({
    embeds: [utility.createMessageEmbed(ticket, "BLUE", `Successfully created ticket #${ticket.number}`)]
  });
  
  console.log(`create cmd by: ${interaction.user.id}`);
};


const get = async interaction => {
  const { guildId, options } = interaction;
  let tickets;
  let embeds;
  console.log(`get cmd for: ${guildId}`);

  switch (options.getSubcommand()) {
    case "all":
      tickets = await TicketController.getTickets(guildId);
      if (!tickets.length || !tickets) {
        interaction.reply(`Could not get all tickets`);
        return;
      }
      embeds = tickets.map(ticket => utility.createMessageEmbed(ticket, "BLUE", `Successfully retrieved ticket #${ticket.number}`));
      break;
    case "number":
      const num = options.getInteger("number")
      const ticket = await TicketController.getTicketByNumber(guildId, num);
      if (!ticket) {
        interaction.reply(`Could not get ticket #${num}`);
        return;
      }
      embeds = [(utility.createMessageEmbed(ticket, "BLUE", `Successfully retrieved ticket #${ticket.number}`))];
      break;
    case "assignee":
      const assigneeId = options.getUser("assignee").id
      tickets = await TicketController.getTicketsByAssigneeId(guildId, assigneeId);
      if (!tickets.length || !tickets) {
        interaction.reply(`Could not get tickets for assignee`);
        return;
      }
      embeds = tickets.map(ticket => utility.createMessageEmbed(ticket, "BLUE", `Successfully retrieved ticket #${ticket.number}`));
      break;
    default:
      break;
  }

  interaction.reply({ embeds });
};

const update = async interaction => {
  const { guildId, options } = interaction;
  const num = options.getInteger("number");

  const ticket = await TicketController.getTicketByNumber(guildId, num);

  console.log(
    options.getSubcommand(),
    num,
    options.getUser("assignee"),
    options.getInteger("state")
  )

  if (!ticket) {
    interaction.reply(`Could not update ticket #${num}`);
    return;
  }

  const updates = {};
  switch (options.getSubcommand()) {
    case "assignee":
      updates.assigneeId = options.getUser("assignee").id;
      break;
    case "state":
      updates.state = options.getInteger("state");
      break;
    default:
      break;
  }

  await TicketController.updateTicket(guildId, num, updates);
  interaction.reply(`Ticket #${num} successfully updated.`);
};

const remove = async interaction => {
  const { guildId, options } = interaction;
  const num = options.getInteger("number");

  console.log(`delete cmd for: ${guildId}#${num}`);

  const ticket = await TicketController.deleteTicket(guildId, num);

  if (!ticket) {
    interaction.reply(`Could not delete ticket #${num}`);
    return;
  }

  interaction.reply({ embeds: [utility.createMessageEmbed(ticket, "RED", `Successfully deleted ticket #${ticket.number}`)] });

}

module.exports = {
  help, create, get, update, remove
}