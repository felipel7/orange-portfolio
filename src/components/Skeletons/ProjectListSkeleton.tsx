import { Box, Card, Grid, Skeleton, Stack } from '@mui/material';

export default function ProjectListSkeleton({
  length = 3,
}: {
  length: number;
}) {
  const data = Array.from({ length }, (_, i) => i);

  return (
    <Grid
      container
      spacing={2}
      mb={8}
      justifyContent={{ xs: 'center', sm: 'start' }}
    >
      {data.map(key => (
        <Grid item key={key} maxWidth={372} xs={12} sm={6} md={4}>
          <Card
            sx={{ borderRadius: 1, boxShadow: 'none', position: 'relative' }}
          >
            <Skeleton variant="rectangular" width={389} height={258} />
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              mt={1}
            >
              <Box display="flex" gap={1} sx={{ width: '100%' }}>
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={24}
                  height={24}
                />
                <Skeleton variant="text" sx={{ flex: 1 }} />
              </Box>
            </Stack>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
