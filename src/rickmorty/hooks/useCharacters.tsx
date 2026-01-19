import {useEffect, useState } from 'react';
import { getCharacters } from '../actions/get-characters.action';
import type { Character } from '../interfaces/character.interface';

export const useCharacters = (name:string,status:string) => {
    
    const [isLoading, setIsLoading] = useState(true);
    const [hasError,setHasError] = useState<string | null>(null);
    const [characters,setCharacters] = useState<Character[]>([]);

    useEffect(() => {

         console.log( 'useCharacters effect -> name:', name );
       
        const loadCharacters = async () => {
            try {
                setIsLoading(true);
                setHasError(null);

                const characters = await getCharacters(1,name,status);
               

                setCharacters(characters);

            } catch (error) {
                setHasError('No se han podido cargar los personajes');
            }finally{
                setIsLoading(false);
            }
        };

        loadCharacters();

    },[name,status]); 
            

    return {
        isLoading,
        hasError,
        characters,
    };
};

