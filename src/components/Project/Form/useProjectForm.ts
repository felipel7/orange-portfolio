import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { ProjectFormData, projectSchema } from '../../../schemas/projectSchema';
import { axiosInstance } from '../../../services/apiClient';

interface Props {
  image: string | undefined;
  project?: IProject;
  onSuccess?: (val: boolean) => void;
}

export default function useProjectForm({ image, project, onSuccess }: Props) {
  const queryClient = useQueryClient();
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
  });

  const onSubmit = async (data: ProjectFormData) => {
    if (!image) return toast.error('Faça upload de uma imagem!');

    if (image !== project?.images[0]?.url) {
      const response = await fetch(image);
      const blob = await response.blob();
      const formData = new FormData();
      formData.append('file', blob);
      formData.append('upload_preset', 'orange');

      let imageUrl;
      try {
        const res = await axios.post(
          `https://api.cloudinary.com/v1_1/${
            import.meta.env.VITE_PUBLIC_CLOUDINARY_NAME
          }/image/upload`,
          formData
        );
        imageUrl = res.data.secure_url;
      } catch (e) {
        return toast.error('Erro ao fazer Upload da imagem.');
      }

      data.images = [imageUrl];
    } else {
      data.images = [image];
    }

    if (project) {
      try {
        const response = await axiosInstance.put(
          'projects/' + project.id,
          data
        );

        if (response.status === 200 && onSuccess) {
          queryClient.invalidateQueries({ queryKey: ['user'] });
          queryClient.invalidateQueries({ queryKey: ['project'] });
          onSuccess(true);
        }
      } catch (e) {
        toast.error('Erro interno do servidor.');
      } finally {
        reset();
      }
    } else {
      try {
        const response = await axiosInstance.post('projects', data);

        if (response.status === 201 && onSuccess) {
          queryClient.invalidateQueries({ queryKey: ['user'] });
          onSuccess(true);
        }
      } catch (e) {
        toast.error('Erro interno do servidor.');
      } finally {
        reset();
      }
    }
  };

  return {
    control,
    errors,
    getValues,
    handleSubmit: handleSubmit(onSubmit),
    isSubmitting,
    register,
  };
}
