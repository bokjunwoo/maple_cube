import { CubeHistory } from '../api/api';
import { Box, SelectChangeEvent, Typography } from '@mui/material';
import { SelectUI } from './ui/SelectUI';
import { SelectItem } from './SelectItem';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  currentPageState,
  selectedCharacterState,
  selectedCubeGradeState,
  selectedCubeNameState,
  selectedItemState,
} from '../atom/cubeDataState';
import { CustomButtonUI } from './ui/CustomButtonUI';
import { OneMoreQuestionDialog } from './OneMoreQuestionDialog';
import { useState } from 'react';

type SelectCharacterType = {
  data: CubeHistory[];
};

export const SelectCharacter = ({ data }: SelectCharacterType) => {
  const [selectedCharacter, setSelectedCharacter] = useRecoilState(
    selectedCharacterState
  );
  const setSelectedItem = useSetRecoilState(selectedItemState);
  const setSelectedNameType = useSetRecoilState(selectedCubeNameState);
  const setSelectedCubeGrade = useSetRecoilState(selectedCubeGradeState);
  const setCurrentPage = useSetRecoilState(currentPageState);

  const handleCharacterSelect = (e: SelectChangeEvent) => {
    setSelectedCharacter(e.target.value);
    setSelectedItem('');
    setSelectedNameType('');
    setSelectedCubeGrade('');
    setCurrentPage(1);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const characterNames = [...new Set(data.map((item) => item.character_name))];

  const selectedNameCount = data.filter(
    (item) => item.character_name === selectedCharacter
  ).length;

  return (
    <>
      <SelectUI
        filterdata={characterNames}
        label="캐릭터"
        value={selectedCharacter}
        handleChange={handleCharacterSelect}
      />

      {selectedNameCount !== 0 && (
        <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
          <strong>{selectedCharacter}</strong>님의 총 큐브사용 개수는{' '}
          <strong>{selectedNameCount.toLocaleString()}</strong>개 입니다.
        </Typography>
      )}

      {selectedCharacter && (
        <SelectItem data={data} selectedCharacter={selectedCharacter} />
      )}

      <Box sx={{ mt: 3 }}>
        <div onClick={handleClickOpen}>
          <CustomButtonUI
            width="100%"
            height="56px"
            text="다시 검색하러가기"
            bgColor="#D0E8F2"
            color="black"
            variant="subtitle1"
            hoverBorder="2px solid #057cad"
          />
        </div>
      </Box>

      <OneMoreQuestionDialog open={open} setOpen={setOpen} />
    </>
  );
};
