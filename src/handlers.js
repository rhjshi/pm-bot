// File that contains the slash command handlers
const DiscordJS = require("discord.js");

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
          value: "foo",
          inline: true
        },
        {
          name: "Assignee",
          value: options.getUser("assignee")?.toString() || "no one",
          inline: true
        }
      ]);
    

  interaction.reply({
    embeds: [embed]
  });
  console.log(`assignee: ${options.getUser("assignee")}`)
};

module.exports = {
  help, create
}