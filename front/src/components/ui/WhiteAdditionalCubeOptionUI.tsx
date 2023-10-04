import { Typography, Box, Avatar } from '@mui/material';
import { CubeHistory } from '../../api/api';
import { cubeTypeInfo } from '../../constants/cubeGuide';

type WhiteAdditionalCubeOptionUIType = {
  data: CubeHistory;
};

export const WhiteAdditionalCubeOptionUI = ({
  data,
}: WhiteAdditionalCubeOptionUIType) => {
  return (
    <div>
      <Typography variant="h5">before</Typography>
      {data.before_additional_potential_options.map((option, i) => {
        return (
          <Box
            key={i}
            sx={{
              display: 'flex',
            }}
          >
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
                pb: 0.2,
              }}
            >
              {cubeTypeInfo[option.grade as string].name}
            </Avatar>

            <Typography variant="body1">{option.value}</Typography>
          </Box>
        );
      })}
      <hr />
      <Typography variant="h5">after</Typography>
      {data.after_additional_potential_options.map((option, i) => {
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
                pb: 0.2,
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
