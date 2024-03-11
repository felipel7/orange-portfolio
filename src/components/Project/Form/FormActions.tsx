import { Button, CircularProgress, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface Props {
  formId: string;
  isSubmitting: boolean;
}

export default function FormActions({ formId, isSubmitting }: Props) {
  const navigate = useNavigate();

  return (
    <Stack direction="row" gap={2} flexWrap="wrap">
      <Button
        color="secondary"
        disabled={isSubmitting}
        form={formId}
        size="large"
        type="submit"
        variant="contained"
      >
        {isSubmitting && <CircularProgress size={16} sx={{ mr: 1 }} />}
        {isSubmitting ? 'Salvando...' : 'Salvar'}
      </Button>
      <Button
        color="primary"
        onClick={() => navigate('/')}
        size="large"
        variant="contained"
      >
        Cancelar
      </Button>
    </Stack>
  );
}
