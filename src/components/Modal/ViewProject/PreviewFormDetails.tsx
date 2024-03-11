import { Box, Link, Stack, Typography } from '@mui/material';
import useCurrentUser from '../../../hooks/useCurrentUser';
import useProjectStore from '../../../store/projectPreviewStore';
import { RenderFormTags } from './RenderTags';
import UserDetails from './UserDetails';
import { StyledPreviewImage } from './styles';

export default function PreviewFormDetails() {
  const { project } = useProjectStore();
  const { data: user } = useCurrentUser();

  if (!user) return;

  return (
    <Stack alignSelf="center" sx={{ maxWidth: 838, width: '100%' }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        alignSelf="center"
        sx={{ width: '100%' }}
      >
        <Box display={{ xs: 'none', md: 'block' }}>
          <UserDetails user={user} />
        </Box>
        <Box flex={1}>
          <Typography textAlign="center" variant="h4" color="neutral.120">
            {project.title}
          </Typography>
        </Box>

        <RenderFormTags
          tags={project?.tags}
          display={{ xs: 'none', md: 'flex' }}
        />
      </Box>

      <StyledPreviewImage src={project.images![0]} />
      <Box display={{ xs: 'flex', md: 'none' }}>
        <UserDetails user={user} />

        <RenderFormTags
          tags={project?.tags}
          display={{ xs: 'flex', md: 'none' }}
        />
      </Box>

      <Typography mt={{ xs: 2, md: 7 }}>{project.description}</Typography>

      <Box my={4}>
        <Typography>Download</Typography>
        <Link
          color="#608AE1"
          href={project.link}
          rel="noopener"
          target="_blank"
          underline="none"
          sx={{ cursor: 'pointer' }}
        >
          {project.link}
        </Link>
      </Box>
    </Stack>
  );
}
