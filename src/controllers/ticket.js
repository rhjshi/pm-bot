const Ticket = require("./../models/ticket");
const ServerController = require("./server");

const createTicket = async (guildId) => {
  const server = await ServerController.getServer(guildId);
  const ticketNum = await server.incrementTicketCounter();

  return { ticketNum };
};

module.exports = {
  createTicket,
}
