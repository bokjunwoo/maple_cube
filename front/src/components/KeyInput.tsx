import { Box } from '@mui/material';
import { InputUI } from './ui/InputUI';
import { useRecoilState } from 'recoil';
import { apiKeyState } from '../atom/cubeDataState';

export const KeyInput = () => {
  const [apiKey, setApiKey] = useRecoilState(apiKeyState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(e.target.value);
  };

  return (
    <Box sx={{ pt: 1, pb: 1 }}>
      <InputUI
        value={apiKey}
        handleInputChange={handleInputChange}
        fullWidth={true}
        label="API 키를 입력해주세요."
      />
    </Box>
  );
};
