import { Box, Container, Stack } from '@mui/material';
import { useState } from 'react';
import UserCard from '../components/Cards/UserCard';
import ProjectModalForm from '../components/Forms/ProjectModalForm';
import ProjectList from '../components/ProjectList';

export default function HomePage() {
  const [openFormModal, setOpenFormModal] = useState(false);

  return (
    <>
      <Container maxWidth="lg">
        <Stack px={1}>
          <Box mt={{ xs: 7, sm: '112px' }} mb={{ xs: 5, sm: 7 }}>
            <UserCard />
          </Box>
          <ProjectList setOpenFormModal={setOpenFormModal} />
        </Stack>
      </Container>
      <ProjectModalForm open={openFormModal} setOpen={setOpenFormModal} />
    </>
  );
}
