import { Box, Modal, styled } from '@mui/material';

export const StyledModal = styled(Modal)(({ theme }) => ({
  display: 'grid',
  minHeight: '100vh',
  minWidth: '100vw',
  paddingInline: theme.spacing(3),
  placeItems: 'center',
}));

export const StyledModalContent = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFF',
  color: theme.palette.neutral[110],
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  maxWidth: '890px',
  paddingBlock: theme.spacing(3),
  paddingInline: theme.spacing(4),
  width: '100%',
}));
