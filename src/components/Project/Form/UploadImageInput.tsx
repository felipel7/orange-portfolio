import { ChangeEvent } from 'react';
import EmptyProjectCard from '../../Cards/EmptyProjectCard';
import { StyledImage, StyledUploadButton } from './styles';

interface Props {
  image: string | undefined;
  onImageChange: (val: string) => void;
}

export default function UploadImageInput({ image, onImageChange }: Props) {
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target.files![0];
    const imagePath = URL.createObjectURL(imageFile);

    onImageChange(imagePath);
  };

  return (
    <StyledUploadButton>
      {image ? (
        <StyledImage src={image} />
      ) : (
        <EmptyProjectCard sx={{ height: '100%' }} />
      )}

      <input type="file" onChange={handleImageChange} hidden />
    </StyledUploadButton>
  );
}
