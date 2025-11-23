import { useEffect } from 'react';
import { useGetAllCharacter } from '../../infraestructure/services/characterService';
import { useCharactersStore } from '../../presentation/sotre/useCharacterStore';

export const useAllCharacters = () => {
  const { setCharacters, setLoading } = useCharactersStore();
  const { data, isLoading } = useGetAllCharacter();

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading, setLoading]);

  useEffect(() => {
    if (data) {
      setCharacters(data);
    }
  }, [data, setCharacters]);
};
