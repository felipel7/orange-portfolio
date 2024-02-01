import { Box, Container, Stack } from '@mui/material';
import { useState } from 'react';
import UserCard from '../components/Cards/UserCard';
import ProjectModalForm from '../components/Forms/ProjectForm/ProjectModalForm';
import SearchableProjects from '../components/SearchableProjects';

export default function HomePage() {
  const [openFormModal, setOpenFormModal] = useState(false);

  const handleFormModalClose = () => {
    setOpenFormModal(false);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Stack px={1}>
          <Box mt={{ xs: 7, sm: '112px' }} mb={{ xs: 5, sm: 7 }}>
            <UserCard />
          </Box>
          <SearchableProjects
            action={() => setOpenFormModal(true)}
            searchBarLabel="Meus Projetos"
            showTags
          />
        </Stack>
      </Container>
      <ProjectModalForm open={openFormModal} onClose={handleFormModalClose} />
    </>
  );
}
