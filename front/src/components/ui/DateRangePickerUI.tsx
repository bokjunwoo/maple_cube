import {
  DatePicker,
  DateValidationError,
  LocalizationProvider,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ko';

type DateRangePickerUIType = {
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  handleStartDateChange: (newValue: Dayjs | null) => void;
  handleEndDateChange: (newValue: Dayjs | null) => void;
  handleStartOnError: (error: DateValidationError) => void;
  handleEndOnError: (error: DateValidationError) => void;
  startErrorMessage: string | undefined;
  endErrorMessage: string | undefined;
  maxDate: string | undefined;
  minDate: string | undefined;
  today: string;
};

export const DateRangePickerUI = ({
  startDate,
  endDate,
  handleStartDateChange,
  handleEndDateChange,
  handleStartOnError,
  handleEndOnError,
  startErrorMessage,
  endErrorMessage,
  maxDate,
  minDate,
  today,
}: DateRangePickerUIType) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          label="시작 날짜"
          format="YYYY / MM / DD"
          value={startDate}
          onChange={handleStartDateChange}
          views={['year', 'month', 'day']}
          onError={handleStartOnError}
          slotProps={{
            textField: {
              helperText: startErrorMessage,
            },
          }}
          minDate={dayjs('2022-11-25')}
          maxDate={dayjs(maxDate)}
        />
        <DatePicker
          label="종료 날짜"
          format="YYYY / MM / DD"
          value={endDate}
          onChange={handleEndDateChange}
          views={['year', 'month', 'day']}
          onError={handleEndOnError}
          slotProps={{
            textField: {
              helperText: endErrorMessage,
            },
          }}
          minDate={dayjs(minDate)}
          maxDate={dayjs(today)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};
