import dayjs from 'dayjs';
import { CubeHistory } from '../api/api';
import { getMapleCubeUrl } from '../api/mapleAPI';
import { ApiRequestButtonUI } from './ui/ApiRequestButtonUI';
import { Box } from '@mui/material';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  apiKeyState,
  dataState,
  disabledState,
  endDateState,
  endErrorState,
  inputErrorMessageState,
  isInputErrorState,
  isLoadingState,
  progressState,
  startDateState,
  startErrorState,
} from '../atom/cubeDataState';
import axios from 'axios';

export const ApiRequestButton = () => {
  const setDataState = useSetRecoilState(dataState);
  const setIsLoading = useSetRecoilState(isLoadingState);
  const setProgress = useSetRecoilState(progressState);
  const setInputErrorMessage = useSetRecoilState(inputErrorMessageState);
  const startDate = useRecoilValue(startDateState);
  const endDate = useRecoilValue(endDateState);
  const startError = useRecoilValue(startErrorState);
  const endError = useRecoilValue(endErrorState);
  const [disabled, setDisabled] = useRecoilState(disabledState);
  const [apiKey, setApiKey] = useRecoilState(apiKeyState);
  const [isInputError, setIsInputError] = useRecoilState(isInputErrorState);

  const isStartDateValid = startDate === null;
  const isEndDateValid = endDate === null;
  const isStartErrorDateValid = startError !== null;
  const isEndErrorDateValid = endError !== null;

  const isButtonDisabled =
    isStartErrorDateValid ||
    isEndErrorDateValid ||
    isStartDateValid ||
    isEndDateValid ||
    isInputError ||
    apiKey.length === 0 ||
    disabled;

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
        const response = await getMapleCubeUrl(
          dateString,
          apiKey,
          lastDate.format('YYYY-MM-DD')
        );

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
        if (axios.isAxiosError(error)) {
          setIsInputError(true);
          switch (error.response?.data) {
            case 400:
              setInputErrorMessage(
                '2022년 11월25일 이전 데이터의 검색은 불가능 합니다.'
              );
              break;
            case 401:
              setInputErrorMessage(
                'Nexon Developers의 API키를 올바르게 입력해주세요.'
              );
              break;
            default:
              alert('서버 요청에 오류가 생겼습니다. 다시 시도해주세요.');
          }
          setDisabled(false);
          setIsLoading(false);
          setApiKey('');
          return;
        }
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
        disabled={isButtonDisabled}
      />
    </Box>
  );
};
