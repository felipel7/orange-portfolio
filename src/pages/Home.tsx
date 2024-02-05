import { Box, Container, Stack } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import UserCard from '../components/Cards/UserCard';
import ProjectModalForm from '../components/Forms/ProjectForm/ProjectModalForm';
import SearchableProjects from '../components/SearchableProjects';
import api from '../services/apiClient';

export default function HomePage() {
  const [openFormModal, setOpenFormModal] = useState(false);

  const fetchProjects = () => api.get('project').then(res => res.data);

  const { data: projects, error } = useQuery<Project[], Error>({
    queryKey: ['userProjects'],
    queryFn: fetchProjects,
    staleTime: 0,
  });

  const handleFormModalClose = () => {
    setOpenFormModal(false);
  };

  if (error) return <p>{error.message}</p>;

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
            projects={projects || []}
            showTags
          />
        </Stack>
      </Container>
      <ProjectModalForm open={openFormModal} onClose={handleFormModalClose} />
    </>
  );
}
