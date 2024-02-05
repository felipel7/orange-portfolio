import { Container, Stack, Typography } from '@mui/material';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Stack
          component="section"
          spacing={2}
          sx={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h1">
            Oops...
          </Typography>
          <Typography component="p" variant="h5">
            {isRouteErrorResponse(error)
              ? 'Pagina inválida'
              : 'Desculpe, ocorreu um erro inesperado no servidor...'}
          </Typography>
        </Stack>
      </Container>
    </>
  );
}
