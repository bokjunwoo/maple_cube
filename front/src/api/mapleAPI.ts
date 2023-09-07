import axios from 'axios';
import { CubeHistoryResponseDTO } from './api';

export const getMapleCubeUrl = async (
  date: string,
  key: string
): Promise<CubeHistoryResponseDTO> => {
  try {
    const response = await axios.get('http://localhost:4000/api/data', {
      params: {
        count: 1000,
        date: date,
        cursor: '',
        key: key,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
