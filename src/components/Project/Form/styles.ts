import { Box, Typography, styled } from '@mui/material';

export const StyledFormContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));

export const StyledPreviewLink = styled(Typography)(({ theme }) => ({
  cursor: 'pointer',
  transition: 'color .2s ease',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

export const StyledUploadButton = styled('label')(({ theme }) => ({
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
  cursor: 'pointer',
  [theme.breakpoints.down('md')]: {
    height: 300,
  },
}));

export const StyledImage = styled('img')(() => ({
  position: 'absolute',
  inset: 0,
  objectFit: 'contain',
  objectPosition: 'top',
  width: '100%',
  height: '100%',
}));
