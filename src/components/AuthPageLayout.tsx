import { Grid, Stack } from '@mui/material';
import { PropsWithChildren } from 'react';
import ImageWrapper from '../components/ImageWrapper';

interface AuthPageLayoutProps extends PropsWithChildren {
  imageURL: string;
}

export default function AuthPageLayout({
  children,
  imageURL,
}: AuthPageLayoutProps) {
  return (
    <Grid container minHeight={{ xs: '100vh', lg: 'fit-content' }}>
      <Grid item sm={false} lg={5}>
        <ImageWrapper imageURL={imageURL} />
      </Grid>
      <Grid item xs={12} lg={7} mx="auto">
        <Stack
          alignItems="center"
          component="section"
          justifyContent="center"
          px={3}
          spacing={4}
          height="100%"
        >
          {children}
        </Stack>
      </Grid>
    </Grid>
  );
}
