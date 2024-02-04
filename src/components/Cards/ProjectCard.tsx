import { Avatar, Box, Chip, Grid, Stack, Typography } from '@mui/material';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../utils/dateUtils';
import { getUserFullName } from '../../utils/userUtils';
import ProjectOptionsMenu from '../ProjectOptionsMenu';

interface ProjectCardProps {
  project: Project;
  showTags: boolean;
}

export default function ProjectCard({ project, showTags }: ProjectCardProps) {
  const navigate = useNavigate();
  const fullName = useMemo(
    () => getUserFullName(project.user!),
    [project.user]
  );

  const handleImageClick = () => {
    navigate('/descobrir/' + project.id);
  };

  return (
    <Grid item xs={12} sm={4} md={4} position="relative">
      <Box
        component="img"
        src={project.imageProject}
        alt={project.title}
        borderRadius={1}
        onClick={handleImageClick}
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
        <Box display="flex" gap={1} onClick={() => console.log(1)}>
          <Avatar sx={{ width: 24, height: 24 }} />
          <Typography color="neutral.110">
            {`${fullName} • ${formatDate(project.createdAt)}`}
          </Typography>
        </Box>

        {showTags && (
          <>
            <Box display="flex" gap={1}>
              {project.tags.split(',').map(tag => (
                <Chip
                  key={tag}
                  label={tag}
                  sx={{ fontWeight: 500, color: 'primary' }}
                />
              ))}
            </Box>
            <ProjectOptionsMenu project={project} />
          </>
        )}
      </Stack>
    </Grid>
  );
}
