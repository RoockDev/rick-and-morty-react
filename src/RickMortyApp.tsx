import { useCharacters } from './rickmorty/hooks/useCharacters';
import { useState } from 'react';
import { SearchBar } from './shared/components/SearchBar';
import type {Character} from './rickmorty/interfaces/character.interface';
import { CharacterDetail } from './rickmorty/components/CharacterDetail';
import { CharacterList } from './rickmorty/components/CharacterList';
import { StatusFilter } from './rickmorty/components/StatusFilter';
import { LoadMoreButton } from './rickmorty/components/LoadMoreButton';


export const RickMortyApp = () => {

    const [searchText, setSearchText] = useState('');
    const [status, setStatus] = useState('');
    //punto 5  personaje seleccionado se guarda en estado para que permanezca visible aunque cambie búsqueda o filtro se re rendirza como no cambia de estado pues es el mismo
    const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
    const { isLoading, hasError, characters, hasNextPage, loadNextPage } = useCharacters(searchText,status);



  return (
    <div>
      <h1>Rick and Morty</h1>

    <SearchBar
    placeholder="Buscar Personaje"
    onQuery={ (query) => setSearchText(query)}
    />

    <StatusFilter
    value={status}
    onChange={(value) => setStatus(value)}
    />

        {selectedCharacter && (
          <CharacterDetail character={selectedCharacter}/>
        )}



      { isLoading && <p>Cargando...</p> }

      { hasError && <p>{ hasError }</p> }

      <CharacterList
        characters={characters}
        onCharacterSelected={(character) => setSelectedCharacter(character)}
      />

     <LoadMoreButton
     disabled={isLoading || !hasNextPage}
     onClick={() => loadNextPage()}
     
     />


    </div>
  );
};
