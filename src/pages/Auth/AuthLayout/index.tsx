import { Grid } from '@mui/material';
import { PropsWithChildren } from 'react';
import { StyledAuthFormWrapper, StyledImage } from './styles';

interface Props extends PropsWithChildren {
  url: string;
}

export default function AuthPageLayout({ children, url }: Props) {
  return (
    <Grid container minHeight={{ xs: '100vh', lg: 'fit-content' }}>
      <Grid item sm={false} lg={5}>
        <StyledImage alt="Plano de fundo" src={url} />
      </Grid>
      <Grid item xs={12} lg={7} mx="auto">
        <StyledAuthFormWrapper>{children}</StyledAuthFormWrapper>
      </Grid>
    </Grid>
  );
}
