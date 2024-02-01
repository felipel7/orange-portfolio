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

interface ProjectViewModalProps {
  open: boolean;
  onClose: () => void;
  project?: Project;
}

export default function ProjectViewModal({
  open,
  onClose,
}: ProjectViewModalProps) {
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
        <Stack alignSelf="center" sx={{ maxWidth: 838 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            alignSelf="center"
            sx={{ width: '100%' }}
          >
            <Box display={{ xs: 'none', md: 'block' }} flex={1}>
              <UserDetails />
            </Box>
            <Box flex={1}>
              <Typography textAlign="center" variant="h4" color="neutral.120">
                Ecommerce One Page
              </Typography>
            </Box>

            <Tags display={{ xs: 'none', md: 'flex' }} />
          </Box>

          <Box
            component="img"
            src={'https://picsum.photos/200/300'}
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
            <UserDetails />

            <Tags display={{ xs: 'flex', md: 'none' }} />
          </Box>

          <Typography mt={{ xs: 2, md: 7 }}>
            Temos o prazer de compartilhar com vocês uma variação do nosso
            primeiro recurso gratuito. É um modelo de IA. Tentamos redesenhar
            uma versão mais minimalista do nosso primeiro projeto.
          </Typography>

          <Box my={4}>
            <Typography>Download</Typography>
            <Link
              color="#608AE1"
              href="https://gumroad.com/products/wxCSL"
              rel="noopener"
              target="_blank"
              underline="none"
              sx={{ cursor: 'pointer' }}
            >
              https://gumroad.com/products/wxCSL
            </Link>
          </Box>
        </Stack>
      </Stack>
    </Modal>
  );
}

function UserDetails() {
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
          Camila Soares
        </Typography>

        <Typography color="neutral.110">12/12</Typography>
      </Stack>
    </Box>
  );
}

function Tags({ ...rest }) {
  return (
    <Box justifyContent="flex-end" flex={1} gap={1} {...rest}>
      <Chip label="Web" sx={{ color: 'primary' }} />
      <Chip label="UX" sx={{ color: 'primary' }} />
    </Box>
  );
}
