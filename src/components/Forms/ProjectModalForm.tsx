import {
  Box,
  Button,
  Grid,
  Modal,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import ImageCard from '../Cards/ImageCard';

interface ProjectModalFormProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const style = {
  position: 'absolute',
  top: { xs: '148px', md: '50%' },
  left: { md: '50%' },
  transform: { md: 'translate(-50%, -50%)' },
  width: '100%',
  maxWidth: '890px',
};

export default function ProjectModalForm({
  open = false,
  setOpen,
}: ProjectModalFormProps) {
  return (
    <Modal open={open} sx={{ overflowY: 'auto' }}>
      <Box sx={style} px={3}>
        <Grid
          bgcolor="background.paper"
          color="neutral.110"
          component="section"
          container
          gap={3}
          p={3}
        >
          <Typography flexBasis="100%" variant="h4">
            Adicionar projeto
          </Typography>
          <Grid
            item
            sx={{
              order: { xs: 2, md: 1 },
            }}
            maxWidth={390}
          >
            <ImageCard />
          </Grid>
          <Grid xs={12} md item sx={{ order: { xs: 1, md: 2 } }}>
            <ProjectForm />
          </Grid>
          <Box
            display="flex"
            flexBasis="100%"
            flexDirection="column"
            gap={2}
            order={3}
          >
            <Typography>Visualizar publicação</Typography>

            <Stack direction="row" gap={2}>
              <Button size="large" variant="contained" color="secondary">
                Salvar
              </Button>
              <Button
                color="primary"
                onClick={() => setOpen(false)}
                size="large"
                variant="contained"
              >
                Cancelar
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Box>
    </Modal>
  );
}

export function ProjectForm() {
  // TODO: controle dos campos
  // TODO: handleSubmit

  return (
    <form>
      <Stack spacing={2}>
        <TextField label="Título" />
        <TextField label="Tags" />
        <TextField label="Link" />
        <TextField multiline label="Descrição" rows={3} />
      </Stack>
    </form>
  );
}
