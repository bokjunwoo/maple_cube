import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  Box,
} from '@mui/material';

type PostListSelectUIType = {
  value: number;
  handleChange: (event: SelectChangeEvent) => void;
};

export const PostListSelectUI = ({
  value,
  handleChange,
}: PostListSelectUIType) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'end' }}>
      <FormControl variant="standard" sx={{ mb: 1, minWidth: 120 }}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={value.toString()}
          onChange={handleChange}
        >
          <MenuItem value={20}>20개씩 보기</MenuItem>
          <MenuItem value={50}>50개씩 보기</MenuItem>
          <MenuItem value={100}>100개씩 보기</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
