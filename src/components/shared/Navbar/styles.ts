import { AppBar, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: theme.shadows[4],
  position: 'static',
  [theme.breakpoints.up('md')]: {
    boxShadow: theme.shadows[0],
  },
}));

export const StyledImageLogo = styled('img')(({ theme }) => ({
  height: '31px',
  width: '83px',
  [theme.breakpoints.up('sm')]: {
    height: '41px',
    width: '111px',
  },
}));

export const StyledMobileMenuLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
}));

export const StyledMenuLink = styled(Link)(({ theme }) => ({
  color: theme.palette.neutral[60],
  fontSize: 20,
  fontWeight: 500,
  textDecoration: 'none',
  transition: 'color .2s ease',
  '&:hover': {
    color: theme.palette.neutral.light,
  },
}));
