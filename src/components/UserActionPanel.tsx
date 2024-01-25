import { Avatar, Button, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import ProjectFormModal from './Forms/ProjectFormModal';

export default function UserActionPanel() {
  const [openFormModal, setOpenFormModal] = useState(false);

  return (
    <>
      <Stack
        alignItems="center"
        gap={{ xs: 2, sm: 4 }}
        mx="auto"
        width="fit-content"
        sx={{ flexDirection: { sm: 'row' } }}
      >
        <Avatar
          sx={{
            height: 122,
            width: 122,
            borderRadius: '100%',
            background: 'tomato',
          }}
        />

        <Stack
          justifyContent="space-between"
          sx={{
            height: { xs: 100, sm: 122 },
            marginLeft: { xs: 2, sm: 0 },
          }}
        >
          <Typography variant="h4">Camila Soares</Typography>

          <Typography
            lineHeight={1}
            mb={1}
            color="#303133"
            sx={{ opacity: 0.5 }}
          >
            Brasil
          </Typography>

          <Button size="large" onClick={() => setOpenFormModal(true)} disabled>
            Adicionar Projeto
          </Button>
        </Stack>
      </Stack>
      <ProjectFormModal open={openFormModal} setOpen={setOpenFormModal} />
    </>
  );
}
