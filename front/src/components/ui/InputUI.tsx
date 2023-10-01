import { TextField } from '@mui/material';

type InputUIType = {
  value: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fullWidth: boolean;
  label: string;
  error: boolean;
  helperText: string;
};

export const InputUI = ({
  value,
  handleInputChange,
  fullWidth,
  label,
  error,
  helperText,
}: InputUIType) => {
  return (
    <TextField
      type="text"
      error={error}
      helperText={helperText}
      fullWidth={fullWidth}
      label={label}
      value={value}
      onChange={handleInputChange}
    />
  );
};
