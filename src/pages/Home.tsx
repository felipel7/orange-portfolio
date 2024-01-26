import { PhotoLibrary } from '@mui/icons-material';
import {
  Autocomplete,
  Box,
  Container,
  ImageList,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import UserCard from '../components/Cards/UserCard';
import ProjectModalForm from '../components/Forms/ProjectModalForm';

export default function HomePage() {
  const [openFormModal, setOpenFormModal] = useState(false);

  return (
    <>
      <Container maxWidth="xl">
        <Stack px={1}>
          <Box mt={{ xs: 7, sm: '112px' }} mb={{ xs: 5, sm: 7 }}>
            <UserCard />
          </Box>
          <AppSearch />

          <ImageList
            sx={{
              gridAutoFlow: 'column',
              gridTemplateColumns: {
                xs: 'repeat(auto-fill, minmax(300px, 1fr)) !important',
                sm: 'repeat(auto-fill, 389px) !important',
              },
              columnGap: '24px !important',
              height: '258px',
            }}
          >
            {/* TODO: integrar os cards com o backend... 
          {data.map(image => (
            <ImageListItem>
              <img src={image} />
            </ImageListItem>
          ))} */}
            <Box
              bgcolor="#E6E9F2"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap={1}
              borderRadius={1}
              sx={{ height: 258, cursor: 'pointer' }}
              px={{ xs: 4, sm: 8 }}
              onClick={() => setOpenFormModal(true)}
            >
              <PhotoLibrary fontSize="large" sx={{ fill: '#323232' }} />
              <Typography>Adicione seu primeiro projeto</Typography>
              <Typography fontSize={14}>
                Compartilhe seu talento com milhares de pessoas
              </Typography>
            </Box>
          </ImageList>
        </Stack>
      </Container>
      <ProjectModalForm open={openFormModal} setOpen={setOpenFormModal} />
    </>
  );
}

function AppSearch() {
  return (
    <Typography variant="h6">
      Meus Projetos
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={[]}
        renderInput={params => <TextField {...params} label="Buscar tags" />}
        sx={{ maxWidth: 512, marginTop: 2, marginBottom: { xs: 3, sm: 5 } }}
      />
    </Typography>
  );
}
