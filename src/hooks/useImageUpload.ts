import axios from 'axios';
import { ChangeEvent, useState } from 'react';

export function useImageUpload(project: Project | undefined) {
  const [imageUrl, setImageUrl] = useState(project?.imageProject);
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    const imageFile = event.target.files![0];
    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('upload_preset', 'orange');

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_PUBLIC_CLOUDINARY_NAME
        }/image/upload`,
        formData
      );

      setImageUrl(res.data.secure_url);
    } catch (e) {
      setImageError(true);
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    imageUrl,
    imageError,
    onImageUpload,
    setImageError,
    isLoading,
    setImageUrl,
  };
}
