import type { Character } from "../interfaces/character.interface";

interface Props {
  character: Character;
}

export const CharacterDetail = ({ character }: Props) => {
  return (
    <div className="card detail-card">
      <img src={character.image} alt={character.name} />

      <div className="card-body">
        <h2 className="card-title">{character.name}</h2>

        <p>
          <strong>Status:</strong> {character.status}
        </p>
        <p>
          <strong>Species:</strong> {character.species}
        </p>
        <p>
          <strong>Gender:</strong> {character.gender}
        </p>
      </div>
    </div>
  );
};
