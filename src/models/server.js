const mongoose = require("mongoose");

const serverSchema = new mongoose.Schema({
  
  /*
   * Generated guildId from discord for each Server (Guild)
   */
  guildId: {
    type: String,
    required: true,
  },

  /* 
   * Used to track the number of tickets that have ever been
   * created on the server. Only increases -- does not decrement when ticket is deleted
   */
  ticketCounter: {
    type: Number,
    default: 0,
    min: 0,
  },
  
});

/*
 * Increments the ticketCounter on the server and 
 * returns the new resulting count 
 */
serverSchema.methods.incrementTicketCounter = async function() {
  this.ticketCounter += 1;
  await this.save();

  return this.ticketCounter;
}

/*
 * Creates model for collection "Servers"  
 */
module.exports = mongoose.model("Server", serverSchema);
