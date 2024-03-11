import { Box, Link, Stack, Typography } from '@mui/material';
import { RenderTags } from './RenderTags';
import UserDetails from './UserDetails';

export default function ViewProjectDetails({ project }: { project: IProject }) {
  return (
    <Stack alignSelf="center" sx={{ maxWidth: 838, width: '100%' }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        alignSelf="center"
        sx={{ width: '100%' }}
      >
        <Box display={{ xs: 'none', md: 'block' }} flex={1}>
          <UserDetails user={project.user} />
        </Box>
        <Box>
          <Typography textAlign="center" variant="h4" color="neutral.120">
            {project.title}
          </Typography>
        </Box>

        <RenderTags tags={project.tags} display={{ xs: 'none', md: 'flex' }} />
      </Box>

      <Box
        component="img"
        src={project.images?.length && project.images[0].url}
        sx={{
          width: '100%',
          maxHeight: { xs: 250, sm: 450 },
          maxWidth: 838,
          objectFit: 'cover',
          borderRadius: 1,
          mt: 4,
          mb: 1,
        }}
        alignSelf="center"
      />
      <Box display={{ xs: 'flex', md: 'none' }}>
        <UserDetails user={project.user} />

        <RenderTags tags={project.tags} display={{ xs: 'flex', md: 'none' }} />
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
