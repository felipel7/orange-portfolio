import { PhotoLibrary } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';

interface ImageCardProps {
  isEmpty?: boolean;
  action?: () => void;
}

export default function ImageCard({ isEmpty = false, action }: ImageCardProps) {
  return (
    <Stack
      sx={{ height: '100%', cursor: 'pointer' }}
      spacing={1}
      onClick={action}
    >
      {!isEmpty && (
        <Typography>
          Selecione o conteúdo que você deseja fazer upload
        </Typography>
      )}

      <Stack
        justifyContent="center"
        alignItems="center"
        gap={1}
        borderRadius={1}
        px={{ xs: 4, sm: 8 }}
        height="100%"
        bgcolor="primary.100"
        color="neutral.120"
        minHeight={258}
      >
        <PhotoLibrary sx={{ fill: '#323232', height: 46, width: 46 }} />

        {isEmpty && <Typography>Adicione seu primeiro projeto</Typography>}

        <Typography fontSize={14}>
          Compartilhe seu talento com milhares de pessoas
        </Typography>
      </Stack>
    </Stack>
  );
}
