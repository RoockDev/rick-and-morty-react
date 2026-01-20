import { useState } from "react";
import type {Character} from '../interfaces/character.interface';
//custom hook para gestionar El estado de la pantalla
/**
 * Gestiona:
 * searchText
 *  selectedCharacter que es el punto 5 que pide que si se selecciona un personaje se quede la carta quieta aunque se busque o se filtre otro
 *  handlers (handleSearch, handleStatusChange, handleCharacterSelected)
 * es el hook de "orquestación" de la página principal qque como son 3 y es pequeño sé que no pasa nada si dejo las 3 const en el app
 * pero como en el ejercicio de los gifs sus manejadores se meten en un archivo a parte para dejar la app principal más limpia
 * pues lo he tomado como referencia y por eso los he puesto aquí.
 */
export const useRickMortyApp = () => {
    const [searchText, setSearchText] = useState('');
    const [status, setStatus] = useState('');
    const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

    const handleSearch = (query:string) => {
        setSearchText(query);
    };

    const handleStatusChange = (value:string) => {
        setStatus(value);
    };

    const handleCharacterSelected = (character:Character) => {
        setSelectedCharacter(character);
    };

    return {
        searchText,
        status,
        selectedCharacter,
        handleSearch,
        handleStatusChange,
        handleCharacterSelected,
    };


};

