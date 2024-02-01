import { Container, Stack, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import SearchableProjects from '../components/SearchableProjects';

export default function DiscoveryPage() {
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

        <SearchableProjects maxWidth={712} />
      </Stack>
      <Outlet />
    </Container>
  );
}
