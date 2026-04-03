import { describe, it, expect } from 'vitest';
import { getRewardPoints } from './functions';

describe('getRewardPoints', () => {
  it('returns 0 points for sales <= 50', () => {
    expect(getRewardPoints(50)).toBe(0);
    expect(getRewardPoints(40)).toBe(0);
  });

  it('returns sales - 50 points for sales > 50 and <= 100', () => {
    expect(getRewardPoints(60)).toBe(10);
    expect(getRewardPoints(100)).toBe(50);
  });

  it('returns 50 + 2*(sales - 100) points for sales > 100', () => {
    expect(getRewardPoints(101)).toBe(52);
    expect(getRewardPoints(120)).toBe(90);
  });
});