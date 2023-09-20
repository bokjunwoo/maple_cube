import { useState } from 'react';
import { CubeHistory } from '../api/api';
import { ListCubeType } from './ListCubeTypeName';
import { SelectChangeEvent } from '@mui/material';
import { SelectUI } from './ui/SelectUI';

type SelectItemType = {
  data: CubeHistory[];
  selectedCharacter: string;
};

export const SelectItem = ({ data, selectedCharacter }: SelectItemType) => {
  const [selectedItem, setSelectedItem] = useState('');

  const handleItemSelect = (e: SelectChangeEvent) => {
    setSelectedItem(e.target.value);
  };

  const characterItems = [
    ...new Set(
      data
        .filter((item) => item.character_name === selectedCharacter)
        .map((item) => item.target_item)
    ),
  ];

  const selectedItems = data.filter(
    (item) =>
      item.character_name === selectedCharacter &&
      item.target_item === selectedItem
  );

  return (
    <>
      <SelectUI
        data={characterItems}
        label="아이템"
        value={selectedItem}
        handleChange={handleItemSelect}
      />

      {selectedItems.length !== 0 && (
        <h3>
          {selectedItem}의 큐브사용 개수는 {selectedItems.length}개 입니다.
        </h3>
      )}

      {selectedItem && <ListCubeType data={selectedItems} />}
    </>
  );
};
