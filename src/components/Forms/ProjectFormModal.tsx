import { PhotoLibrary } from '@mui/icons-material';
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

interface ProjectFormModalProps {
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

export default function ProjectFormModal({
  open = false,
  setOpen,
}: ProjectFormModalProps) {
  return (
    <Modal open={open} sx={{ outline: 'none', border: 'none' }}>
      <Box sx={style} px={3}>
        <Grid container bgcolor="background.paper" p={3} gap={3}>
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
            <Stack sx={{ height: '100%' }} spacing={1}>
              <Typography color="#515255">
                Selecione o conteúdo que você deseja fazer upload
              </Typography>

              <Stack
                justifyContent="center"
                alignItems="center"
                gap={1}
                borderRadius={1}
                px={{ xs: 4, sm: 8 }}
                height="100%"
                bgcolor="#E6E9F2"
              >
                <PhotoLibrary sx={{ fill: '#323232', height: 46, width: 46 }} />

                <Typography fontSize={14} color="#303133">
                  Compartilhe seu talento com milhares de pessoas
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={12} md item sx={{ order: { xs: 1, md: 2 } }}>
            <ProjectForm />
          </Grid>
          <Box
            display="flex"
            gap={2}
            flexBasis="100%"
            order={3}
            flexDirection="column"
          >
            <Typography color="#515255">Visualizar publicação</Typography>

            <Stack direction="row" gap={2}>
              <Button variant="contained">Salvar</Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setOpen(false)}
                disabled
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
