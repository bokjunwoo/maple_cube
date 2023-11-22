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
