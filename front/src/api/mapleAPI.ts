import axios from 'axios';
import { CubeHistoryResponseDTO } from './api';

export const getMapleCubeUrl = async (
  date: string,
  key: string,
  lastDate: string
): Promise<CubeHistoryResponseDTO> => {
  const response = await axios.post(
    'http://localhost:4000/api/data',
    {
      count: 1000,
      date: date,
      key: key,
      lastDate: lastDate,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return response.data;
};
