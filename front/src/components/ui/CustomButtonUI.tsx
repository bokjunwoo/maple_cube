import { Box, Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';

type CustomButtonUIType = {
  width: string;
  height: string;
  text: string;
  bgColor: string;
  color: string;
  variant: Variant | 'inherit';
};

export const CustomButtonUI = ({
  width,
  height,
  text,
  bgColor,
  color,
  variant,
}: CustomButtonUIType) => {
  return (
    <Box
      sx={{
        width,
        height,
        backgroundColor: bgColor,
        borderRadius: 3,
        cursor: 'pointer',
      }}
    >
      <Typography
        variant={variant}
        sx={{ textAlign: 'center', lineHeight: height, color }}
      >
        {text}
      </Typography>
    </Box>
  );
};
