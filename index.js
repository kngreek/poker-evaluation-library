const suits = ["S", "C", "H", "D"];

let values = [];

for (let i = 1; i <= 13; i++) {
  values.push(i);
}

function crateDeck() {
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
console.log(crateDeck());
