import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Typography from "@mui/material/Typography";
import { green } from "@mui/material/colors";

type Props = {
  open: boolean;
  onClose: () => void;
  text: string;
};

export default function SuccessDialog({ open, onClose, text }: Props) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="success-dialog-title"
      aria-describedby="success-dialog-description"
    >
      <DialogTitle id="success-dialog-title" sx={{ textAlign: "center" }}>
        <Typography color="textPrimary" variant="h6">
          {text}
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ textAlign: "center" }}>
        <CheckCircleIcon sx={{ color: green[500], fontSize: 60 }} />
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        <Button onClick={onClose} variant="contained" color="primary">
          Voltar para Projetos
        </Button>
      </DialogActions>
    </Dialog>
  );
}
