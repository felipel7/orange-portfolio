import { Modal, styled } from '@mui/material';

export const StyledPreviewModal = styled(Modal)(({ theme }) => ({
  display: 'grid',
  minWidth: '100vw',
  minHeight: '100vh',
  overflowY: 'auto',
  paddingInline: theme.spacing(3),
  placeItems: 'center',
}));

export const StyledPreviewImage = styled('img')(({ theme }) => ({
  alignSelf: 'center',
  borderRadius: 1,
  marginBlockStart: theme.spacing(4),
  marginBlockEnd: theme.spacing(1),
  objectFit: 'cover',
  maxHeight: 250,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    maxHeight: 420,
  },
}));
