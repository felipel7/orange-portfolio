import { Container, Typography } from '@mui/material';
import ProjectsList from '../components/List/ProjectsList';
import SearchBar from '../components/shared/SearchBar';

export default function ExplorePage() {
  return (
    <Container maxWidth="lg" component="section">
      <Typography
        component="h2"
        variant="h2"
        textAlign="center"
        maxWidth={744}
        mx="auto"
        px={1}
        marginTop={{ xs: '64px', md: '112px' }}
        marginBottom={{ xs: '40px', md: '120px' }}
      >
        Junte-se à comunidade de inovação, inspiração e descobertas,
        transformando experiências em conexões inesquecíveis
      </Typography>

      <SearchBar maxWidth={723} />

      <ProjectsList />
    </Container>
  );
}
