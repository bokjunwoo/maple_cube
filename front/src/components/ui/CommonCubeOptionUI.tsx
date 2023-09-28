import { Avatar, Box, Typography } from '@mui/material';
import { CubeHistory } from '../../api/api';
import { cubeTypeInfo } from '../../constants/cubeGuide';

type CommonCubeOptionUIType = {
  data: CubeHistory;
};

export const CommonCubeOptionUI = ({ data }: CommonCubeOptionUIType) => {
  return (
    <div>
      {data.after_potential_options.map((option, i) => {
        return (
          <Box key={i} sx={{ display: 'flex' }}>
            <Avatar
              variant="rounded"
              sx={{
                width: 14,
                height: 14,
                mr: 0.5,
                mt: 0.6,
                bgcolor:
                  cubeTypeInfo[option.grade as string].color || 'darkblue',
                fontSize: '11px',
              }}
            >
              {cubeTypeInfo[option.grade as string].name}
            </Avatar>

            <Typography variant="body1">{option.value}</Typography>
          </Box>
        );
      })}
    </div>
  );
};
