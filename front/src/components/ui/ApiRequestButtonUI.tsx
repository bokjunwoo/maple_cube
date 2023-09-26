import { Button, Typography } from '@mui/material';

type ApiRequestButtonUIType = {
  fetchData: () => Promise<void>;
  disabled: boolean;
};

export const ApiRequestButtonUI = ({
  fetchData,
  disabled,
}: ApiRequestButtonUIType) => {
  return (
    <Button
      variant="outlined"
      onClick={fetchData}
      disabled={disabled}
      fullWidth
      sx={{ height: '56px', borderRadius: 3 }}
    >
      <Typography variant="h6" sx={{ textAlign: 'center' }}>
        검색
      </Typography>
    </Button>
  );
};
