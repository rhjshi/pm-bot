const TicketStates = {
  todo: 0,
  inProgress: 1,
  completed: 2,
};

const TicketStateToStr = [
  "Todo",
  "In progress",
  "Completed",
];

/**
 * returns String for discord formatted mention
 * if discId is a falsy value, will return empty string 
 */
const mention = discId => {
  if (!discId) return "";

  return `<@${discId}>`;
};

module.exports = {
  TicketStates,
  TicketStateToStr,
  mention,
}
