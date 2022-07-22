const suits = ["S", "C", "H", "D"];

const values = [];

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
const deck = createDeck();

function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const g = Math.floor(Math.random() * i);
    const t = deck[i];
    deck[i] = deck[g];
    deck[g] = t;
  }
  return deck;
}
const shuffledDeck = shuffleDeck(deck);

function draw(shuffledDeck) {
  let hand = [];
  for (let i = 0; i < 5; i++) {
    const temporary = deck[i];
    deck[i] = hand[i];
    hand[i] = temporary;
  }

  shuffledDeck.splice(0, 5);
  return hand;
}
const hand = draw(shuffledDeck);
console.log(shuffledDeck);
console.log(draw(shuffledDeck));
console.log(shuffledDeck);
function numberHand(hand) {
  const numberOfHand = [];
  for (i = 0; i < 5; i++) {
    numberOfHand[i] = hand[i].replace(/\D/g, "");
  }
  return numberOfHand;
}
const numberOfHand = numberHand(hand);
console.log(numberHand(hand));

function suitHand(hand) {
  const suitsOfHand = [];
  for (i = 0; i < 5; i++) {
    suitsOfHand[i] = hand[i].replace(/[0-9]/g, "");
  }
  return suitsOfHand;
}
const suitsOfHand = suitHand(hand);
console.log(suitHand(hand));

let power = 0;
function highCard(numberHand, power) {
  for (i = 0; i < 5; i++) {
    if (numberHand[i] > 10) {
      power = 1;
    }
  }
  return power;
}
console.log(highCard(numberHand, power));

function pair(numberHand) {
  const count = {};

  numberHand.forEach((element) => {
    count[element] = (count[element] || 0) + 1;
  });
  return count;
}
console.log(pair(numberHand));
