const { getSortedHand } = require('./getSortedHand');
const isFlush = (hand) => {
    let reply =false ;
    hand=getSortedHand(hand);
  const suitHand = [];
  for (let i = 0; i < hand.length; i++) {
    suitHand[i] = hand[i].slice(1);
  }
  const numbers = suitHand;

  let consecutive = false;
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i + 1] - numbers[i] === 1) {
      reply= true;
    }else reply= false ;
  }
return reply;
}

module.exports = { isStraight };