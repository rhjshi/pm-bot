const Ticket = require("./../models/ticket");
const ServerController = require("./server");

const util = require("./../util");

const createTicket = async ({
  guildId,
  creatorId,
  assigneeId,
  title,
  description,
  state,
}) => {
  const server = await ServerController.getServer(guildId);
  const number = await server.incrementTicketCounter();

  const ticket = new Ticket({
    guildId,
    number,
    creatorId,
    assigneeId,
    title,
    description,
    state: state || util.StateStrToInt.todo
  });
  
  await ticket.save();

  return ticket;
};

module.exports = {
  createTicket,
}
