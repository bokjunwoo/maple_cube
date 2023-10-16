import axios from 'axios';
import { CubeHistoryResponseDTO } from './api';

export const getMapleCubeUrl = async (
  date: string,
  key: string,
  lastDate: string
): Promise<CubeHistoryResponseDTO> => {
  const response = await axios.post(
    'https://api.cubedata.live/api/data',
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
