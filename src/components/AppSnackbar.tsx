import { Alert, Snackbar } from '@mui/material';

export default function AppSnackbar({
  open,
  onClose,
  type,
  label,
}: SnackbarType) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      autoHideDuration={2400}
      onClose={onClose}
      sx={{ px: 2 }}
    >
      <Alert
        onClose={onClose}
        severity={type}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {label}
      </Alert>
    </Snackbar>
  );
}
