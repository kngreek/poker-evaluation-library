const { getSortedHand } = require('./getSortedHand');

describe('getSortedHand', () => {
  it('should return the hand in ascending order', () => {
    const hand = ["H13", "H12", "H10", "H11", "H9"];
    const sortedHand = ["H9", "H10", "H11", "H12", "H13"];
    expect(getSortedHand(hand)).toEqual(sortedHand);
  });

  it('should handle duplicate cards and return the hand in ascending order', () => {
    const hand = ["H13", "H12", "H10", "H10", "H11"];
    const sortedHand = ["H10", "H10", "H11", "H12", "H13"];
    expect(getSortedHand(hand)).toEqual(sortedHand);
  });

  it('should handle different suits and return the hand in ascending order', () => {
    const hand = ["C2", "H13", "S10", "H11", "D11"];
    const sortedHand = ["C2", "S10", "D11", "H11", "H13"];
    expect(getSortedHand(hand)).toEqual(sortedHand);
  });
});
