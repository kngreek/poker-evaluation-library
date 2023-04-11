const createDeck = () => {
  const suits = ["S", "C", "H", "D"];
  const values = Array.from({ length: 13 }, (_, i) => i + 1);
  const deck = suits.reduce(
    (acc, suit) => [...acc, ...values.map((value) => suit + value)],
    []
  );
  return deck;
};

const shuffleDeck = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const g = Math.floor(Math.random() * i);
    const t = deck[i];
    deck[i] = deck[g];
    deck[g] = t;
  }
  return deck;
};

const createShuffledDeck = () => shuffleDeck(createDeck());

module.exports = { createDeck, shuffleDeck, createShuffledDeck };
