import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Avatar,
  Box,
  Typography,
} from '@mui/material';

type RadioUIType = {
  data: string[];
  label: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  countKeyValue: { [key: string]: number };
  info: {
    [key: string]: {
      color: string;
      name?: string;
      image?: string;
    };
  };
  value: string;
};

export const RadioUI = ({
  data,
  label,
  handleChange,
  countKeyValue,
  info,
  value,
}: RadioUIType) => {
  return (
    <FormControl fullWidth>
      <FormLabel
        id="controlled-radio-buttons-group"
        sx={{ fontSize: '20px', color: 'black' }}
      >
        {label}
      </FormLabel>

      <RadioGroup
        row
        aria-labelledby="controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        onChange={handleChange}
        value={value}
      >
        {data.map((item) => (
          <div key={item}>
            <FormControlLabel
              value={item}
              control={
                <Radio
                  sx={{
                    color: info[item].color || 'defaultColor',
                    '&.Mui-checked': {
                      color: info[item].color || 'defaultColor',
                    },
                  }}
                />
              }
              label={
                <div>
                  {info[item].image && (
                    <Box sx={{ display: 'flex' }}>
                      <Avatar
                        variant="rounded"
                        sx={{ width: 24, height: 24, mr: 0.5 }}
                        src={info[item].image}
                        alt={item}
                      />
                      <Typography
                        variant="body1"
                        sx={{ color: info[item].color }}
                      >{`${item} (${countKeyValue[item]}개)`}</Typography>
                    </Box>
                  )}
                  {info[item].name && (
                    <Box sx={{ display: 'flex' }}>
                      <Avatar
                        variant="rounded"
                        sx={{
                          width: 18,
                          height: 18,
                          mr: 0.5,
                          mt: 0.4,
                          bgcolor: info[item].color,
                          fontSize: '16px',
                          lineHeight: '18px',
                          pb: 0.3,
                        }}
                      >
                        {info[item].name}
                      </Avatar>
                      <Typography
                        variant="body1"
                        sx={{ color: info[item].color }}
                      >{`${item} (${countKeyValue[item]}개)`}</Typography>
                    </Box>
                  )}
                </div>
              }
            />
          </div>
        ))}
      </RadioGroup>
    </FormControl>
  );
};
