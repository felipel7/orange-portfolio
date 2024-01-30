import { Avatar, Box, Chip, Grid, Stack, Typography } from '@mui/material';
import { formatDate } from '../../utils/formatDate';

interface ProjectCardProps {
  project: Project;
  showTags: boolean;
}

export default function ProjectCard({ project, showTags }: ProjectCardProps) {
  return (
    <Grid item xs={12} sm={4} md={4}>
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
          <Typography color="neutral.110">
            {`${project.user.firstname} ${project.user.lastname} • ${formatDate(
              project.createdAt
            )}`}
          </Typography>
        </Box>

        {showTags && (
          <Box display="flex" gap={1}>
            {project.tags.split(',').map(tag => (
              <Chip
                key={tag}
                label={tag}
                sx={{ fontWeight: 500, color: 'primary' }}
              />
            ))}
          </Box>
        )}
      </Stack>
    </Grid>
  );
}
