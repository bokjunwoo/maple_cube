import { useState } from 'react';
import { DateRangePicker } from './components/DateRangePicker';
import { CubeHistoryResponseDTO } from './api/api';
import { ApiRequestButton } from './components/ApiRequestButton';
import { SelectCharacter } from './components/SelectCharacter';
import { Dayjs } from 'dayjs';
import { Container, Grid } from '@mui/material';

const App = () => {
  const [data, setData] = useState<CubeHistoryResponseDTO>();
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  const handleStartDateChange = (newValue: Dayjs | null) => {
    setStartDate(newValue);
  };

  const handleEndDateChange = (newValue: Dayjs | null) => {
    setEndDate(newValue);
  };

  return (
    <Container maxWidth="md">
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        handleStartDateChange={handleStartDateChange}
        handleEndDateChange={handleEndDateChange}
      />

      <ApiRequestButton
        setData={setData}
        startDate={startDate}
        endDate={endDate}
      />

      {data && data?.count !== 0 && (
        <SelectCharacter data={data.cube_histories} />
      )}
      {data?.count === 0 && <p>해당요일에 사용한 큐브데이터는 없습니다.</p>}
    </Container>
  );
};

export default App;
