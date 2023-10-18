import { Dialog, DialogTitle, DialogActions, Button } from '@mui/material';

type OneMoreQuestionDialogType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const OneMoreQuestionDialog = ({
  open,
  setOpen,
}: OneMoreQuestionDialogType) => {
  const handleClose = () => {
    setOpen(false);
  };

  const handleRedirect = () => {
    setOpen(false);
    window.location.reload();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        다시 검색을 하실 건가요?
      </DialogTitle>

      <DialogActions>
        <Button onClick={handleClose}>아니요</Button>
        <Button onClick={handleRedirect} sx={{ color: 'red' }}>
          네
        </Button>
      </DialogActions>
    </Dialog>
  );
};
