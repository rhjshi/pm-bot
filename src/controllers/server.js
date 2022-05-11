const Server = require("./../models/server");

const getServer = async guildId => {
  let server = await Server.findOne({ guildId }).exec();
  if (!server) {
    // Create new server with guildId 
    server = new Server({ guildId });
  }

  return server;
};

module.exports = {
  getServer,
}
