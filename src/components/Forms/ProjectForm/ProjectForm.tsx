import { Autocomplete, Stack, TextField } from '@mui/material';
import { useEffect } from 'react';
import { Controller } from 'react-hook-form';
import usePreviewProjectStore from '../../../store/previewProjectStore';
import useProjectForm from './useProjectForm';

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
  isEdit,
  onClose,
  onImageError,
}: ProjectFormProps) {
  const { handleSubmit, errors, register, control, getValues } = useProjectForm(
    {
      imageProject,
      onClose,
      isEdit,
      onImageError,
      projectId: project?.id,
    }
  );
  const { setPreviewProject } = usePreviewProjectStore();

  const handleChange = () => {
    setPreviewProject({ ...getValues(), imageProject } as PreviewProject);
  };

  useEffect(() => {
    handleChange();
  }, [imageProject]);

  return (
    <form id="project-form" onSubmit={handleSubmit} onChange={handleChange}>
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
