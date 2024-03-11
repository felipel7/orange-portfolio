import { PhotoLibrary } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  [x: string]: unknown;
}

export default function EmptyProjectCard({ children, ...rest }: Props) {
  return (
    <Stack
      alignItems="center"
      bgcolor="primary.100"
      borderRadius={1}
      color="neutral.120"
      gap={1}
      height={258}
      justifyContent="center"
      maxWidth={389}
      px={{ xs: 4, sm: 8 }}
      position="relative"
      {...rest}
    >
      <PhotoLibrary sx={{ fill: '#323232', height: 46, width: 46 }} />
      {children}
      <Typography fontSize={14}>
        Compartilhe seu talento com milhares de pessoas
      </Typography>
    </Stack>
  );
}
