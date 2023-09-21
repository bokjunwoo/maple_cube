import dayjs, { Dayjs } from 'dayjs';
import { CubeHistoryResponseDTO, CubeHistory } from '../api/api';
import { getMapleCubeUrl } from '../api/mapleAPI';
import { ApiRequestButtonUI } from './ui/ApiRequestButtonUI';
import { useState } from 'react';

type ApiRequestButtonType = {
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  setData: React.Dispatch<
    React.SetStateAction<CubeHistoryResponseDTO | undefined>
  >;
};

export const ApiRequestButton = ({
  startDate,
  endDate,
  setData,
}: ApiRequestButtonType) => {
  const key = process.env.REACT_APP_API_KEY || '';

  const [disabled, setDisabled] = useState(false);

  const fetchAllDataInRange = async (): Promise<void> => {
    setDisabled(true);
    let totalCount = 0;
    const allCubeHistories: CubeHistory[] = [];

    let currentDate = dayjs(startDate);
    const lastDate = dayjs(endDate);

    while (
      currentDate.isBefore(lastDate) ||
      currentDate.isSame(lastDate, 'day')
    ) {
      const dateString = currentDate.format('YYYY-MM-DD');

      try {
        const response = await getMapleCubeUrl(dateString, key);

        totalCount += response.count ? response.count : 0;
        allCubeHistories.push(...response.cube_histories);

        currentDate = currentDate.add(1, 'day');
      } catch (error) {
        console.error('Error:', error);
      }
    }

    setData({
      count: totalCount,
      cube_histories: allCubeHistories,
      next_cursor: '',
    });
    setDisabled(false);
  };

  return (
    <ApiRequestButtonUI fetchData={fetchAllDataInRange} disabled={disabled} />
  );
};
