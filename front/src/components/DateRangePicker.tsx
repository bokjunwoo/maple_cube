import { DateValidationError } from '@mui/x-date-pickers';
import { useMemo } from 'react';
import { isToday, calculateMaxDate, calculateMinDate } from '../util/util';
import { DateRangePickerUI } from './ui/DateRangePickerUI';
import dayjs, { Dayjs } from 'dayjs';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  disabledState,
  endDateState,
  endErrorState,
  startDateState,
  startErrorState,
} from '../atom/cubeDataState';

export const DateRangePicker = () => {
  const today = isToday();

  const [startDate, setStartDate] = useRecoilState(startDateState);
  const [endDate, setEndDate] = useRecoilState(endDateState);
  const [startError, setStartError] = useRecoilState(startErrorState);
  const [endError, setEndError] = useRecoilState(endErrorState);
  const disabled = useRecoilValue(disabledState);

  const handleStartDateChange = (newValue: Dayjs | null) => {
    setStartDate(newValue);
  };

  const handleEndDateChange = (newValue: Dayjs | null) => {
    setEndDate(newValue);
  };

  const handleStartOnError = (error: DateValidationError) => {
    setStartError(error);
  };

  const handleEndOnError = (error: DateValidationError) => {
    setEndError(error);
  };

  const startDateFormat = startDate
    ? dayjs(startDate).format('YYYY-MM-DD')
    : '2022-11-25';

  const endDateFormat = endDate ? dayjs(endDate).format('YYYY-MM-DD') : today;

  const startErrorMessage = useMemo(() => {
    if (startError === 'maxDate' && endDateFormat === null) {
      return `${today} 이전 날짜를 선택해야 합니다.`;
    }
    if (startError === 'maxDate' && startDateFormat > today) {
      return `${today} 이전 날짜를 선택해야 합니다.`;
    }
    if (startError === 'maxDate' && endDateFormat < startDateFormat) {
      return `시작날짜는 종료날짜보다 앞 선 날짜이여야 합니다.`;
    }
    if (startError === 'minDate') {
      return '2022-11-25 이전 날짜는 선택 불가능합니다.';
    }
    if (startError === 'invalidDate') {
      return '날짜가 유효하지 않습니다.';
    }
  }, [startError, today, endDateFormat, startDateFormat]);

  const endErrorMessage = useMemo(() => {
    if (endError === 'maxDate' && endDateFormat === null) {
      return `${today} 이후 날짜 선택은 불가능합니다.`;
    }
    if (endError === 'maxDate') {
      return `${today} 이후 날짜 선택은 불가능합니다.`;
    }
    if (endError === 'minDate' && startDate === null) {
      return '2022-11-25 이전 날짜는 선택 불가능합니다.';
    }
    if (endError === 'minDate' && endDateFormat < '2022-11-25') {
      return '2022-11-25 이전 날짜는 선택 불가능합니다.';
    }
    if (endError === 'minDate' && endDateFormat < startDateFormat) {
      return '종료날짜는 시작날짜보다 앞 선 날짜이여야 합니다.';
    }
    if (endError === 'invalidDate') {
      return '날짜가 유효하지 않습니다.';
    }
  }, [endError, today, endDateFormat, startDateFormat, startDate]);

  const maxDate = calculateMaxDate(endDateFormat, today);
  const minDate = calculateMinDate(startDateFormat);

  return (
    <DateRangePickerUI
      startDate={startDate}
      endDate={endDate}
      handleStartDateChange={handleStartDateChange}
      handleEndDateChange={handleEndDateChange}
      handleStartOnError={handleStartOnError}
      handleEndOnError={handleEndOnError}
      startErrorMessage={startErrorMessage}
      endErrorMessage={endErrorMessage}
      maxDate={maxDate}
      minDate={minDate}
      today={today}
      disabled={disabled}
    />
  );
};
