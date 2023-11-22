import dayjs from 'dayjs';
import { CubeHistory, CubeResultOptionDTO } from '../api/api';

const MINIMUM_SELECTION_DATE = '2022-11-25';

export const isValidSelectionDate = (date: string): boolean => {
  return date >= MINIMUM_SELECTION_DATE;
};

export const isEndDateGreaterThanStartDate = (
  startDate: string,
  endDate: string
) => {
  return endDate > startDate;
};

export const isValidDateFormat = (date: string): boolean => {
  const pattern = /^\d{4}-\d{2}-\d{2}$/;
  return pattern.test(date) && !isNaN(Date.parse(date));
};

export const isToday = (): string => {
  const currentDate = dayjs();
  const currentHour = currentDate.hour();

  if (currentHour < 5) {
    return currentDate.subtract(2, 'day').format('YYYY-MM-DD');
  } else {
    return currentDate.subtract(1, 'day').format('YYYY-MM-DD');
  }
};

export const calculateMaxDate = (endDateFormat: string, today: string) => {
  if (endDateFormat < '2022-11-25') {
    return today;
  }
  if (endDateFormat <= today) {
    return endDateFormat;
  }
  if (endDateFormat > today) {
    return today;
  }
};

export const calculateMinDate = (startDateFormat: string) => {
  if (startDateFormat <= '2022-11-25') {
    return '2022-11-25';
  }
  if (startDateFormat > '2022-11-25') {
    return startDateFormat;
  }
};

export const flattenOptions = (options: CubeResultOptionDTO[]) => {
  return options
    .map((option) => `${option.value} (${option.grade})`)
    .join(', ');
};

export const transformDataToCSV = (data: CubeHistory[]) => {
  return data.map((history) => ({
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
};

export const CVSheaders = [
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
