import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

declare module '@mui/material/styles' {
  interface Palette {
    neutral: {
      [key: number]: string;
      dark: string;
      main: string;
      light: string;
    };
  }
}

export const StyledFormTitle = styled('h2')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 400,
  fontSize: 48,
  [theme.breakpoints.down('sm')]: {
    fontSize: 24,
  },
}));

export const StyledFormSubTitle = styled('h3')(({ theme }) => ({
  color: theme.palette.neutral[110],
  fontWeight: 400,
  fontSize: 24,
  [theme.breakpoints.down('sm')]: {
    fontSize: 16,
    paddingBlockEnd: theme.spacing(1),
  },
  [theme.breakpoints.up('sm')]: {
    paddingBlockEnd: theme.spacing(1),
  },
}));

export const StyledAppLink = styled(Link)(({ theme }) => ({
  color: theme.palette.neutral.main,
  textDecoration: 'none',
  transition: 'color .2s ease',
  '&:hover': {
    color: theme.palette.neutral.dark,
  },
}));
