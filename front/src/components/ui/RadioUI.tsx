import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';

type RadioUIType = {
  data: string[];
  label: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  countKeyValue: { [key: string]: number };
};

export const RadioUI = ({
  data,
  label,
  handleChange,
  countKeyValue,
}: RadioUIType) => {
  return (
    <FormControl fullWidth>
      <FormLabel id="controlled-radio-buttons-group">{label}</FormLabel>
      <RadioGroup
        row
        aria-labelledby="controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        onChange={handleChange}
      >
        {data.map((item) => {
          return (
            <div key={item}>
              <FormControlLabel
                value={item}
                control={<Radio />}
                label={`${item} (${countKeyValue[item]}개)`}
              />
            </div>
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};
