const suits = ["S", "C", "H", "D"];

let values = [];

for (let i = 1; i <= 13; i++) {
  values.push(i);
}

function createDeck() {
  const deck = [];
  for (let s = 0; s < suits.length; s++) {
    for (let v = 0; v < values.length; v++) {
      const value = values[v];
      const suit = suits[s];
      deck.push(value + suit);
    }
  }

  return deck;
}

function shuffleDeck() {
  const deck = createDeck();
  for (let i = deck.length; i > 0; i--) {
    const g = Math.floor(Math.random() * i);
    const t = deck[i];
    deck[i] = deck[g];
    deck[g] = t;
  }
  return deck;
}

console.log(shuffleDeck());

function draw(deck) {}
