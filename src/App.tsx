import { useAllCharacters } from './application/hooks/useAllCharacters';
import { useCharacterByName } from './application/hooks/useCharacterByName';
import { useCharactersStore } from './presentation/sotre/useCharacterStore';

function App({ search }: { search?: string }) {
  useAllCharacters();
  useCharacterByName(search || '');
  const { loading, characters } = useCharactersStore();

  return (
    <>
      <h1>Characters</h1>
      <p>Search query: {search}</p>
      {loading && <p>Loading...</p>}
      {!loading && <p>Data loaded!</p>}

      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            {character.name} - {character.status} - {character.species}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
