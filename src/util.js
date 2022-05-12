const StateStrToInt = {
  todo: 0,
  inProgress: 1,
  completed: 2,
};

const StateIntToStr = [
  "todo",
  "in progress",
  "completed",
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
  StateIntToStr,
  StateStrToInt,
  mention,
}
