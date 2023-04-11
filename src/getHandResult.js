const { isRoyalFlush } = require("./isRoyalFlush.js");
const { isStraightFlush } = require("./isStraightFlush");
const { isFullHouse } = require("./isFullHouse");
const { isFlush } = require("./isFlush");
const { isStraight } = require("./isStraight");
const { isThreeOfAKind } = require("./isThreeOfAKind");
const { isTwoPair } = require("./isTwoPair");
const { isPair } = require("./isPair");

const getHighestCardNumber = (hand) => {
  let biggestNumber = 0;
  for (let i = 0; i < hand.length; i++) {
    const card = hand[i];
    const number = parseInt(card.substring(1));
    if (number > biggestNumber) {
      biggestNumber = number;
    }
  }
  return biggestNumber;
};

const getHandResult = (hand) => {
  const result = { highCard: getHighestCardNumber(hand), power: 0 };
  if (isRoyalFlush(hand)) {
    result.power = 10;
    return result;
  }
  if (isStraightFlush(hand)) {
    result.power = 9;
    return result;
  }
  if (isFourOfAKind(hand)) {
    result.power = 8;
    return result;
  }
  if (isFullHouse(hand)) {
    result.power = 7;
    return result;
  }
  if (isFlush(hand)) {
    result.power = 6;
    return result;
  }
  if (isStraight(hand)) {
    result.power = 5;
    return result;
  }
  if (isThreeOfAKind(hand)) {
    result.power = 4;
    return result;
  }
  if (isTwoPair(hand)) {
    result.power = 3;
    return result;
  }
  if (isPair(hand)) {
    result.power = 2;
    return result;
  } else {
    result.power = 1;
    return result;
  }
};

module.exports = { getHandResult };
