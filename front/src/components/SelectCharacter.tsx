import { useState } from 'react';
import { CubeHistory } from '../api/api';
import { SelectChangeEvent } from '@mui/material';
import { SelectUI } from './ui/SelectUI';
import { SelectItem } from './SelectItem';

type SelectCharacterType = {
  data: CubeHistory[];
};

export const SelectCharacter = ({ data }: SelectCharacterType) => {
  const [selectedCharacter, setSelectedCharacter] = useState('');

  const handleCharacterSelect = (e: SelectChangeEvent) => {
    setSelectedCharacter(e.target.value);
  };

  const characterNames = [...new Set(data.map((item) => item.character_name))];

  const selectedNameCount = data.filter(
    (item) => item.character_name === selectedCharacter
  ).length;

  return (
    <>
      <SelectUI
        data={characterNames}
        label="캐릭터"
        value={selectedCharacter}
        handleChange={handleCharacterSelect}
      />

      {selectedNameCount !== 0 && (
        <h3>
          {selectedCharacter}님의 총 큐브사용 개수는 {selectedNameCount}개
          입니다.
        </h3>
      )}

      {selectedCharacter && (
        <SelectItem data={data} selectedCharacter={selectedCharacter} />
      )}
    </>
  );
};
