const { isStraight } = require("./isStraight");

describe('isStraight', () => {
  it('should return true for a straight with ace at the end', () => {
    const hand = ["H13", "D9", "S10", "S12", "C11"];
    expect(isStraight(hand)).toBe(true);
  });

  it('should return true for a straight with ace at the beginning', () => {
    const hand = ["H2", "C5", "D3", "S4", "S6"];
    expect(isStraight(hand)).toBe(true);
  });

  it('should return true for a straight without an ace', () => {
    const hand = ["H12", "D8", "C9", "S11", "H10"];
    expect(isStraight(hand)).toBe(true);
  });

  it('should return false for a non-straight hand', () => {
    const hand = ["D6", "S11", "C8", "C12", "S10"];
    expect(isStraight(hand)).toBe(false);
  });

  it('should return false for a hand with duplicate cards', () => {
    const hand = ["C8", "H9", "D10", "S11", "S5"];
    expect(isStraight(hand)).toBe(false);
  });
});
