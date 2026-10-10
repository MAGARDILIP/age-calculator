import { render, screen } from '@testing-library/react';
import AgeResult from '../src/components/AgeResult';
import { describe, it, expect } from 'vitest';

describe('AgeResult Component', () => {
  it('renders correctly with given years, months, and days', () => {
    render(<AgeResult years={25} months={6} days={15} />);
    
    expect(screen.getByText('25')).toBeInTheDocument();
    expect(screen.getByText('Years')).toBeInTheDocument();
    expect(screen.getByText('6')).toBeInTheDocument();
    expect(screen.getByText('Months')).toBeInTheDocument();
    expect(screen.getByText('15')).toBeInTheDocument();
    expect(screen.getByText('Days')).toBeInTheDocument();
  });
});
