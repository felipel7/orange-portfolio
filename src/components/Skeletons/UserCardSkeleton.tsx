import { Skeleton, Stack } from '@mui/material';

export default function UserCardSkeleton() {
  return (
    <Stack
      alignItems="center"
      gap={{ xs: 2, sm: 4 }}
      mx="auto"
      sx={{ flexDirection: { sm: 'row' } }}
      width="fit-content"
    >
      <Skeleton variant="circular" height={122} width={122} />

      <Stack
        justifyContent="space-between"
        sx={{
          gap: { xs: 1, sm: 0 },
          height: { xs: 100, sm: 122 },
          marginLeft: { xs: 2, sm: 0 },
        }}
      >
        <Skeleton variant="text" width={200} sx={{ fontSize: 32 }} />

        <Skeleton variant="text" width={100} sx={{ fontSize: 18 }} />

        <Skeleton variant="rectangular" width={200} height={42} />
      </Stack>
    </Stack>
  );
}
