import { atom } from 'recoil';
import { CubeHistoryResponseDTO } from '../api/api';
import { Dayjs } from 'dayjs';
import { DateValidationError } from '@mui/x-date-pickers';

export const dataState = atom<CubeHistoryResponseDTO>({
  key: 'dataState',
  default: {
    count: undefined,
    cube_histories: [],
    next_cursor: '',
  },
});

export const startDateState = atom({
  key: 'startDateState',
  default: null as Dayjs | null,
});

export const endDateState = atom({
  key: 'endDateState',
  default: null as Dayjs | null,
});

export const startErrorState = atom<DateValidationError | null>({
  key: 'startErrorState',
  default: null,
});

export const endErrorState = atom<DateValidationError | null>({
  key: 'endErrorState',
  default: null,
});

export const apiKeyState = atom({
  key: 'apiKeyState',
  default: '',
});

export const progressState = atom({
  key: 'progressState',
  default: 0,
});

export const disabledState = atom({
  key: 'disabledState',
  default: false,
});

export const isLoadingState = atom({
  key: 'isLoadingState',
  default: false,
});

export const selectedCharacterState = atom({
  key: 'characterState',
  default: '',
});

export const selectedItemState = atom({
  key: 'itemState',
  default: '',
});

export const selectedCubeNameState = atom({
  key: 'cubeNameState',
  default: '',
});

export const selectedCubeGradeState = atom({
  key: 'cubeGradeState',
  default: '',
});

export const currentPageState = atom({
  key: 'currentPage',
  default: 1,
});

export const isInputErrorState = atom({
  key: 'isInputError',
  default: false,
});

export const inputErrorMessageState = atom({
  key: 'inputErrorMessage',
  default: '',
});
