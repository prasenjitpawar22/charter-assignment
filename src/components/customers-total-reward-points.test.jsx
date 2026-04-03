import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CustomersTotalRewardPoints } from './customers-total-reward-points';

describe('CustomersTotalRewardPoints', () => {
  it('renders the component with no data', () => {
    render(<CustomersTotalRewardPoints TotalRewardPoints={{}} />);
    expect(screen.getByText("Total Customer's Rewards")).toBeInTheDocument();
    expect(screen.getByText('No records found.')).toBeInTheDocument();
  });

  it('renders the component with data', () => {
    const mockData = {
      1: { name: 'John Doe', totalPoints: 150 },
      2: { name: 'Jane Smith', totalPoints: 200 },
    };
    render(<CustomersTotalRewardPoints TotalRewardPoints={mockData} />);
    expect(screen.getByText("Total Customer's Rewards")).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('150')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('200')).toBeInTheDocument();
  });
});