import type {Character} from '../interfaces/character.interface';

interface Props {
    character: Character;
}

export const CharacterDetail = ({character}: Props) => {
    return (
        <div>
            <h2>Detalle</h2>

            <img
             src={character.image}
             alt={character.name}
             width={200}
             height={200}
               />

               <p><strong>Nombre:</strong>{character.name}</p>
               <p><strong>Status:</strong>{character.status}</p>
               <p><strong>Especie:</strong>{character.species}</p>
               <p><strong>Género:</strong>{character.gender}</p>
        </div>
    )
}