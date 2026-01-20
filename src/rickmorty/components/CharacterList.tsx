import type {Character} from '../interfaces/character.interface';

interface Props {
    characters: Character[];
    onCharacterSelected: (character: Character) => void ;
}

export const CharacterList = ({characters, onCharacterSelected}: Props) => {
    return (
        <div className="grid">
      { characters.map( ( character ) => (
        <div
          key={ character.id }
          className="card"
          onClick={ () => onCharacterSelected( character ) }
        >
          <img
            src={ character.image }
            alt={ character.name }
          />

          <div className="card-body">
            <h3 className="card-title">{ character.name }</h3>

            <span className="badge">
              { character.status }
            </span>


          </div>
        </div>
      ) ) }
    </div>
    );
};