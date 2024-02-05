import { Close } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Chip,
  IconButton,
  Link,
  Modal,
  Stack,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import usePreviewProjectStore from '../../store/previewProjectStore';
import userStore from '../../store/userStore';
import { formatDate, getCurrentMonthYear } from '../../utils/dateUtils';
import { getUserFullName } from '../../utils/userUtils';

interface ProjectViewModalProps {
  open: boolean;
  onClose: () => void;
  projectForPreview?: Project;
}

export default function ProjectViewModal({
  open,
  onClose,
  projectForPreview,
}: ProjectViewModalProps) {
  const [project, setProject] = useState<Project | undefined>(
    projectForPreview
  );
  const { previewProject } = usePreviewProjectStore();
  const { user } = userStore();

  useEffect(() => {
    if (!projectForPreview) {
      previewProject.createdAt = previewProject.createdAt
        ? previewProject.createdAt
        : getCurrentMonthYear();

      setProject({
        ...previewProject,
        user: { ...previewProject.user, ...user },
      });
    }
  }, [previewProject, projectForPreview, user]);

  if (!project) return;

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        maxWidth: 1042,
        overflowY: 'auto',
        margin: 'auto',
        height: '100vh',
      }}
    >
      <Stack
        bgcolor="background.paper"
        sx={{
          p: 2,
          width: '100%',
          mt: { xs: '148px', md: 0 },
          borderRadius: { xs: 4, md: 0 },
        }}
      >
        <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={onClose}>
            <Close sx={{ fill: '#323232' }} />
          </IconButton>
        </Box>
        <Stack alignSelf="center" sx={{ maxWidth: 838, width: '100%' }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            alignSelf="center"
            sx={{ width: '100%' }}
          >
            <Box display={{ xs: 'none', md: 'block' }} flex={1}>
              <UserDetails date={project.createdAt} user={project.user} />
            </Box>
            <Box flex={1}>
              <Typography textAlign="center" variant="h4" color="neutral.120">
                {project.title}
              </Typography>
            </Box>

            <Tags tags={project.tags} display={{ xs: 'none', md: 'flex' }} />
          </Box>

          <Box
            component="img"
            src={project.imageProject}
            sx={{
              width: '100%',
              maxHeight: { xs: 258, sm: 585 },
              maxWidth: 838,
              objectFit: 'cover',
              borderRadius: 1,
              mt: 4,
              mb: 1,
            }}
            alignSelf="center"
          />
          <Box display={{ xs: 'flex', md: 'none' }}>
            <UserDetails date={project.createdAt} user={project.user} />

            <Tags tags={project.tags} display={{ xs: 'flex', md: 'none' }} />
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
      </Stack>
    </Modal>
  );
}

interface UserDetailsProps {
  user: User;
  date: string;
}

function UserDetails({ user, date }: UserDetailsProps) {
  const fullname = getUserFullName(user);
  const formattedDate = formatDate(date);

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Avatar variant="circular" sx={{ width: 40, height: 40 }} />
      <Stack
        direction={{ xs: 'row', md: 'column' }}
        spacing={{ xs: 1, md: 0 }}
        flexWrap="wrap"
      >
        <Typography
          fontWeight={{ xs: 400, md: 500 }}
          color={{ xs: 'neutral.110', md: 'neutral.120' }}
        >
          {fullname}
        </Typography>

        <Typography color="neutral.110">{formattedDate}</Typography>
      </Stack>
    </Box>
  );
}

interface TagsProps {
  tags: string | string[];
  [x: string]: unknown;
}

function Tags({ tags, ...rest }: TagsProps) {
  if (!tags) return;

  const tagsArray = Array.isArray(tags) ? tags : tags.split(',');

  return (
    <Box justifyContent="flex-end" flex={1} gap={1} {...rest}>
      {tagsArray?.map(tag => (
        <Chip key={tag} label={tag} sx={{ color: 'primary' }} />
      ))}
    </Box>
  );
}
