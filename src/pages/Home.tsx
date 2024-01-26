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
import ImageCard from '../components/Cards/ImageCard';
import UserCard from '../components/Cards/UserCard';
import ProjectModalForm from '../components/Forms/ProjectModalForm';

export default function HomePage() {
  const [openFormModal, setOpenFormModal] = useState(false);

  return (
    <>
      <Container maxWidth="lg">
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
            <ImageCard isEmpty={true} action={() => setOpenFormModal(true)} />
          </ImageList>
        </Stack>
      </Container>
      <ProjectModalForm open={openFormModal} setOpen={setOpenFormModal} />
    </>
  );
}

function AppSearch() {
  return (
    <>
      <Typography
        color="neutral.130"
        component="h4"
        sx={{ opacity: 0.6 }}
        variant="h6"
      >
        Meus Projetos
      </Typography>
      <Autocomplete
        freeSolo
        id="free-solo-demo"
        options={[]}
        renderInput={params => <TextField {...params} label="Buscar tags" />}
        sx={{ maxWidth: 512, marginTop: 2, marginBottom: { xs: 3, sm: 5 } }}
      />
    </>
  );
}
