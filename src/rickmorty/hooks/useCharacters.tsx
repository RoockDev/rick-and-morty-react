import {useEffect, useState } from 'react';
import { getCharacters } from '../actions/get-characters.action';
import type { Character } from '../interfaces/character.interface';

export const useCharacters = () => {
    
    const [isLoading, setIsLoading] = useState(true);
    const [hasError,setHasError] = useState<string | null>(null);
    const [characters,setCharacters] = useState<Character[]>([]);

    useEffect(() => {
       
        const loadCharacters = async () => {
            try {
                setIsLoading(true);
                setHasError(null);

                const characters = await getCharacters();
                setCharacters(characters);

            } catch (error) {
                setHasError('No se han podido cargar los personales');
            }finally{
                setIsLoading(false);
            }
        };
        
        loadCharacters();

    },[]); //array vacio significa ejecutalo solo una vez cuando el componente se monta, se utiliza mucho para la carga inicial
            //me hago mis apuntes porque busco que hace x cosa pero luego se me olvida y me como la cabeza, asique lo dejo hasta que lo interiorizo bien

    return {
        isLoading,
        hasError,
        characters,
    };
};

