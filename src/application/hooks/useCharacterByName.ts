import { useEffect } from 'react';
import { useGetCharacterByName } from '../../infraestructure/services/characterService';
import { useCharactersStore } from '../../presentation/sotre/useCharacterStore';

export const useCharacterByName = (name: string) => {
  const { setCharacters, setLoading } = useCharactersStore();
  const { data, isLoading } = useGetCharacterByName(name);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading, setLoading]);

  useEffect(() => {
    if (data) {
      setCharacters(data);
    }
  }, [data, setCharacters]);
};
