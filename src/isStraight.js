const { getCardNumber } = require("./getCardNumber");
const { getSortedHand } = require("./getSortedHand");

const isStraight = (hand) => {
  const sortedHand = getSortedHand(hand);
  const numbers = sortedHand.map((card) => getCardNumber(card));
  return numbers.every((number, index) => {
    if (index === numbers.length - 1) {
      return true;
    }
    return number === numbers[index + 1] - 1;
  });
};

module.exports = { isStraight };
