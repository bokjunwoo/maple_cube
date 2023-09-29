import { Box, Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';

type CustomButtonUIType = {
  width: string;
  height: string;
  text: string;
  bgColor: string;
  color: string;
  variant: Variant | 'inherit';
  hoverBorder: string;
};

export const CustomButtonUI = ({
  width,
  height,
  text,
  bgColor,
  color,
  variant,
  hoverBorder,
}: CustomButtonUIType) => {
  return (
    <Box
      sx={{
        width,
        height,
        backgroundColor: bgColor,
        borderRadius: 3,
        cursor: 'pointer',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
          border: hoverBorder,
        },
      }}
    >
      <Typography
        variant={variant}
        sx={{
          color,
          fontWeight: 500,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};
