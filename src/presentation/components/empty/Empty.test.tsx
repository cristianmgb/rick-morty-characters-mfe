import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Empty } from './Empty';

describe('Empty component', () => {
  it('renders the title "Oh no!"', () => {
    render(<Empty selectedTab="all" />);

    expect(screen.getByText('Oh no!')).toBeInTheDocument();
  });

  it('shows "All" when selectedTab is "all"', () => {
    render(<Empty selectedTab="all" />);

    expect(
      screen.getByText(/There are no characters in All!/i)
    ).toBeInTheDocument();
  });

  it('shows "Favorites" when selectedTab is "favorites"', () => {
    render(<Empty selectedTab="favorites" />);

    expect(
      screen.getByText(/There are no characters in Favorites!/i)
    ).toBeInTheDocument();
  });

  it('renders both text sections correctly', () => {
    render(<Empty selectedTab="all" />);

    expect(screen.getByText('Oh no!')).toBeInTheDocument();
    expect(
      screen.getByText(/There are no characters in All!/i)
    ).toBeInTheDocument();
  });
});
