import { Box, Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';

type InstructionsType = {
  contents: string[];
  variant: Variant | 'inherit';
};

export const InstructionsUI = ({ contents, variant }: InstructionsType) => {
  return (
    <Box sx={{ mt: 1, mb: 1 }}>
      {contents.map((contents, index) => (
        <Box key={index} sx={{ display: 'inline-flex' }}>
          <Typography variant={variant} sx={{ display: 'inline-block', mr: 1 }}>
            ❖
          </Typography>
          <Typography variant={variant}>{contents}</Typography>
        </Box>
      ))}
    </Box>
  );
};
