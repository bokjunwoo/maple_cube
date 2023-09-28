import { CubeHistory } from '../api/api';
import { SelectCubeName } from './SelectCubeName';
import { SelectChangeEvent, Typography } from '@mui/material';
import { SelectUI } from './ui/SelectUI';
import {
  currentPageState,
  selectedCubeGradeState,
  selectedCubeNameState,
  selectedItemState,
} from '../atom/cubeDataState';
import { useRecoilState, useSetRecoilState } from 'recoil';

type SelectItemType = {
  data: CubeHistory[];
  selectedCharacter: string;
};

export const SelectItem = ({ data, selectedCharacter }: SelectItemType) => {
  const [selectedItem, setSelectedItem] = useRecoilState(selectedItemState);
  const setSelectedCubeName = useSetRecoilState(selectedCubeNameState);
  const setSelectedCubeGrade = useSetRecoilState(selectedCubeGradeState);
  const setCurrentPage = useSetRecoilState(currentPageState);

  const handleItemSelect = (e: SelectChangeEvent) => {
    setSelectedItem(e.target.value);
    setSelectedCubeName('');
    setSelectedCubeGrade('');
    setCurrentPage(1);
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
        filterdata={characterItems}
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

      {selectedItem && <SelectCubeName filterdata={selectedItems} />}
    </>
  );
};
