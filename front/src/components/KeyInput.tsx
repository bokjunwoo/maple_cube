import { Box } from '@mui/material';
import { InputUI } from './ui/InputUI';

type KeyInputType = {
  apiKey: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const KeyInput = ({ apiKey, handleInputChange }: KeyInputType) => {
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
