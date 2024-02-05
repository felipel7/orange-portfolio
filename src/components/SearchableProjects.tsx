import { PhotoLibrary } from '@mui/icons-material';
import { Grid, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import ProjectCard from './Cards/ProjectCard';
import SearchBar from './SearchBar';

interface SearchableProjectsProps {
  action?: () => void;
  searchBarLabel?: string;
  maxWidth?: number;
  showTags?: boolean;
  projects: Project[];
}

export default function SearchableProjects({
  action,
  searchBarLabel,
  maxWidth,
  showTags = false,
  projects,
}: SearchableProjectsProps) {
  const [query, setQuery] = useState('');

  const filteredProjects = projects?.filter(project => {
    return project.tags.toLowerCase().includes(query.toLowerCase());
  });

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
  };

  return (
    <>
      <SearchBar
        label={searchBarLabel}
        onSearch={handleSearch}
        maxWidth={maxWidth}
      />

      <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }} mb={3}>
        {projects.length === 0 && action ? (
          <Grid item>
            <Stack
              alignItems="center"
              bgcolor="primary.100"
              borderRadius={1}
              color="neutral.120"
              gap={1}
              height={258}
              justifyContent="center"
              maxWidth={389}
              onClick={action}
              px={{ xs: 4, sm: 8 }}
              sx={{ cursor: 'pointer' }}
            >
              <PhotoLibrary sx={{ fill: '#323232', height: 46, width: 46 }} />

              <Typography>Adicione seu primeiro projeto</Typography>

              <Typography fontSize={14}>
                Compartilhe seu talento com milhares de pessoas
              </Typography>
            </Stack>
          </Grid>
        ) : (
          <ProjectList showTags={showTags} projects={filteredProjects} />
        )}
      </Grid>
    </>
  );
}

interface ProjectListProps {
  projects: Project[];
  showTags: boolean;
}

export function ProjectList({ projects, showTags }: ProjectListProps) {
  if (projects.length === 0)
    return (
      <Grid item>
        <Typography>Nenhum projeto encontrado...</Typography>
      </Grid>
    );

  return (
    <>
      {projects.map(project => (
        <ProjectCard showTags={showTags} project={project} key={project.id} />
      ))}
    </>
  );
}
