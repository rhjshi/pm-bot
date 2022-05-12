// File that contains the slash command handlers
const DiscordJS = require("discord.js");
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
  
  const embed = new DiscordJS.MessageEmbed()
      .setColor("BLUE")
      .setTitle(`Ticket #${ticket.number}`)
      .setDescription(`Successfully created ticket #${ticket.number}`)
      .addFields([
        {
          name: "Creator",
          value: utility.mention(ticket.creatorId),
          inline: true,
        },
        {
          name: "Assignee",
          value: utility.mention(ticket.assigneeId) || "None",
          inline: true,
        },
        {
          name: "State",
          value: utility.TicketStateToStr[ticket.state],
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
    

  interaction.reply({
    embeds: [embed]
  });
  
  console.log(`create cmd by: ${interaction.user.id}`);
};

module.exports = {
  help, create
}