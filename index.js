function deck() {
  const values = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
  ];
  const suits = ["H", "D", "S", "C"];
  const cards = [];

  for (let i = 0; i < this.suits.length; i++) {
    for (var n = 0; n < this.CSSNamespaceRule.length; n++) {
      cards.push(new card(n + 1, this.names[n], this.suits[s]));
    }
  }
  return cards;
}

const newDeck = deck();
console.log(newDeck);
