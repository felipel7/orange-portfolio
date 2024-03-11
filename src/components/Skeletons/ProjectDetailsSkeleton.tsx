import {
  Box,
  Container,
  Modal,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';

export default function ProjectDetailsSkeleton() {
  return (
    <Container maxWidth="lg" component="section">
      <Modal
        open={true}
        sx={{
          display: 'grid',
          minWidth: '100vw',
          minHeight: '100vh',
          overflowY: 'auto',
          paddingInline: 3,
          placeItems: 'center',
        }}
      >
        <Stack
          alignSelf="center"
          sx={{ maxWidth: 838, width: '100%', background: 'white', p: 3 }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            alignSelf="center"
            sx={{ width: '100%' }}
          >
            <Box display={{ xs: 'none', md: 'block' }} flex={1}>
              <Box display="flex" alignItems="center" gap={1}>
                <Skeleton variant="circular" width={40} height={40} />
                <Stack
                  direction={{ xs: 'row', md: 'column' }}
                  spacing={{ xs: 1, md: 0 }}
                  flexWrap="wrap"
                >
                  <Skeleton variant="text" width={100} sx={{ fontSize: 24 }} />

                  <Skeleton variant="text" width={50} sx={{ fontSize: 24 }} />
                </Stack>
              </Box>
            </Box>
            <Stack flex={1}>
              <Skeleton
                variant="text"
                width={150}
                sx={{ fontSize: 48, mr: 'auto' }}
              />
            </Stack>

            <Skeleton variant="text" width={50} sx={{ fontSize: 24 }} />
            <Skeleton variant="text" width={50} sx={{ fontSize: 24, ml: 2 }} />
          </Box>

          <Skeleton
            variant="rectangular"
            sx={{
              width: '100%',
              height: { xs: 250, sm: 350 },
              maxWidth: 838,
              borderRadius: 1,
              mt: 4,
              mb: 1,
              alignSelf: 'center',
            }}
          />

          <Box display={{ xs: 'flex', md: 'none' }}>
            {/* <UserDetails /> */}

            <Skeleton
              variant="text"
              sx={{
                fontSize: 24,
                display: { xs: 'flex', md: 'none' },
              }}
            />
          </Box>

          <Skeleton variant="text" sx={{ fontSize: 24 }} />
          <Skeleton variant="text" sx={{ fontSize: 24 }} />
          <Skeleton variant="text" sx={{ fontSize: 24 }} width="50%" />

          <Box my={4}>
            <Typography>Download</Typography>
            <Skeleton variant="text" width={200} sx={{ fontSize: 24 }} />
          </Box>
        </Stack>
      </Modal>
    </Container>
  );
}
