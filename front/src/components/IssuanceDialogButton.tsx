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
          text="API키 발급 방법"
          bgColor="#ffeecc"
          color="black"
          variant="h6"
          hoverBorder="2px solid #fcbc3d"
        />
      </Box>

      <IssuanceDialog open={open} handleClose={handleClose} />
    </>
  );
};
