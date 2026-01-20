import { useCharacters } from './rickmorty/hooks/useCharacters';
import { useState } from 'react';
import { SearchBar } from './shared/components/SearchBar';
import type {Character} from './rickmorty/interfaces/character.interface';
import { CharacterDetail } from './rickmorty/components/CharacterDetail';


export const RickMortyApp = () => {

    const [searchText, setSearchText] = useState('');
    const [status, setStatus] = useState('');
    const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
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

        {selectedCharacter && (
          <CharacterDetail character={selectedCharacter}/>
        )}



      { isLoading && <p>Cargando...</p> }

      { hasError && <p>{ hasError }</p> }

       <ul>
        { characters.map( ( character ) => (
          <li
            key={ character.id }
            onClick={ () => setSelectedCharacter( character ) }
            style={{ cursor: 'pointer' }}
          >
            { character.name } - { character.id }
          </li>
        ) ) }
      </ul>


    </div>
  );
};
