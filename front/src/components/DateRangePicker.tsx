import { DateValidationError } from '@mui/x-date-pickers';
import { useState, useMemo } from 'react';
import { isToday, calculateMaxDate, calculateMinDate } from '../util/util';
import { DateRangePickerUI } from './ui/DateRangePickerUI';
import dayjs, { Dayjs } from 'dayjs';

type DateRangePickerType = {
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  handleStartDateChange: (newValue: Dayjs | null) => void;
  handleEndDateChange: (newValue: Dayjs | null) => void;
};

export const DateRangePicker = ({
  startDate,
  endDate,
  handleEndDateChange,
  handleStartDateChange,
}: DateRangePickerType) => {
  const today = isToday();

  const [startError, setStartError] = useState<DateValidationError | null>(
    null
  );
  const [endError, setEndError] = useState<DateValidationError | null>(null);

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
    if (endError === 'minDate' && startDateFormat === null) {
      return '2022-11-25 이전 날짜는 선택 불가능합니다.';
    }
    if (endError === 'minDate' && startDateFormat < '2022-11-25') {
      return '2022-11-25 이전 날짜는 선택 불가능합니다.';
    }
    if (endError === 'minDate' && endDateFormat < startDateFormat) {
      return '종료날짜는 시작날짜보다 앞 선 날짜이여야 합니다.';
    }
    if (endError === 'invalidDate') {
      return '날짜가 유효하지 않습니다.';
    }
  }, [endError, today, endDateFormat, startDateFormat]);

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
    />
  );
};
