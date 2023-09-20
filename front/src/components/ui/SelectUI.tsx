import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';

type SelectUIType = {
  data: string[];
  label: string;
  value: string;
  handleChange: (e: SelectChangeEvent) => void;
};

export const SelectUI = ({
  data,
  label,
  value,
  handleChange,
}: SelectUIType) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="simple-select-label">{label}</InputLabel>
      <Select
        labelId="simple-select-label"
        id="simple-select-label"
        value={value}
        label={label}
        onChange={handleChange}
      >
        {data.map((name) => {
          return (
            <MenuItem value={name} key={name}>
              {name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
