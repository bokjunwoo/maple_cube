import dayjs from 'dayjs';
import { CubeHistory } from '../api/api';
import { getMapleCubeUrl } from '../api/mapleAPI';
import { ApiRequestButtonUI } from './ui/ApiRequestButtonUI';
import { Box } from '@mui/material';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  dataState,
  disabledState,
  endDateState,
  endErrorState,
  isLoadingState,
  progressState,
  startDateState,
  startErrorState,
} from '../atom/cubeDataState';

export const ApiRequestButton = () => {
  const setDataState = useSetRecoilState(dataState);
  const setIsLoading = useSetRecoilState(isLoadingState);
  const setProgress = useSetRecoilState(progressState);
  const startDate = useRecoilValue(startDateState);
  const endDate = useRecoilValue(endDateState);
  const startError = useRecoilValue(startErrorState);
  const endError = useRecoilValue(endErrorState);
  const [disabled, setDisabled] = useRecoilState(disabledState);

  const isStartDateValid = startDate === null;
  const isEndDateValid = endDate === null;
  const isStartErrorDateValid = startError !== null;
  const isEndErrorDateValid = endError !== null;

  const isDisabled =
    isStartErrorDateValid ||
    isEndErrorDateValid ||
    isStartDateValid ||
    isEndDateValid ||
    disabled;

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

    setDataState({
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
      <ApiRequestButtonUI
        fetchData={fetchAllDataInRange}
        disabled={isDisabled}
      />
    </Box>
  );
};
