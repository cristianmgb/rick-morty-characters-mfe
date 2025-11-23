import type { Character } from '../../domain/entities/character';

const CHARACTER = import.meta.env.VITE_API_URL + '/character';

export async function fetchAllCharacter(): Promise<Character> {
  const res = await fetch(`${CHARACTER}`);
  if (!res.ok) {
    throw new Error('Erroor al obtener los personajes');
  }
  return res.json();
}

export async function fetchCharacterByName(name: string): Promise<Character> {
  const res = await fetch(`${CHARACTER}?name=${name}`);
  if (!res.ok) {
    throw new Error('Error al obtener los personajes por nombre');
  }
  return res.json();
}
