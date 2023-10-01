import { Box, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Box
      sx={{
        color: '#424242',
        padding: 3,
        textAlign: 'center',
      }}
    >
      <Typography variant="body2">
        &copy; 2023 큐브데이터. All rights reserved.
      </Typography>
      <Typography variant="body2">
        큐브데이터 is not associated with NEXON Korea.
      </Typography>
      <Typography variant="body2">
        문의 / 오류제보 : cubedatahelp@gmail.com
      </Typography>
    </Box>
  );
};
