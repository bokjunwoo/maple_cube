import {
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent,
  DialogActions,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type IssuanceDialogType = {
  open: boolean;
  handleClose: () => void;
};

export const IssuanceDialog = ({ open, handleClose }: IssuanceDialogType) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      fullScreen={fullScreen}
      maxWidth="md"
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
        <img
          src="./images/key_manual.png"
          alt="키 발급 매뉴얼"
          style={{ maxWidth: '100%' }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>닫기</Button>
      </DialogActions>
    </Dialog>
  );
};
