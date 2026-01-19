import { useCharacters } from './rickmorty/hooks/useCharacters';

export const RickMortyApp = () => {

  const { isLoading, hasError, characters } = useCharacters();

  if ( isLoading ) {
    return (
      <div>
        <h1>Rick and Morty</h1>
        <p>Cargando...</p>
      </div>
    );
  }

  if ( hasError ) {
    return (
      <div>
        <h1>Rick and Morty</h1>
        <p>{ hasError }</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Rick and Morty</h1>

      <ul>
        { characters.map( ( character ) => (
          <li key={ character.id }>
            { character.name }
          </li>
        ) ) }
      </ul>
    </div>
  );
};
