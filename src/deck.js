const createDeck = () => {
  const suits = ["S", "C", "H", "D"];
  const values = [];
  for (let i = 1; i <= 13; i++) {
    values.push(i);
  }
  const deck = [];
  for (let s = 0; s < suits.length; s++) {
    for (let v = 0; v < values.length; v++) {
      const value = values[v];
      const suit = suits[s];

      deck.push(suit + value);
    }
  }

  return deck;
}

/** Should return a copy of the deck shuffled */
const shuffleDeck = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const g = Math.floor(Math.random() * i);
    const t = deck[i];
    deck[i] = deck[g];
    deck[g] = t;
  }
  return deck;
}

const createSuffledDeck = () => shuffleDeck(createDeck());

module.exports = { createDeck, shuffleDeck, createSuffledDeck }