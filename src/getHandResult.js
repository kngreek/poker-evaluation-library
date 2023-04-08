const { isRoyalFlush } = require('./isRoyalFlush.js');
const { isStraightFlush } = require('./isStraightFlush');
const { isFullHouse } = require('./isFullHouse');
const { isFlush } = require('./isFlush');
const { isStraight } = require('./isStraight');
const { isThreeOfAKind } = require('./isThreeOfAKind');
const { isTwoPair } = require('./isTwoPair');
const { isPair } = require('./isPair');


// const isStraightFlush = (hand) => isStraight(hand) && isFlush(hand) ;

// function isRoyal(hand) {
//   if (hand[0][1] === '1') {
//     const firstCard = hand.shift();
//     hand.push(firstCard.replace('1', '14'));
//     return hand;
//   } else {
//     return hand;
//   }
// }
  
// const isRoyalFlush = (hand)=> isFlush(hand) && isRoyal(hand);

const getHighestCardNumber = (hand) =>{
  let biggestNumber = 0;
  for (let i = 0; i < hand.length; i++) {
    const card = hand[i];
    const number = parseInt(card.substring(1));
    if (number > biggestNumber) {
      biggestNumber = number;
    }
  }
  return biggestNumber;
}

const getHandResult = (hand) => {
  const result = { highCard: getHighestCardNumber(hand), power: 0 };
  if (isRoyalFlush(hand)){
    result.power = 10;
    return result;
  }
  if (isStraightFlush(hand)){
    result.power = 9;
    return result ;
  }
  if (isFourOfAKind(hand)){
    result.power = 8;
    return result ;
  }
  if (isFullHouse(hand)){
    result.power = 7;
    return result ;
  }
  if(isFlush(hand)){
    result.power = 6;
    return result ;
  }
  if(isStraight(hand)){
    result.power = 5 ;
    return result;
  }
  if(isThreeOfAKind(hand)){
    result.power = 4 ;
    return result ;
  }
  if(isTwoPair(hand)){
    result.power = 3 ;
    return result ;
  }
  if(isPair(hand)){
    result.power = 2 ;
    return result ;
  }else{
    result.power = 1;
    return result ;
  }
}
  

//   const consecutive = isStraight(hand);
  
//   const numberHand = [];

//   for (let i = 0; i < hand.length; i++) {
//     numberHand[i] = hand[i].slice(0, 1);
//   }
//   const Suits = numberHand;

//   const suitHand = [];

//   for (let i = 0; i < hand.length; i++) {
//     suitHand[i] = hand[i].slice(1);
//   }

//   const numbers = suitHand;

//   numbers.sort(function (a, b) {
//     return a - b;
//   });

//   const groups = [];
//   for (let i = 0; i <= 13; i++) {
//     groups[i] = 0;
//   }
//   for (let i = 0; i < numbers.length; i++) {
//     groups[numbers[i]]++;
//   }
//   const pairs = groups.filter((group) => group === 2);
//   const three = groups.filter((group) => group === 3);
//   power = 1;

//   if (pairs.length === 2) {
//     power = 3;
//   } else if (pairs.length === 1) {
//     power = 2;
//   }

//   if (three.length === 1) {
//     if (groups.includes(2)) {
//       power = 7;
//     } else power = 4;
//   }
//   if (groups.includes(4)) {
//     power = 8;
//   }
//   if (power <= 6) {
//     const powerSuit = 0;
//     const groupS = Suits.filter((group) => group === "S");
//     const groupC = Suits.filter((group) => group === "C");
//     const groupH = Suits.filter((group) => group === "H");
//     const groupD = Suits.filter((group) => group === "D");

//     if (groupS.length === 5) {
//       power = 6;
//     } else if (groupC.length === 5) {
//       power = 6;
//     } else if (groupH.length === 5) {
//       power = 6;
//     } else if (groupD.length === 5) {
//       power = 6;
//     } else {
//       power = power;
//     }
//   }

//   if (consecutive && numbers[4] == 14) { // check for Royal Flush
//     power = 10;
//   } else if (power <= 1 && consecutive) {
//     power = 5;
//   } else if (power === 6 && consecutive) {
//     power = 9;
//   }
  
  

//   return result;
// };

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