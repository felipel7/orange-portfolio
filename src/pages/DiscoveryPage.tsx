import { Container, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import SearchableProjects from '../components/SearchableProjects';
import api from '../services/apiClient';

export default function DiscoveryPage() {
  const fetchProjects = () => api.get('project/all').then(res => res.data);

  const { data: projects, error } = useQuery<Project[], Error>({
    queryKey: ['allProjects'],
    queryFn: fetchProjects,
  });

  if (error) return <p>{error.message}</p>;

  return (
    <Container maxWidth="lg" component="section">
      <Stack px={1}>
        <Typography
          component="h2"
          variant="h2"
          textAlign="center"
          maxWidth={744}
          mx="auto"
          marginTop={{ xs: '64px', md: '112px' }}
          marginBottom={{ xs: '40px', md: '120px' }}
        >
          Junte-se à comunidade de inovação, inspiração e descobertas,
          transformando experiências em conexões inesquecíveis
        </Typography>

        <SearchableProjects maxWidth={712} projects={projects || []} />
      </Stack>
      <Outlet />
    </Container>
  );
}
