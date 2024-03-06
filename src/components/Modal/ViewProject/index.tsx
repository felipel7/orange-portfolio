import { Close } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';
import { PropsWithChildren } from 'react';
import { StyledPreviewModal } from './styles';

interface Props extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

export default function ViewProjectModal({ children, isOpen, onClose }: Props) {
  return (
    <StyledPreviewModal open={isOpen} onClose={onClose}>
      <Stack
        bgcolor="background.paper"
        sx={{
          borderRadius: { xs: 4, md: 0 },
          maxWidth: 1042,
          mt: { xs: '148px', md: 0 },
          p: 2,
          width: '100%',
        }}
      >
        <Stack alignItems="flex-end">
          <IconButton onClick={onClose}>
            <Close sx={{ fill: '#323232' }} />
          </IconButton>
        </Stack>
        {children}
      </Stack>
    </StyledPreviewModal>
  );
}
