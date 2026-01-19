import { useCharacters } from './rickmorty/hooks/useCharacters';
import { useState } from 'react';
import { SearchBar } from './shared/components/searchBar';

export const RickMortyApp = () => {

    const [searchText, setSearchText] = useState('');
    const [status, setStatus] = useState('');

  const { isLoading, hasError, characters } = useCharacters(searchText,status);



  return (
    <div>
      <h1>Rick and Morty</h1>

    <SearchBar
    placeholder="Buscar Personaje"
    onQuery={ (query) => setSearchText(query)}
    />

    <select
    value= {status}
    onChange= {(event) => setStatus(event.target.value)}
    >
        <option value="">All</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unkown</option>

    </select>


      { isLoading && <p>Cargando...</p> }

      { hasError && <p>{ hasError }</p> }

      
      <ul>
  { characters.map( ( character ) => (
    <li key={ character.id } >
      { character.name } - {character.id}
    </li>
  ) ) }
</ul>

    </div>
  );
};
