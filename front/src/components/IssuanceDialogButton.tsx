import { Box } from '@mui/material';
import { CustomButtonUI } from './ui/CustomButtonUI';
import { useState } from 'react';
import { IssuanceDialog } from './IssuanceDialog';

export const IssuanceDialogButton = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        onClick={handleClickOpen}
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CustomButtonUI
          width="100%"
          height="56px"
          text="API 키 발급 방법"
          bgColor="#EDF1D6"
          color="black"
          variant="subtitle1"
          hoverBorder="2px solid #819606"
        />
      </Box>

      <IssuanceDialog open={open} handleClose={handleClose} />
    </>
  );
};
