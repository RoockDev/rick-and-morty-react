import { rickMortyApi } from "../api/rickmprty.api";
import type {Character} from '../interfaces/character.interface';
import type { RickMortyResponse } from "../interfaces/rrickmorty.response";

export const getCharacters = async (page = 1, name = '', status = ''):Promise<Character[]> => {
   
    const params: Record<string,string> = {page: `${page}`};
    if( name ) params.name = name;
    if (status) params.status = status;

    const response = await rickMortyApi.get<RickMortyResponse>('/character', {params});

    const characters: Character[] = response.data.results.map ((character) => ({
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
        gender: character.gender,
        image: character.image
    }));

    return characters;
};