const isFlush = (hand) => {
  const suits = hand.map((card) => card.slice(0, 1));
  return ["S", "C", "H", "D"].some((suit) =>
    suits.every((cardSuit) => cardSuit === suit)
  );
};

module.exports = { isFlush };
