import { Box } from '@mui/material';

interface ImageWrapperProps {
  imageURL: string;
}

export default function ImageWrapper({ imageURL }: ImageWrapperProps) {
  return (
    <Box
      alt="Plano de fundo"
      component="img"
      display={{ xs: 'none', lg: 'block' }}
      src={imageURL}
    />
  );
}
