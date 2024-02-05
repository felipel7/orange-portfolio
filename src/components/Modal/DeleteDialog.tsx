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
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/apiClient';

interface DeleteDialogProps {
  open: boolean;
  setOpen: (state: boolean) => void;
  projectId: number;
}

export default function DeleteDialog({
  open = false,
  setOpen,
  projectId,
}: DeleteDialogProps) {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = async () => {
    try {
      await api.delete('project/' + projectId);
      setOpen(false);
      setConfirmOpen(true);
    } catch (e) {
      setOpen(false);
      console.error(e);
    }
  };

  const handleConfirmClose = () => {
    setConfirmOpen(false);
    navigate(0);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ pt: 5 }}>
          <Typography
            component="span"
            variant="h5"
            color="neutral.110"
            sx={{ px: 2 }}
          >
            Deseja Excluir?
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{ px: 2 }}>
            <Typography
              component="span"
              color="neutral.110"
              sx={{ display: 'block', maxWidth: 337, my: 1 }}
            >
              Se você prosseguir irá excluir o projeto do seu portfólio
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            p: 5,
            pt: 0,
            display: 'flex',
            gap: 1,
            justifyContent: 'flex-start',
          }}
        >
          <Button
            autoFocus
            color="secondary"
            onClick={handleConfirm}
            size="large"
            variant="contained"
          >
            Excluir
          </Button>
          <Button
            color="primary"
            onClick={handleClose}
            size="large"
            variant="contained"
          >
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={confirmOpen}
        onClose={handleConfirmClose}
        aria-labelledby="confirm-dialog-title"
        aria-describedby="confirm-dialog-description"
      >
        <DialogTitle id="confirm-dialog-title" sx={{ pt: 4 }}>
          <Typography
            variant="h5"
            component="span"
            color="neutral.110"
            textAlign="center"
            sx={{ display: 'block', maxWidth: 255 }}
          >
            Projeto deletado com sucesso!
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="confirm-dialog-description"
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
            onClick={handleConfirmClose}
            size="large"
            variant="contained"
          >
            Voltar para projetos
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
