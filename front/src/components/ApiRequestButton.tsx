import dayjs, { Dayjs } from 'dayjs';
import { CubeHistoryResponseDTO, CubeHistory } from '../api/api';
import { getMapleCubeUrl } from '../api/mapleAPI';
import { ApiRequestButtonUI } from './ui/ApiRequestButtonUI';
import { Box } from '@mui/material';

type ApiRequestButtonType = {
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  disabled: boolean;
  setData: React.Dispatch<
    React.SetStateAction<CubeHistoryResponseDTO | undefined>
  >;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ApiRequestButton = ({
  startDate,
  endDate,
  disabled,
  setData,
  setProgress,
  setDisabled,
  setIsLoading,
}: ApiRequestButtonType) => {
  const key = process.env.REACT_APP_API_KEY || '';

  const fetchAllDataInRange = async (): Promise<void> => {
    setDisabled(true);
    setIsLoading(true);
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

        const progressPercentage = Math.floor(
          (currentDate.diff(startDate, 'day') /
            lastDate.diff(startDate, 'day')) *
            100
        );
        setProgress(progressPercentage);
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
    setIsLoading(false);
    setProgress(0);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <ApiRequestButtonUI fetchData={fetchAllDataInRange} disabled={disabled} />
    </Box>
  );
};
