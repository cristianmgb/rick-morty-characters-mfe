import { create } from 'zustand';
import type { Character } from '../../domain/entities/character';

interface CharactersState {
  characters: Character[];
  loading: boolean;
  setCharacters: (data: Character[]) => void;
  setLoading: (value: boolean) => void;
}

export const useCharactersStore = create<CharactersState>((set) => ({
  characters: [],
  loading: false,

  setCharacters: (data) => set({ characters: data }),
  setLoading: (value) => set({ loading: value }),
}));
