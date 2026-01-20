import {useEffect, useState, useRef } from 'react';
import { getCharacters } from '../actions/get-characters.action';
import type { Character } from '../interfaces/character.interface';

export const useCharacters = (name:string,status:string) => {
    
    const [isLoading, setIsLoading] = useState(true);
    const [hasError,setHasError] = useState<string | null>(null);
    const [characters,setCharacters] = useState<Character[]>([]);
    const [page, setPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(true); //para desactivar el boton cargar más cuando no haya más páginas

    // Punto 7 Persistencia sin re-render con useRef     
    const lastQueryRef = useRef<string>('');
    const requestsCountRef = useRef<number>(0);

    const charactersCache = useRef<Record<string,Character[]>>({});

    const isFetchingRef = useRef<boolean>(false); //esto está por si me da por pincharle varias veces seguidas no liarla y que se disparen 2 o 3 request a la vez

    useEffect(() => {

        
       
        const loadCharacters = async () => {
            try {
                setIsLoading(true);
                setHasError(null);

                
                lastQueryRef.current = name;

                setPage(1);
                setHasNextPage(true);

                const cacheKey = `${ name.trim().toLowerCase() }|${ status }|1`;

                if(charactersCache.current[cacheKey]){
                    setCharacters(charactersCache.current[cacheKey]);
                    return;
                }

                requestsCountRef.current++;
                


                const characters = await getCharacters(1,name,status);
                setCharacters(characters);

                charactersCache.current[cacheKey] = characters;

            } catch (error) {
                setHasError('No se han podido cargar los personajes');
            }finally{
                setIsLoading(false);
            }
        };

        loadCharacters();

    },[name,status]); 

    //Punto 8 paginación, esto se pedía investigar por nuestra cuenta, he mirado varias formas y al final lo hago así
    //por que algunas no me convencian de si se hacian así y algunas cosas no terminaba de enterarme
    //no se si esto será correcto o no pero es lo que más me cuadra y está guayy
    
    const loadNextPage = async () => {
        if(isFetchingRef.current) return;
        if(isLoading) return;
        if(!hasNextPage) return;

        const nextPage = page + 1;

        try {
            
            isFetchingRef.current = true;
            setIsLoading(true);
            setHasError(null);

            const cacheKey = `${ name.trim().toLowerCase() }|${ status }|${ nextPage }`;

            if (charactersCache.current[cacheKey]) {
                setCharacters((prev) => [...prev, ...charactersCache.current[cacheKey]]); // esto "pinta" todos los caracteres que teniamos mas los nuevos si hay en caché
                setPage(nextPage);
                return;
            }

            requestsCountRef.current++;

            const nextCharacters = await getCharacters(nextPage,name,status);
            setCharacters( ( prev ) => [ ...prev, ...nextCharacters ] ); // esto "pinta" todos los caracteres que teniamos mas los nuevos  como arriba pero con petición
            setPage(nextPage);

            charactersCache.current[cacheKey] = nextCharacters;
        } catch (error:any) {
            if (error?.response?.status === 404) {
                setHasNextPage(false);
                return;
            }

            setHasError('No se pudieron cargar los personajes');
        }finally{
            setIsLoading(false);
            isFetchingRef.current = false;
        }
    }

            

    return {
        isLoading,
        hasError,
        characters,
        hasNextPage,
        loadNextPage,
    };
};

