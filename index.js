const suits = ["S", "C", "H", "D"];

let values = [];

for (let i = 0; i <= 13; i++) {
  values.push(i);
}
values.forEach((e) => console.log(e));

function getDeck() {
  let deck = new Array();

  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
      let card = { Value: values[x], Suit: suits[i] };
      deck.push(card);
    }
  }
}
