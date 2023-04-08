const { getCardNumber } = require('./getCardNumber');

const numbers = hand.map(getCardNumber);

numbers.sort(function (a, b) {
  return a - b;
});

const grouping = (numbers) => {
  const groups = new Array(14).fill(0);
  for (let i = 0; i < numbers.length; i++) {
    groups[numbers[i]]++;
  }
  return groups;
};

module.exports = { grouping };
//   const pairs = groups.filter((group) => group === 2);
//   const three = groups.filter((group) => group === 3);
 
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
// }