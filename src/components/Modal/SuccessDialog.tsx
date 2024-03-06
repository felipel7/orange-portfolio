import { CheckCircle } from '@mui/icons-material';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface SuccessDialogProps {
  label: string;
  open: boolean;
}

export default function SuccessDialog({ label, open }: SuccessDialogProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <Dialog
      open={open}
      aria-labelledby="success-dialog-title"
      aria-describedby="success-dialog-description"
    >
      <DialogTitle id="success-dialog-title" sx={{ pt: 4 }}>
        <Typography
          variant="h5"
          component="span"
          color="neutral.110"
          textAlign="center"
          sx={{ display: 'block', maxWidth: 255 }}
        >
          {label}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id="success-dialog-description"
          sx={{ textAlign: 'center' }}
        >
          <CheckCircle
            sx={{
              color: 'green',
              width: 40,
              height: 40,
            }}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ p: 4, pt: 0 }}>
        <Button
          autoFocus
          color="secondary"
          fullWidth
          size="large"
          variant="contained"
          onClick={handleClick}
        >
          Voltar para projetos
        </Button>
      </DialogActions>
    </Dialog>
  );
}
