import { Grid } from '@mui/material';
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
  disabled: boolean;
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
  disabled,
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
        <Grid container>
          <Grid item xs={12} sm={6}>
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
              sx={{ display: { xs: 'none', sm: 'flex' }, mr: 2 }}
              disabled={disabled}
            />

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
              sx={{ display: { xs: 'flex', sm: 'none' }, mb: 1 }}
              disabled={disabled}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
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
              sx={{ display: { xs: 'none', sm: 'flex' }, ml: 2 }}
              disabled={disabled}
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
              sx={{ display: { xs: 'flex', sm: 'none' } }}
              disabled={disabled}
            />
          </Grid>
        </Grid>
      </DemoContainer>
    </LocalizationProvider>
  );
};
