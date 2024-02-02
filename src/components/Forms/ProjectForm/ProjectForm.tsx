import { zodResolver } from '@hookform/resolvers/zod';
import { Autocomplete, Stack, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  ProjectFormData,
  projectSchema,
} from '../../../validation/projectSchema';

interface ProjectFormProps {
  imageProject: string | undefined;
  isEdit: boolean;
  project?: Project;
  onClose: () => void;
  onImageError: () => void;
}

export default function ProjectForm({
  imageProject,
  project,
  onClose,
  isEdit,
  onImageError,
}: ProjectFormProps) {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    reset,
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
  });

  const onSubmit = (data: ProjectFormData) => {
    if (!imageProject) {
      onImageError();
      return;
    }

    data.imageProject = imageProject;
    // TODO: enviar dados para o backend
    console.log(data);
    reset();
    onClose();
    const onSuccessMsg = isEdit
      ? 'Edição concluída com sucesso!'
      : 'Projeto adicionado com sucesso!';

    navigate('/sucesso/' + onSuccessMsg);
  };

  return (
    <form id="project-form" onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <TextField
          label="Título"
          defaultValue={project?.title}
          {...register('title')}
          error={Boolean(errors.title)}
          helperText={errors.title?.message}
        />
        <Controller
          name="tags"
          control={control}
          defaultValue={project?.tags?.split(',')}
          render={({ field: { ref, onChange, ...field } }) => (
            <Autocomplete
              multiple
              options={[]}
              onChange={(_, data) => onChange(data)}
              freeSolo
              defaultValue={project?.tags?.split(',')}
              renderInput={params => (
                <TextField
                  {...params}
                  {...field}
                  variant="outlined"
                  label="Tags"
                  error={Boolean(errors.tags)}
                  helperText={errors.tags?.message}
                  inputRef={ref}
                />
              )}
            />
          )}
        />
        <TextField
          label="Link"
          defaultValue={project?.link}
          {...register('link')}
          error={Boolean(errors.link)}
          helperText={errors.link?.message}
        />
        <TextField
          id="project-description"
          label="Descrição"
          multiline
          rows={4}
          defaultValue={project?.description}
          {...register('description')}
          error={Boolean(errors.description)}
          helperText={errors.description?.message}
        />
      </Stack>
    </form>
  );
}
