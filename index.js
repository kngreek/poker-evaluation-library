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

function numSplit(hand) {
  numberHand = [];

  for (let i = 0; i < hand.length; i++) {
    if ((hand[i].length = 3)) {
      numberHand[i] = hand[i].slice(0, 1);
    } else {
      numberhand[i] = hand[i].slice(0, 1);
    }
  }
  return numberHand;
}
const Suits = numSplit(hand);
const Suits2 = numSplit(hand2);

function suitSplit(hand) {
  suitHand = [];

  for (let i = 0; i < hand.length; i++) {
    if ((hand[i].length = 3)) {
      suitHand[i] = hand[i].slice(1);
    } else {
      suitHand[i] = hand[i].slice(1);
    }
  }
  return suitHand;
}
const Numbers = suitSplit(hand, power);
const Numbers2 = suitSplit(hand2, power);

function groupingNum(Numbers) {
  const groups = [];
  for (let i = 0; i <= 13; i++) {
    groups[i] = 0;
  }
  for (let i = 0; i < Numbers.length; i++) {
    groups[Numbers[i]]++;
  }
  return groups;
}
const groups = groupingNum(Numbers);
const groups2 = groupingNum(Numbers2);

function pair(groups, power) {
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

  return power;
}
power = pair(groups, power);
power2 = pair(groups2, power);

function groupingColour(Suits, power) {
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
  return power;
}
power = groupingColour(Suits, power);
power2 = groupingColour(Suits2, power2);

Numbers.sort(function (a, b) {
  return a - b;
});
Numbers2.sort(function (a, b) {
  return a - b;
});

function areConsecutiveNumbers(numbers) {
  for (let i = 1; i < numbers.length; i++) {
    const areConsecutive = numbers[i] === numbers[i - 1] + 1;
    if (!areConsecutive) {
      return false;
    }
  }
  return true;
}

const consecutive = areConsecutiveNumbers(Numbers);
const consecutive2 = areConsecutiveNumbers(Numbers2);
function last(consecutive, power) {
  if (power === 0 && consecutive === true) {
    power = 5;
  } else if (power === 6 && consecutive === true) {
    power = 9;
  }
  return power;
}
power = last(consecutive, power);
power2 = last(consecutive2, power2);
function final(Numbers, power) {
  if (power === 9 && Numbers[0] === 9) {
    power = 10;
  } else {
    power = power;
  }
  return power;
}
power = final(Numbers, power);
power2 = final(Numbers2, power2);

function compare(Numbers, Numbers2, power, power2) {
  let result = "";
  if (power === 0 && power2 === 0) {
    if (Numbers[4] > Numbers2[4]) {
      result = "Hand 1 is the winner due to high card !";
    } else if (Numbers[4] < Numbers2[4]) {
      result = "Hand 2 is the winner due to high card !";
    } else if ((Numbers[4] = Numbers2[4])) {
      result = "Its a tie !";
    }
  } else if (power > power2) {
    if (power === 2) {
      result = "Hand 1 its the winner due to 'pair'";
    } else if (power === 3) {
      result = "Hand 1 its the winner due to 'two pairs'";
    } else if (power === 4) {
      result = "Hand 1 its the winner due to 'three of a kind'";
    } else if (power === 5) {
      result = "Hand 1 its the winner due to 'straight'";
    } else if (power === 6) {
      result = "Hand 1 its the winner due to 'flush'";
    } else if (power === 7) {
      result = "Hand 1 its the winner due to 'full house'";
    } else if (power === 8) {
      result = "Hand 1 its the winner due to 'four of a kind'";
    } else if (power === 9) {
      result = "Hand 1 its the winner due to 'straight flush'";
    } else if (power === 10) {
      result = "Hand 1 its the winner due to 'royal flush'";
    }
  } else if (power < power2) {
    if (power2 === 2) {
      result = "Hand 2 its the winner due to 'pair'";
    } else if (power2 === 3) {
      result = "Hand 2 its the winner due to 'two pairs'";
    } else if (power2 === 4) {
      result = "Hand 2 its the winner due to 'three of a kind'";
    } else if (power2 === 5) {
      result = "Hand 2 its the winner due to 'straight'";
    } else if (power2 === 6) {
      result = "Hand 2 its the winner due to 'flush'";
    } else if (power2 === 7) {
      result = "Hand 2 its the winner due to 'full house'";
    } else if (power2 === 8) {
      result = "Hand 2 its the winner due to 'four of a kind'";
    } else if (power2 === 9) {
      result = "Hand 2 its the winner due to 'straight flush'";
    } else if (power2 === 10) {
      result = "Hand 2 its the winner due to 'royal flush'";
    }
  } else if (power === power2) {
    result = "Its a tie !";
  }

  return result;
}
console.log(compare(Numbers, Numbers2, power, power2));
