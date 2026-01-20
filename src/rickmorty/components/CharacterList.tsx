import type {Character} from '../interfaces/character.interface';

interface Props {
    characters: Character[];
    onCharacterSelected: (character: Character) => void ;
}

export const CharacterList = ({characters, onCharacterSelected}: Props) => {
    return (
        <ul>
            {characters.map((character) => (
                <li
                key = {character.id}
                onClick={() => onCharacterSelected(character)}
                style={{cursor: 'pointer'}}
                >
                    {character.name} - {character.id}
                </li>
            ))}
        </ul>
    );
};