import { CSVLink } from 'react-csv';
import { CubeHistory } from '../api/api';
import { flattenOptions } from '../util/util';
import { CustomButtonUI } from './ui/CustomButtonUI';
import { Box } from '@mui/material';

type CSVButtonType = {
  data: CubeHistory[];
};

export const CSVButton = ({ data }: CSVButtonType) => {
  const CVSData = data.map((history) => ({
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
    before_potential_options: flattenOptions(history.before_potential_options),
    before_additional_potential_options: flattenOptions(
      history.before_additional_potential_options
    ),
    after_potential_options: flattenOptions(history.after_potential_options),
    after_additional_potential_options: flattenOptions(
      history.after_additional_potential_options
    ),
  }));

  const CVSheaders = [
    { label: 'ID', key: 'id' },
    { label: '캐릭터 이름', key: 'character_name' },
    { label: '큐브 사용 날짜', key: 'create_date' },
    { label: '사용한 큐브', key: 'cube_type' },
    { label: '큐브 사용 결과', key: 'item_upgrade_result' },
    { label: '미라클 타임 적용 여부', key: 'miracle_time_flag' },
    { label: '장비 분류', key: 'item_equip_part' },
    { label: '장비 레벨', key: 'item_level' },
    { label: '큐브를 사용한 장비', key: 'target_item' },
    { label: '잠재능력 등급', key: 'potential_option_grade' },
    {
      label: '에디셔널 잠재능력 등급',
      key: 'additional_potential_option_grade',
    },
    { label: '천장에 도달하여 확정 등급 상승한 여부', key: 'upgradeguarantee' },
    { label: '현재까지 쌓은 스택', key: 'upgradeguaranteecount' },
    { label: '큐브사용전 잠재능력 옵션', key: 'before_potential_options' },
    {
      label: '큐브사용전 에디셔널 잠재능력 옵션',
      key: 'before_additional_potential_options',
    },
    { label: '큐브 사용 후 잠재능력 옵션', key: 'after_potential_options' },
    {
      label: '큐브 사용 후 에디셔널 잠재능력 옵션',
      key: 'after_additional_potential_options',
    },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <CSVLink
        data={CVSData}
        headers={CVSheaders}
        filename="cube_histories"
        style={{ width: '100%', textDecoration: 'none' }}
      >
        <CustomButtonUI
          width="100%"
          height="56px"
          text="엑셀파일 다운로드"
          bgColor="#f0ecc5"
          color="black"
          variant="subtitle1"
          hoverBorder="2px solid #ccbf35"
        />
      </CSVLink>
    </Box>
  );
};
