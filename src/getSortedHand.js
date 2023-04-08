const { getCardNumber } = require('./getCardNumber'); 

const getSortedHand = (hand) =>
  [...hand].sort((cardA, cardB) => getCardNumber(cardA) - getCardNumber(cardB));

module.exports = { getSortedHand };
