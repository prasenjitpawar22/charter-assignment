import { describe, it, expect } from 'vitest';
import { filterLastXMonths } from './date-utils';

describe('filterLastXMonths', () => {
  const mockData = [
    { orderDate: '01/01/2026', customerId: 1 },
    { orderDate: '01/02/2026', customerId: 2 },
    { orderDate: '01/03/2026', customerId: 3 },
    { orderDate: '01/04/2026', customerId: 4 },
    { orderDate: '01/12/2025', customerId: 5 },
  ];

  it('returns all data when months is 0', () => {
    const result = filterLastXMonths(mockData, 0);
    expect(result).toEqual(mockData);
  });

  it('filters data for last 3 months', () => {
    const result = filterLastXMonths(mockData, 3);
    expect(result.length).toEqual(3);
  });

  it('filters data for last 6 months', () => {
    const result = filterLastXMonths(mockData, 1);
    expect(result.length).toEqual(1);
  });
});