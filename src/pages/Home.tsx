import { Container, Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import UserCard from '../components/Cards/UserCard';
import UserProjectsList from '../components/List/UserProjectList';
import SearchBar from '../components/shared/SearchBar';

export default function HomePage() {
  return (
    <Container maxWidth="lg">
      <Stack mt={{ xs: 7, sm: '112px' }} mb={{ xs: 5, sm: 7 }}>
        <UserCard />
      </Stack>

      <SearchBar label="Meus Projetos" />

      <UserProjectsList />
      <Outlet />
    </Container>
  );
}
