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

function isStraight(hand) {
  const numberHand = []; //ftiaxnei array

  for (let i = 0; i < hand.length; i++) {
    numberHand[i] = hand[i].slice(0, 1); //xwrizei ari8moyw apo noymera
  }
  const Suits = numberHand;
  console.log(numberHand);
  const suitHand = [];

  for (let i = 0; i < hand.length; i++) {
    suitHand[i] = hand[i].slice(1);
  }
  console.log("e", suitHand);//kai ayto xwrizei ari8moyw apo noymera

  const numbers = suitHand;//krataw toy ari8moys

  numbers.sort(function (a, b) {//toys kanw sort
    return a - b;
  });
  console.log(numbers);
  let consecutive = false;//setarw false ws basic apanthsh opote na allaksei mono an isxyei to parakatw 
  for (let i = 0; i < numbers.length - 1; i++) {//elegxei an einai consecutive
    if (numbers[i + 1] - numbers[i] === 1) {
      return true;
    }
  }

  return consecutive;
}


function getHandResult(hand, power, consecutive) {
  const numberHand = [];

  for (let i = 0; i < hand.length; i++) {
    numberHand[i] = hand[i].slice(0, 1);
  }
  const Suits = numberHand;

  const suitHand = [];

  for (let i = 0; i < hand.length; i++) {
    suitHand[i] = hand[i].slice(1);
  }

  const numbers = suitHand;

  numbers.sort(function (a, b) {
    return a - b;
  });

  const groups = [];
  for (let i = 0; i <= 13; i++) {
    groups[i] = 0;
  }
  for (let i = 0; i < numbers.length; i++) {
    groups[numbers[i]]++;
  }
  const pairs = groups.filter((group) => group === 2);
  const three = groups.filter((group) => group === 3);
  power = 1;

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

  if (power <= 1 && consecutive === true) {
    power = 5;
  } else if (power === 6 && consecutive === true) {
    power = 9;
  }
  if (power === 9 && numbers[0] === 9) {
    power = 10;
  } else {
    power = power;
  }

  let result = { highCard: parseInt(numbers[4]), power: power };

  return result;
}
let result1 = getHandResult(hand, power);
let result2 = getHandResult(hand2, power);

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
const finalResult = "";
function getResultSentence(name, handName) {
  return `${name} is the winner with '${handName}'`;
}

if (result1.power > result2.power) {
  finalResult ===
    getResultSentence("Hand 1", getHandNameFromPower(result1.power));
} else if (result1.power < result2.power) {
  finalResult ===
    getResultSentence("Hand 2", getHandNameFromPower(result2.power));
} else if (
  result1.power != 0 &&
  result1.power != 0 &&
  result1.power === result2.power
) {
  finalResult === "Its a tie !";
} else if (result1.power === 1 && result2.power === 1) {
  if (result1.highCard > result2.highCard) {
    finalResult === "Hand 1 is the winner with a high card";
  } else if (result1.highCard < result2.highCard) {
    finalResult === "Hand 2 is the winner with a high card";
  }
  //return finalResult;
}

module.exports = { getHandResult };
