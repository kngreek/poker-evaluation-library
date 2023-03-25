const { isStraight } = require('./isStraight');
const { isFlush } = require('./isFlush');

const getHandResult = (hand) => {
  let power = 0;
  const numberHand = [];

  for (let i = 0; i < hand.length; i++) {
    numberHand[i] = hand[i].slice(0, 1);
  }
  const Suits = numberHand;

  const suitHand = [];

  for (let i = 0; i < hand.length; i++) {
    suitHand[i] = hand[i].slice(1);
  }

  const numbers = suitHand;

  numbers.sort(function (a, b) {
    return a - b;
  });

  const groups = [];
  for (let i = 0; i <= 13; i++) {
    groups[i] = 0;
  }
  for (let i = 0; i < numbers.length; i++) {
    groups[numbers[i]]++;
  }
  const pairs = groups.filter((group) => group === 2);
  const three = groups.filter((group) => group === 3);
  power = 1;

  if (pairs.length === 2) {
    power = 3;
  } else if (pairs.length === 1) {
    power = 2;
  }

  if (three.length === 1) {
    if (groups.includes(2)) {
      power = 7;
    } else power = 4;
  }
  if (groups.includes(4)) {
    power = 8;
  }
  if (power <= 6) {
    const powerSuit = 0;
    const groupS = Suits.filter((group) => group === "S");
    const groupC = Suits.filter((group) => group === "C");
    const groupH = Suits.filter((group) => group === "H");
    const groupD = Suits.filter((group) => group === "D");

    if (groupS.length === 5) {
      power = 6;
    } else if (groupC.length === 5) {
      power = 6;
    } else if (groupH.length === 5) {
      power = 6;
    } else if (groupD.length === 5) {
      power = 6;
    } else {
      power = power;
    }
  }

  if (power <= 1 && consecutive === true) {
    power = 5;
  } else if (power === 6 && consecutive === true) {
    power = 9;
  }
  if (power === 9 && numbers[0] === 9) {
    power = 10;
  } else {
    power = power;
  }

  let result = { highCard: parseInt(numbers[4]), power: power };

  return result;
};

// const getHighCard = (hand) => "H14";
// const isStraightFlush = (hand) => isStraight(hand) && isFlush(hand);
// const isRoyalFlush = (hand) =>  /* code here */;

// const getHandResult = (hand) => {
//   //...
//   if (isStraightFlush(hand)) {  //   EDW KALEI TO FUNCTION MESA SE ENA ALLO KAI EPISTREFEI TRUE/FALSE
//     power = 8
//   } else if (isRoyalFlush(hand)) {
//     power = 7
//   }
//   // ...

//   return { highCard: getHighCard(hand), power};
// }

module.exports = { getHandResult };