const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({

  /*
   * Generated guildId from discord for each Server (Guild)
   */
  guildId: {
    type: String,
    required: true,
  },

  /*
   * Ticket number unique to the server
   */
  number: {
    type: Number,
    min: 1,
    required: true,
  },

  creatorId: {
    type: String,
    required: true, 
  },

  assigneeId: String,

  title: {
    type: String,
    required: true,
  },

  description: {
    type: String, 
    required: true
  },

  state: {
    type: Number,
    default: 0,
    min: 0,
    max: 2,
  },

});

/**
 * Creates model for collection "tickets"
 */
module.exports = mongoose.model("Ticket", ticketSchema);
