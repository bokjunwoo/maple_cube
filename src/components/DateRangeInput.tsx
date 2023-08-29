import { useState } from 'react';
import { getMapleCubeUrl } from '../api/mapleAPI';
import { CubeHistoryResponseDTO } from '../api/api';

export const DateRangeInput = () => {
  const key = process.env.API_KEY || '';
  const [data, setData] = useState<CubeHistoryResponseDTO>();
  const [startDate, setStartDate] = useState('');

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const onClickFetchData = async () => {
    const response = await getMapleCubeUrl(startDate, key);
    setData(response);
  };

  return (
    <>
      <h1>검색하고 싶은 날짜</h1>
      <input type="date" value={startDate} onChange={handleStartDateChange} />
      <button onClick={onClickFetchData}>검색</button>
    </>
  );
};
