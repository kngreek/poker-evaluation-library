const { getHandResult } = require("./getHandResult");

const HAND_TYPE = Object.freeze({
  ROYAL_FLUSH: 10,
  STRAIGHT_FLUSH: 9,
  FOUR_OF_A_KIND: 8,
  FULL_HOUSE: 7,
  FLUSH: 6,
  STRAIGHT: 5,
  THREE_OF_A_KIND: 4,
  TWO_PAIR: 3,
  ONE_PAIR: 2,
  HIGH_CARD: 1,
});

describe("getHandResult", () => {
  it('should return "Royal Flush" related result and 14 as highCard', () => {
    // GIVEN 
    const hand = ["H14", "H12", "H10", "H13", "H11"];

    // WHEN
    const result = getHandResult(hand);

    // THEN
    expect(result).toEqual({
      power: HAND_TYPE.ROYAL_FLUSH,
      highCard: 14,
    });
  });

  it('should return "Straight Flush" related result and 14 as highCard', () => {
    // GIVEN
    const hand = ["H14", "H2", "H4", "H3", "H5"];

    // WHEN
    const result = getHandResult(hand);

    // THEN
    expect(result).toEqual({
      power: HAND_TYPE.STRAIGHT_FLUSH,
      highCard: 14,
    });
  });

  it('should return "Four of a kind" related result and 14 as highCard', () => {
    // GIVEN
    const hand = ["H14", "C14", "D14", "S14", "H5"];

    // WHEN
    const result = getHandResult(hand);

    // THEN
    expect(result).toEqual({
      power: HAND_TYPE.FOUR_OF_A_KIND,
      highCard: 14,
    });
  });

  it('should return "Full House" related result and 14 as highCard', () => {
    // GIVEN
    const hand = ["H14", "C14", "D14", "H13", "D13"];

    // WHEN
    const result = getHandResult(hand);

    // THEN
    expect(result).toEqual({
      power: HAND_TYPE.FULL_HOUSE,
      highCard: 14,
    });
  });

  it('should return "Flush" related result and 8 as highCard', () => {
    // GIVEN
    const hand = ["H8", "H3", "H5", "H7", "H4"];

    // WHEN
    const result = getHandResult(hand);

    // THEN
    expect(result).toEqual({
      power: HAND_TYPE.FLUSH,
      highCard: 8,
    });
  });

  it('should return "Straight" related result and 8 as highCard', () => {
    // GIVEN
    const hand = ["H8", "H6", "H5", "H7", "C4"];

    // WHEN
    const result = getHandResult(hand);

    // THEN
    expect(result).toEqual({
      power: HAND_TYPE.STRAIGHT,
      highCard: 8,
    });
  });

  it('should return "Three of a kind" related result and 10 as highCard', () => {
    // GIVEN
    const hand = ["H10", "H6", "D10", "C10", "H4"];

    // WHEN
    const result = getHandResult(hand);

    // THEN
    expect(result).toEqual({
      power: HAND_TYPE.THREE_OF_A_KIND,
      highCard: 10,
    });
  });

  it('should return "Two Pair" related result and 10 as highCard', () => {
    // GIVEN
    const hand = ["H10", "H6", "D10", "C6", "H4"];

    // WHEN
    const result = getHandResult(hand);

    // THEN
    expect(result).toEqual({
      power: HAND_TYPE.TWO_PAIR,
      highCard: 10,
    });
  });

  it('should return "One Pair" related result and 10 as highCard', () => {
    // GIVEN
    const hand = ["H10", "H6", "D10", "C5", "H4"];

    // WHEN
    const result = getHandResult(hand);

    // THEN
    expect(result).toEqual({
      power: HAND_TYPE.ONE_PAIR,
      highCard: 10,
    });
  });

  it('should return "High Card" related result and 13 as highCard', () => {
    // GIVEN
    const hand = ["H10", "C13", "D9", "C5", "H4"];

    // WHEN
    const result = getHandResult(hand);

    // THEN
    expect(result).toEqual({
      power: HAND_TYPE.HIGH_CARD,
      highCard: 13,
    });
  });
});