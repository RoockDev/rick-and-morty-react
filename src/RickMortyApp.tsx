import { useCharacters } from "./rickmorty/hooks/useCharacters";
import { useRickMortyApp } from "./rickmorty/hooks/useRickMortyApp";
import { SearchBar } from "./shared/components/SearchBar";
import { CharacterDetail } from "./rickmorty/components/CharacterDetail";
import { CharacterList } from "./rickmorty/components/CharacterList";
import { StatusFilter } from "./rickmorty/components/StatusFilter";
import { LoadMoreButton } from "./rickmorty/components/LoadMoreButton";
import { CustomHeader } from "./rickmorty/components/CustomHeader";

export const RickMortyApp = () => {
  const {
    searchText,
    status,
    selectedCharacter,
    handleSearch,
    handleStatusChange,
    handleCharacterSelected,
  } = useRickMortyApp();
  const { isLoading, hasError, characters, hasNextPage, loadNextPage } =
    useCharacters(searchText, status);

  //le he dado unos pequeños estilos para que quede un poco curioso

  return (
    <div className="app">
      <CustomHeader
        title="Rick and Morty"
        description="Busca Personajes de Rick and Morty"
      />

      <div className="controls">
        <SearchBar placeholder="Buscar Personaje" onQuery={handleSearch} />

        <StatusFilter value={status} onChange={handleStatusChange} />
      </div>

      {selectedCharacter && <CharacterDetail character={selectedCharacter} />}

      {/*
       * estas dos lineas las pongo aquí por que hacer un componente solo
       * para esto no, no?
       * 
       */}
      {isLoading && <p>Cargando...</p>}
      {hasError && <p>{hasError}</p>}

      <CharacterList
        characters={characters}
        onCharacterSelected={handleCharacterSelected}
      />

      <div className="load-more">
        <LoadMoreButton
          disabled={isLoading || !hasNextPage}
          onClick={() => loadNextPage()}
        />
      </div>
    </div>
  );
};
