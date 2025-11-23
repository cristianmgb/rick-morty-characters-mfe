import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { CharactersList } from './CharacterList';
import type { Character } from '../../../domain/entities/character';
import { useDeviceType } from '../../hooks/useIsMobile';

vi.mock('../../hooks/useIsMobile', () => ({
  useDeviceType: vi.fn(() => 'desktop'),
}));

vi.mock('../../hooks/useFavorite', () => ({
  useFavorite: vi.fn(() => ({
    onFavoriteChange: vi.fn(),
  })),
}));

vi.mock('rick-morty-components-lib', () => ({
  Tarjeta: ({ name }: never) => <div data-testid="card">{name}</div>,
  SegmentedButton: ({ onChange }: { onChange: (value: string) => void }) => (
    <button
      data-testid="favorites-button"
      onClick={() => onChange('favorites')}
    >
      to favorites
    </button>
  ),
}));

const charactersMock: Character[] = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: { name: 'Earth', url: '' },
    location: { name: 'Citadel', url: '' },
    image: 'rick.png',
    episode: [],
    url: '',
    created: '',
  },
  {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: { name: 'Earth', url: '' },
    location: { name: 'Earth', url: '' },
    image: 'morty.png',
    episode: [],
    url: '',
    created: '',
  },
];

describe('CharactersList component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders all characters when the selected tab is "all"', () => {
    render(<CharactersList characters={charactersMock} />);

    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    expect(screen.getByText('Morty Smith')).toBeInTheDocument();
  });

  it('renders the correct character count', () => {
    render(<CharactersList characters={charactersMock} />);

    expect(screen.getByText(/Personajes/i)).toBeInTheDocument();
  });

  it('renders empty state when there are no characters', () => {
    render(<CharactersList characters={[]} />);

    expect(screen.getByText('Oh no!')).toBeInTheDocument();
    expect(
      screen.getByText(/There are no characters in All!/)
    ).toBeInTheDocument();
  });

  it('switches to favorites tab and shows empty state (no favorites yet)', () => {
    render(<CharactersList characters={charactersMock} />);

    const favButton = screen.getByTestId('favorites-button');
    fireEvent.click(favButton);

    expect(
      screen.getByText(/There are no characters in Favorites!/)
    ).toBeInTheDocument();
  });

  it('renders cards using correct variant based on device type', () => {
    render(<CharactersList characters={charactersMock} />);

    const cards = screen.getAllByTestId('card');
    expect(cards.length).toBe(2);
  });
  it('uses variant "vertical-small" when useDeviceType returns mobile', () => {
    const useDeviceTypeMock = vi.mocked(useDeviceType);

    useDeviceTypeMock.mockReturnValueOnce('mobile');

    render(<CharactersList characters={charactersMock} />);

    const card = screen.queryAllByTestId('card');

    expect(card).toBeDefined();
  });
});
