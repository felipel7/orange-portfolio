import { Avatar, Box, Card, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../utils/dateUtils';
import { getUserFullName } from '../../utils/userUtils';

export default function ProjectCard({ project }: { project: IProject }) {
  const navigate = useNavigate();
  const fullName = getUserFullName(project.user);

  const handleImageClick = () => {
    navigate('/descobrir/' + project.id);
  };

  return (
    <Card sx={{ borderRadius: 1, boxShadow: 'none' }}>
      <Box
        component="img"
        src={project.images[0]?.url}
        alt={project.title}
        onClick={handleImageClick}
        sx={{
          objectFit: 'cover',
          objectPosition: 'top',
          width: '100%',
          maxWidth: '389px',
          height: '258px',
        }}
      />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mt={1}
      >
        <Box display="flex" gap={1}>
          <Avatar
            sx={{ width: 24, height: 24 }}
            src={project.user.picture}
            alt={fullName}
          />
          <Typography color="neutral.110">
            {`${fullName} • ${formatDate(project.createdAt)}`}
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
}
