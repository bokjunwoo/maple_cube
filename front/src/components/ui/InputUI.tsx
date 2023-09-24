import { TextField } from '@mui/material';

type InputUIType = {
  value: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fullWidth: boolean;
  label: string;
};

export const InputUI = ({
  value,
  handleInputChange,
  fullWidth,
  label,
}: InputUIType) => {
  return (
    <TextField
      type="text"
      fullWidth={fullWidth}
      label={label}
      value={value}
      onChange={handleInputChange}
    />
  );
};
