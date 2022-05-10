// File that contains the slash command handlers
const DiscordJS = require("discord.js");
const utility = require("./util");

const help = interaction => {
  interaction.reply("hello!");
};

const create = interaction => {
  const { options } = interaction;

  const embed = new DiscordJS.MessageEmbed()
      .setColor("BLUE")
      .setTitle("Ticket #1")
      .setDescription("Successfully created ticket #1")
      .addFields([
        {
          name: "Creator",
          value: interaction.user.toString(),
          inline: true,
        },
        {
          name: "Assignee",
          value: options.getUser("assignee")?.toString() || "no one",
          inline: true,
        },
        {
          name: "Title",
          value: options.getString("title"),
        },
        {
          name: "Description",
          value: options.getString("description"),
        },
        {
          name: "State",
          value: utility.StateIntToStr[options.getInteger("state") || 0],
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