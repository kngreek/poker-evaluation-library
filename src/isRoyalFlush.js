function isRoyal(hand) {
  if (hand[0][1] === "1") {
    const firstCard = hand.shift();
    hand.push(firstCard.replace("1", "14"));
    return hand;
  } else {
    return hand;
  }
}

const isRoyalFlush = (hand) => isFlush(hand) && isRoyal(hand);

module.exports = { isRoyalFlush };
