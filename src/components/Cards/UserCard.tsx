import { Avatar, Button, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import ProjectModalForm from '../Forms/ProjectModalForm';

export default function UserCard() {
  const [openFormModal, setOpenFormModal] = useState(false);

  return (
    <>
      <Stack
        alignItems="center"
        gap={{ xs: 2, sm: 4 }}
        mx="auto"
        sx={{ flexDirection: { sm: 'row' } }}
        width="fit-content"
      >
        <Avatar
          sx={{
            height: 122,
            width: 122,
          }}
          variant="circular"
        />

        <Stack
          justifyContent="space-between"
          sx={{
            gap: { xs: 1, sm: 0 },
            height: { xs: 100, sm: 122 },
            marginLeft: { xs: 2, sm: 0 },
          }}
        >
          <Typography
            color="neutral.120"
            component="h3"
            lineHeight={1}
            variant="h4"
          >
            Camila Soares
          </Typography>

          <Typography color="neutral.130" sx={{ opacity: 0.5 }}>
            Brasil
          </Typography>

          <Button
            color="secondary"
            onClick={() => setOpenFormModal(true)}
            size="large"
            variant="contained"
          >
            Adicionar Projeto
          </Button>
        </Stack>
      </Stack>
      <ProjectModalForm open={openFormModal} setOpen={setOpenFormModal} />
    </>
  );
}
