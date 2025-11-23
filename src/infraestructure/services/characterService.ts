import { useQuery } from '@tanstack/react-query';
import { fetchAllCharacter, fetchCharacterByName } from '../../shared/api/api';

export function useGetAllCharacter() {
  return useQuery({
    queryKey: ['all-character'],
    queryFn: fetchAllCharacter,
  });
}

export function useGetCharacterByName(name: string) {
  return useQuery({
    queryKey: ['character-by-name', name],
    queryFn: () => fetchCharacterByName(name),
  });
}
