import { CubeHistory } from '../api/api';

type SelectCharacterType = {
  data: CubeHistory[];
  onSelect: (characterName: string) => void;
  selectedCharacter: string;
};

export const SelectCharacter = ({
  data,
  onSelect,
  selectedCharacter,
}: SelectCharacterType) => {
  const characterNames = [...new Set(data.map((item) => item.character_name))];

  const selectedNameCount = data.filter(
    (item) => item.character_name === selectedCharacter
  ).length;

  const handleCharacterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(e.target.value);
  };

  return (
    <>
      <div>
        <select onChange={handleCharacterChange}>
          <option value="">캐릭터 이름</option>
          {characterNames.map((characterName) => (
            <option key={characterName} value={characterName}>
              {characterName}
            </option>
          ))}
        </select>
      </div>

      {selectedNameCount !== 0 && (
        <h3>
          {selectedCharacter}님의 총 큐브사용 개수는 {selectedNameCount}개
          입니다.
        </h3>
      )}
    </>
  );
};
