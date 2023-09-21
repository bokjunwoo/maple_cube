import { Button } from '@mui/material';

type ApiRequestButtonUIType = {
  fetchData: () => Promise<void>;
  disabled: boolean;
};

export const ApiRequestButtonUI = ({
  fetchData,
  disabled,
}: ApiRequestButtonUIType) => {
  return (
    <Button variant="outlined" onClick={fetchData} disabled={disabled}>
      검색
    </Button>
  );
};
