import { Box } from '@mui/material';
import { InputUI } from './ui/InputUI';
import { useRecoilState } from 'recoil';
import {
  apiKeyState,
  inputErrorMessageState,
  isInputErrorState,
} from '../atom/cubeDataState';

export const KeyInput = () => {
  const [apiKey, setApiKey] = useRecoilState(apiKeyState);
  const [isInputError, setIsInputError] = useRecoilState(isInputErrorState);
  const [inputErrorMessage, setInputErrorMessage] = useRecoilState(
    inputErrorMessageState
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(e.target.value);
    if (e.target.value.length === 0) {
      setIsInputError(true);
      setInputErrorMessage('API키를 입력해야 합니다');
      return;
    }
    setIsInputError(false);
    setInputErrorMessage('');
  };

  return (
    <Box sx={{ pt: 1, pb: 1 }}>
      <InputUI
        value={apiKey}
        handleInputChange={handleInputChange}
        fullWidth={true}
        label="API 키를 입력해주세요."
        error={isInputError}
        helperText={inputErrorMessage}
      />
    </Box>
  );
};
