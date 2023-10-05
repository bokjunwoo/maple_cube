import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent,
  DialogActions,
  Button,
  useTheme,
  useMediaQuery,
  Box,
  CircularProgress,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type IssuanceDialogType = {
  open: boolean;
  handleClose: () => void;
};

export const IssuanceDialog = ({ open, handleClose }: IssuanceDialogType) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      fullScreen={fullScreen}
      maxWidth="md"
      fullWidth={true}
    >
      <DialogTitle
        sx={{ m: 0, p: 2, fontSize: '18px' }}
        id="customized-dialog-title"
      >
        Nexon Developers API키 발급 방법
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 12,
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers sx={{ p: 0 }}>
        {!imageLoaded && (
          <Box
            sx={{
              height: fullScreen ? '100%' : '80vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CircularProgress />
          </Box>
        )}
        <img
          src="./images/key_manual.png"
          alt="키 발급 매뉴얼"
          style={{
            maxWidth: '100%',
          }}
          onLoad={handleImageLoad}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>닫기</Button>
      </DialogActions>
    </Dialog>
  );
};
