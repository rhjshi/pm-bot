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
    state: state || util.TicketStates.todo
  });
  
  await ticket.save();

  return ticket;
};

const getTickets = (guildId) =>
  Ticket.find({
      guildId
  }).exec();

const getTicketByNumber = (guildId, number) =>
  Ticket.findOne({
      guildId, 
      number
  }).exec();

const getTicketsByAssigneeId = (guildId, assigneeId) =>
  Ticket.find({
      guildId, 
      assigneeId
  }).exec();

const updateTicket = (guildId, number, updates) =>
  Ticket.findOneAndUpdate({
    guildId, 
    number
  }, updates).exec();

const deleteTicket = (guildId, number) => 
  Ticket.findOneAndDelete({
    guildId, 
    number
  }).exec();

module.exports = {
  createTicket, getTickets, getTicketByNumber, getTicketsByAssigneeId, updateTicket, deleteTicket
}
