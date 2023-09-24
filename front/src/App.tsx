import { useState } from 'react';
import { DateRangePicker } from './components/DateRangePicker';
import { CubeHistoryResponseDTO } from './api/api';
import { ApiRequestButton } from './components/ApiRequestButton';
import { SelectCharacter } from './components/SelectCharacter';
import { Dayjs } from 'dayjs';
import { Box, Container, Typography } from '@mui/material';
import { HeaderUI } from './components/ui/HeaderUI';
import { KeyInput } from './components/KeyInput';

const App = () => {
  const [data, setData] = useState<CubeHistoryResponseDTO>();
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [apiKey, setApiKey] = useState('');
  const [progress, setProgress] = useState(0);

  const handleStartDateChange = (newValue: Dayjs | null) => {
    setStartDate(newValue);
  };

  const handleEndDateChange = (newValue: Dayjs | null) => {
    setEndDate(newValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(e.target.value);
  };

  return (
    <>
      <HeaderUI />
      <Container maxWidth="sm">
        <Typography variant="h5">데이터 입력</Typography>

        <Box sx={{ backgroundColor: 'white', padding: 3 }}>
          <KeyInput apiKey={apiKey} handleInputChange={handleInputChange} />

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
            setProgress={setProgress}
          />
        </Box>

        <progress value={progress} max="100" />
        <p>{progress}%</p>

        {data && data?.count !== 0 && (
          <SelectCharacter data={data.cube_histories} />
        )}
        {data?.count === 0 && <p>해당요일에 사용한 큐브데이터는 없습니다.</p>}
      </Container>
    </>
  );
};

export default App;
