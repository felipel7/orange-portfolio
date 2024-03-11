import { Box, Skeleton, Stack } from '@mui/material';

export default function ProjectFormSkeleton() {
  return (
    <>
      <Stack flexDirection={{ md: 'row' }} gap={3}>
        <Stack flex={1} gap={2} order={{ xs: 2, md: 1 }} maxWidth={390}>
          <Skeleton variant="rectangular" height={16} />

          <Skeleton variant="rectangular" height={305} width={390} />
        </Stack>
        <Stack flex={1} order={{ xs: 1, md: 2 }}>
          <Box>
            <Stack spacing={2}>
              <Skeleton variant="rectangular" height={56} />
              <Skeleton variant="rectangular" height={56} />
              <Skeleton variant="rectangular" height={56} />
              <Skeleton variant="rectangular" height={120} />
            </Stack>
          </Box>
        </Stack>
      </Stack>

      <Stack spacing={2}>
        <Skeleton variant="rectangular" width={217} height={16} />

        <Box display="flex" gap={2}>
          <Skeleton variant="rectangular" height={42} width={100} />
          <Skeleton variant="rectangular" height={42} width={100} />
        </Box>
      </Stack>
    </>
  );
}
