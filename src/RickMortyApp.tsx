import { useCharacters } from "./rickmorty/hooks/useCharacters";
import { useRickMortyApp } from './rickmorty/hooks/useRickMortyApp';
import { SearchBar } from "./shared/components/SearchBar";
import { CharacterDetail } from "./rickmorty/components/CharacterDetail";
import { CharacterList } from "./rickmorty/components/CharacterList";
import { StatusFilter } from "./rickmorty/components/StatusFilter";
import { LoadMoreButton } from "./rickmorty/components/LoadMoreButton";
import { CustomHeader } from "./rickmorty/components/CustomHeader";

export const RickMortyApp = () => {
  
  const {searchText,status,selectedCharacter,handleSearch,handleStatusChange,handleCharacterSelected} = useRickMortyApp();
  const { isLoading, hasError, characters, hasNextPage, loadNextPage } =
    useCharacters(searchText, status);

  return (
    <>
      <CustomHeader
        title="Rick and Morty"
        description="Busca Personajes de Rick and Morty"
      />

      <SearchBar
        placeholder="Buscar Personaje"
        onQuery={handleSearch}
      />

      <StatusFilter value={status} onChange={handleStatusChange} />

      {selectedCharacter && <CharacterDetail character={selectedCharacter} />}

      {isLoading && <p>Cargando...</p>}

      {hasError && <p>{hasError}</p>}

      <CharacterList
        characters={characters}
        onCharacterSelected={handleCharacterSelected}
      />

      <LoadMoreButton
        disabled={isLoading || !hasNextPage}
        onClick={() => loadNextPage()}
      />
    </>
  );
};
