import './App.css';
import { ThemeProvider } from '@mui/material';
import { useAllCharacters } from './application/hooks/useAllCharacters';
import { useCharacterByName } from './application/hooks/useCharacterByName';
import { CharactersList } from './presentation/components/character-list/CharacterList';
import { useCharactersStore } from './presentation/sotre/useCharacterStore';
import { theme } from 'rick-morty-components-lib';

function App({ search }: { search?: string }) {
  useAllCharacters();
  useCharacterByName(search || '');
  const { loading, characters } = useCharactersStore();

  return loading ? (
    <div>Loading...</div>
  ) : (
    <ThemeProvider theme={theme}>
      <CharactersList characters={characters} />
    </ThemeProvider>
  );
}

export default App;
