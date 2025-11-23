import type { Character } from '../../domain/entities/character';

export type UseFavoriteParams = {
  characters: Character[];
  favorites: Character[];
  setFavorites: React.Dispatch<React.SetStateAction<Character[]>>;
};

export const useFavorite = ({
  characters,
  favorites,
  setFavorites,
}: UseFavoriteParams) => {
  const onFavoriteChange = (id: number | string, isFavorite: boolean) => {
    if (!characters || !setFavorites) return;

    if (isFavorite) {
      const selectedChar = characters.find((char) => char.id === id);
      if (selectedChar) {
        const updated = [...(favorites || []), selectedChar];
        setFavorites(updated);
      }
    } else {
      const updated = (favorites || []).filter((f) => f.id !== id);
      setFavorites(updated);
    }
  };

  return {
    onFavoriteChange,
  };
};
