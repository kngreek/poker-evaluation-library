const { getHandResult,isStraight, isFlush } = require("./");


const { isFlush } = require('./isFlush');

describe('isFlush', () => {
  it('should return true for a flush with all hearts', () => {
    const hand = ["H2", "H7", "H10", "H13", "H14"];
    expect(isFlush(hand)).toBe(true);
  });

  it('should return true for a flush with all diamonds', () => {
    const hand = ["D4", "D7", "D9", "D10", "D11"];
    expect(isFlush(hand)).toBe(true);
  });

  it('should return true for a flush with all spades', () => {
    const hand = ["S3", "S5", "S8", "S9", "S13"];
    expect(isFlush(hand)).toBe(true);
  });

  it('should return true for a flush with all clubs', () => {
    const hand = ["C2", "C5", "C6", "C7", "C14"];
    expect(isFlush(hand)).toBe(true);
  });

  it('should return false for a non-flush hand', () => {
    const hand = ["H2", "D7", "S10", "C13", "H14"];
    expect(isFlush(hand)).toBe(false);
  });

  it('should return false for a hand with duplicate cards', () => {
    const hand = ["S2", "C5", "C6", "C7", "C7"];
    expect(isFlush(hand)).toBe(false);
  });
});

