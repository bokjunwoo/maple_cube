import { useState } from 'react';
import { CubeHistory } from '../api/api';
import { ListCubeType } from './ListCubeTypeName';
import { SelectChangeEvent, Typography } from '@mui/material';
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
        <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
          <strong>{selectedItem}</strong>의 큐브사용 개수는{' '}
          <strong>{selectedItems.length.toLocaleString()}</strong>개 입니다.
        </Typography>
      )}

      {selectedItem && <ListCubeType data={selectedItems} />}
    </>
  );
};
