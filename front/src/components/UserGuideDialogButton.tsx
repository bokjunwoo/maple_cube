import { Box } from '@mui/material';
import { CustomButtonUI } from './ui/CustomButtonUI';
import { useState } from 'react';
import { UserGuideDialog } from './UserGuideDialog';

export const UserGuideDialogButton = () => {
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
          text="이용 가이드"
          bgColor="#ffeecc"
          color="black"
          variant="subtitle1"
          hoverBorder="2px solid #fcbc3d"
        />
      </Box>

      <UserGuideDialog open={open} handleClose={handleClose} />
    </>
  );
};
