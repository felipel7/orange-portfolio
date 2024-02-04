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
import usePreviewProjectStore from '../../store/previewProjectStore';
import { formatDate, getCurrentMonthYear } from '../../utils/formatDate';

interface ProjectViewModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ProjectViewModal({
  open,
  onClose,
}: ProjectViewModalProps) {
  const { previewProject } = usePreviewProjectStore();

  previewProject.createdAt = previewProject.createdAt
    ? previewProject.createdAt
    : getCurrentMonthYear();

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
              <UserDetails
                date={previewProject.createdAt}
                user={previewProject.user}
              />
            </Box>
            <Box flex={1}>
              <Typography textAlign="center" variant="h4" color="neutral.120">
                {previewProject.title}
              </Typography>
            </Box>

            <Tags
              tags={previewProject.tags}
              display={{ xs: 'none', md: 'flex' }}
            />
          </Box>

          <Box
            component="img"
            src={previewProject.imageProject}
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
            <UserDetails
              date={previewProject.createdAt}
              user={previewProject.user}
            />

            <Tags
              tags={previewProject.tags}
              display={{ xs: 'flex', md: 'none' }}
            />
          </Box>

          <Typography mt={{ xs: 2, md: 7 }}>
            {previewProject.description}
          </Typography>

          <Box my={4}>
            <Typography>Download</Typography>
            <Link
              color="#608AE1"
              href={previewProject.link}
              rel="noopener"
              target="_blank"
              underline="none"
              sx={{ cursor: 'pointer' }}
            >
              {previewProject.link}
            </Link>
          </Box>
        </Stack>
      </Stack>
    </Modal>
  );
}

interface UserDetailsProps {
  user?: User;
  date: string;
}

function UserDetails({ user, date }: UserDetailsProps) {
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
          {`${user?.firstname} ${user?.lastname}`}
        </Typography>

        <Typography color="neutral.110">{formatDate(date)}</Typography>
      </Stack>
    </Box>
  );
}

interface TagsProps {
  tags: string[];
  [x: string]: unknown;
}

function Tags({ tags, ...rest }: TagsProps) {
  return (
    <Box justifyContent="flex-end" flex={1} gap={1} {...rest}>
      {tags?.map(tag => (
        <Chip key={tag} label={tag} sx={{ color: 'primary' }} />
      ))}
    </Box>
  );
}
