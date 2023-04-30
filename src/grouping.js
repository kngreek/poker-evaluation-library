const { getCardNumber } = require("./getCardNumber");

const numbers = hand.map(getCardNumber);

numbers.sort(function (a, b) {
  return a - b;
});

const grouping = (numbers) => {
  const groups = numbers.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, new Array(14).fill(0));
  return groups;
};

module.exports = { grouping };
