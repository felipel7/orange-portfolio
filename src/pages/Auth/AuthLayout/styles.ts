import { styled } from '@mui/material';

export const StyledImage = styled('img')(({ theme }) => ({
  display: 'none',
  height: '100vh',
  minHeight: '800px',
  [theme.breakpoints.up('lg')]: {
    display: 'block',
  },
}));

export const StyledAuthFormWrapper = styled('section')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  paddingInline: theme.spacing(2),
  gap: theme.spacing(4),
  height: '100%',
}));
