import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import api from '../../../services/apiClient';
import {
  ProjectFormData,
  projectSchema,
} from '../../../validation/projectSchema';

interface useProjectFormProps {
  imageProject?: string | undefined;
  isEdit: boolean;
  onClose: () => void;
  onImageError: () => void;
}

export default function useProjectForm({
  imageProject,
  onClose,
  isEdit,
  onImageError,
}: useProjectFormProps) {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    reset,
    getValues,
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
  });

  const onSubmit = async (data: ProjectFormData) => {
    if (!imageProject) {
      onImageError();
      return;
    }

    try {
      data.imageProject = imageProject;
      const response = await api.post('project', data);

      if (response.status === 201) {
        reset();
        onClose();
        const onSuccessMsg = isEdit
          ? 'Edição concluída com sucesso!'
          : 'Projeto adicionado com sucesso!';

        navigate('/sucesso/' + onSuccessMsg);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return {
    handleSubmit: handleSubmit(onSubmit),
    errors,
    register,
    control,
    getValues,
  };
}
