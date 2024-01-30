import { PhotoLibrary } from '@mui/icons-material';
import { Avatar, Box, Chip, Grid, Stack, Typography } from '@mui/material';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import SearchBar from './SearchBar';

interface ProjectListProps {
  setOpenFormModal: Dispatch<SetStateAction<boolean>>;
}

export default function ProjectList({ setOpenFormModal }: ProjectListProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [query, setQuery] = useState('');

  const filteredProjects = projects.filter(project => {
    return project.tags.toLowerCase().includes(query.toLowerCase());
  });

  useEffect(() => {
    // TODO: fetch dos projetos do usuario
    setProjects([]);
  }, []);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />

      <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }} mb={3}>
        {projects.length === 0 ? (
          <Grid item>
            <Stack
              alignItems="center"
              justifyContent="center"
              bgcolor="primary.100"
              borderRadius={1}
              color="neutral.120"
              gap={1}
              px={{ xs: 4, sm: 8 }}
              height={258}
              maxWidth={389}
              onClick={() => setOpenFormModal(true)}
              sx={{ cursor: 'pointer' }}
            >
              <PhotoLibrary sx={{ fill: '#323232', height: 46, width: 46 }} />

              <Typography>Adicione seu primeiro projeto</Typography>

              <Typography fontSize={14}>
                Compartilhe seu talento com milhares de pessoas
              </Typography>
            </Stack>
          </Grid>
        ) : filteredProjects.length === 0 ? (
          <Grid item>
            <Typography>Nenhum projeto encontrado...</Typography>
          </Grid>
        ) : (
          <Projects projects={filteredProjects} />
        )}
      </Grid>
    </>
  );
}

function Projects({ projects }: { projects: Project[] }) {
  return (
    <>
      {projects.map(project => (
        <Grid item xs={12} sm={4} md={4} key={project.id}>
          <Box
            component="img"
            src={project.imageProject}
            alt={project.title}
            borderRadius={1}
            sx={{
              objectFit: 'cover',
              height: '258px',
              width: '100%',
            }}
          />
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mt={1}
          >
            <Box display="flex" gap={1}>
              <Avatar sx={{ width: 24, height: 24 }} />
              <Typography>Camila Soares • 12/23</Typography>
            </Box>
            <Box display="flex" gap={1}>
              {project.tags.split(',').map(tag => (
                <Chip
                  key={tag}
                  label={tag}
                  sx={{ fontWeight: 500, color: 'primary' }}
                />
              ))}
            </Box>
          </Stack>
        </Grid>
      ))}
    </>
  );
}
