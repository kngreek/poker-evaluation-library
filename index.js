const suits = ["S", "C", "H", "D"];

const values = [];
let power = 0;

for (let i = 1; i <= 13; i++) {
  values.push(i);
}

function createDeck() {
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

  shuffledDeck = shuffledDeck.splice(0, 5);
  return hand;
}

const hand = draw(shuffledDeck);
const hand2 = draw(shuffledDeck);

console.log("hand", hand);
console.log("hand2", hand2);

function getHandResult(hand, power) {
  numberHand = [];

  for (let i = 0; i < hand.length; i++) {
    if ((hand[i].length = 3)) {
      numberHand[i] = hand[i].slice(0, 1);
    } else {
      numberhand[i] = hand[i].slice(0, 1);
    }
  }
  const Suits = numberHand;
  suitHand = [];

  for (let i = 0; i < hand.length; i++) {
    if ((hand[i].length = 3)) {
      suitHand[i] = hand[i].slice(1);
    } else {
      suitHand[i] = hand[i].slice(1);
    }
  }
  const Numbers = suitHand;
  const groups = [];
  for (let i = 0; i <= 13; i++) {
    groups[i] = 0;
  }
  for (let i = 0; i < Numbers.length; i++) {
    groups[Numbers[i]]++;
  }
  const pairs = groups.filter((group) => group === 2);
  const three = groups.filter((group) => group === 3);
  power = 0;

  if (pairs.length === 2) {
    power = 3;
  } else if (pairs.length === 1) {
    power = 2;
  }

  if (three.length === 1) {
    if (groups.includes(2)) {
      power = 7;
    } else power = 4;
  }
  if (groups.includes(4)) {
    power = 8;
  }
  if (power <= 6) {
    const powerSuit = 0;
    const groupS = Suits.filter((group) => group === "S");
    const groupC = Suits.filter((group) => group === "C");
    const groupH = Suits.filter((group) => group === "H");
    const groupD = Suits.filter((group) => group === "D");

    if (groupS.length === 5) {
      power = 6;
    } else if (groupC.length === 5) {
      power = 6;
    } else if (groupH.length === 5) {
      power = 6;
    } else if (groupD.length === 5) {
      power = 6;
    } else {
      power = power;
    }
  }
  Numbers.sort(function (a, b) {
    return a - b;
  });
  let consecutive = true;
  for (let i = 1; i < Numbers.length; i++) {
    const areConsecutive = Numbers[i] === Numbers[i - 1] + 1;
    if (!areConsecutive) {
      consecutive = false;
    }
  }
  if (power === 0 && consecutive === true) {
    power = 5;
  } else if (power === 6 && consecutive === true) {
    power = 9;
  }
  if (power === 9 && Numbers[0] === 9) {
    power = 10;
  } else {
    power = power;
  }

  let result = { highCard: Numbers[4], power: power };

  return result;
}
let result1 = getHandResult(hand, power);
let result2 = getHandResult(hand2, power);
console.log(result1);
console.log(result2);

const getHandNameFromPower = (power) => {
  const HAND_NAMES = {
    2: "pair",
    3: "two pairs",
    4: "three of a kind",
    5: "straight",
    6: "flush",
    7: "full house",
    8: "four of a kind",
    9: "straight flush",
    10: "royal flush",
  };
  return HAND_NAMES[power];
};

function getResultSentence(name, handName) {
  return `${name} is the winner with '${handName}'`;
}
if (result1.power > result2.power) {
  console.log(getResultSentence("Hand 1", getHandNameFromPower(result1.power)));
} else if (result1.power < result2.power) {
  console.log(getResultSentence("Hand 2", getHandNameFromPower(result2.power)));
} else if (
  result1.power != 0 &&
  result1.power != 0 &&
  result1.power === result2.power
) {
  console.log("Its a tie !");
} else if (result1.power === 0 && result2.power === 0) {
  if (result1.highCard > result2.highCard) {
    console.log("Hand 1 is the winner with a high card");
  } else if (result1.highCard < result2.highCard) {
    console.log("Hand 2 is the winner with a high card");
  }
}
