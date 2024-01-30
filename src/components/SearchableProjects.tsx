import { PhotoLibrary } from '@mui/icons-material';
import { Grid, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import ProjectCard from './Cards/ProjectCard';
import SearchBar from './SearchBar';

interface SearchableProjectsProps {
  action?: () => void;
  searchBarLabel?: string;
  maxWidth?: number;
  showTags?: boolean;
}

export default function SearchableProjects({
  action,
  searchBarLabel,
  maxWidth,
  showTags = false,
}: SearchableProjectsProps) {
  const [projects, setProjects] = useState<Project[]>(mockExample);
  const [query, setQuery] = useState('');

  const filteredProjects = projects.filter(project => {
    return project.tags.toLowerCase().includes(query.toLowerCase());
  });

  useEffect(() => {
    // TODO: fetch dos projetos do usuario
    setProjects(mockExample);
  }, []);

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

// TODO: delete mockExample
const mockExample = [
  {
    id: 1,
    title: 'Title project',
    description: 'Description project',
    link: 'https://github.com',
    imageProject: 'https://picsum.photos/200/300',
    tags: 'UX, frontend',
    createdAt: '2024-01-30',
    user: {
      id: 2,
      firstname: 'Camila',
      lastname: 'Soares',
      email: 'email@email.com',
      profileImageAddress: 'https://picsum.photos/200/300',
    },
  },
];
