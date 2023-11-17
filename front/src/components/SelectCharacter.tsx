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
import { CSVLink } from 'react-csv';

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

      <CSVLink
        data={data.map((history) => ({
          id: history.id,
          character_name: history.character_name,
          create_date: history.create_date,
          cube_type: history.cube_type,
          item_upgrade_result: history.item_upgrade_result,
          miracle_time_flag: history.miracle_time_flag,
          item_equip_part: history.item_equip_part,
          item_level: history.item_level,
          target_item: history.target_item,
          potential_option_grade: history.potential_option_grade,
          additional_potential_option_grade:
            history.additional_potential_option_grade,
          upgradeguarantee: history.upgradeguarantee,
          upgradeguaranteecount: history.upgradeguaranteecount,
          before_potential_options: flattenOptions(
            history.before_potential_options
          ),
          before_additional_potential_options: flattenOptions(
            history.before_additional_potential_options
          ),
          after_potential_options: flattenOptions(
            history.after_potential_options
          ),
          after_additional_potential_options: flattenOptions(
            history.after_additional_potential_options
          ),
        }))}
        headers={[
          { label: 'ID', key: 'id' },
          { label: '캐릭터 이름', key: 'character_name' },
          { label: '생성 날짜', key: 'create_date' },
          { label: '큐브 타입', key: 'cube_type' },
          { label: '아이템 업그레이드 결과', key: 'item_upgrade_result' },
          { label: '이벤트 적용 여부', key: 'miracle_time_flag' },
          { label: '아이템 장비 부위', key: 'item_equip_part' },
          { label: '아이템 레벨', key: 'item_level' },
          { label: '대상 아이템', key: 'target_item' },
          { label: '잠재능력 등급', key: 'potential_option_grade' },
          {
            label: '추가 잠재능력 등급',
            key: 'additional_potential_option_grade',
          },
          { label: '업그레이드 보장 여부', key: 'upgradeguarantee' },
          { label: '업그레이드 보장 횟수', key: 'upgradeguaranteecount' },
          { label: '이전 잠재능력', key: 'before_potential_options' },
          {
            label: '이전 추가 잠재능력',
            key: 'before_additional_potential_options',
          },
          { label: '이후 잠재능력', key: 'after_potential_options' },
          {
            label: '이후 추가 잠재능력',
            key: 'after_additional_potential_options',
          },
        ]}
        filename="cube_histories.csv"
      >
        CSV 다운로드
      </CSVLink>
    </>
  );
};

function flattenOptions(options: any) {
  return options
    .map((option: any) => `${option.value} (${option.grade})`)
    .join(', ');
}
