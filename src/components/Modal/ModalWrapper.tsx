import { Box, Modal } from '@mui/material';
import { PropsWithChildren } from 'react';

interface ModalWrapperProps extends PropsWithChildren {
  open: boolean;
}

export default function ModalWrapper({ children, open }: ModalWrapperProps) {
  return (
    <Modal open={open} sx={{ overflowY: 'auto' }}>
      <Box sx={style} px={3}>
        {children}
      </Box>
    </Modal>
  );
}

const style = {
  position: 'absolute',
  top: { xs: '148px', md: '50%' },
  left: { md: '50%' },
  transform: { md: 'translate(-50%, -50%)' },
  width: '100%',
  maxWidth: '890px',
};
