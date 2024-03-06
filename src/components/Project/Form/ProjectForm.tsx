import { Autocomplete, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import useProjectPreviewStore from '../../../store/projectPreviewStore';
import FormActions from './FormActions';
import UploadImageInput from './UploadImageInput';
import { StyledPreviewLink } from './styles';
import useProjectForm from './useProjectForm';

interface Props {
  onSuccess: (val: boolean) => void;
  openPreview: () => void;
  formId: string;
  project?: IProject;
}

export default function ProjectForm({
  onSuccess,
  openPreview,
  formId,
  project,
}: Props) {
  const [image, setImage] = useState<string>(project?.images[0]?.url);
  const { handleSubmit, errors, register, control, getValues, isSubmitting } =
    useProjectForm({ image, onSuccess, project });

  const { setProject } = useProjectPreviewStore();

  const handleChange = () => {
    setProject({ ...getValues() });
  };

  const handleProjectPreview = () => {
    setProject({ ...getValues(), images: [image ? image : ''] });
    openPreview();
  };

  return (
    <>
      <Stack flexDirection={{ md: 'row' }} gap={3}>
        <Stack flex={1} gap={2} order={{ xs: 2, md: 1 }} maxWidth={390}>
          <Typography>
            Selecione o conteúdo que você deseja fazer upload
          </Typography>

          <UploadImageInput image={image} onImageChange={setImage} />
        </Stack>
        <Stack flex={1} order={{ xs: 1, md: 2 }}>
          <form id={formId} onSubmit={handleSubmit} onChange={handleChange}>
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
                render={({ field: { ref, onChange, ...field } }) => (
                  <Autocomplete
                    defaultValue={project?.tags?.map(({ tag }) => tag.label)}
                    multiple
                    options={[]}
                    onChange={(_, data) => onChange(data)}
                    freeSolo
                    renderInput={params => (
                      <TextField
                        {...params}
                        {...field}
                        error={Boolean(errors.tags)}
                        helperText={errors.tags?.message}
                        inputRef={ref}
                        label="Tags"
                        variant="outlined"
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
                defaultValue={project?.description}
                label="Descrição"
                multiline
                rows={4}
                {...register('description')}
                error={Boolean(errors.description)}
                helperText={errors.description?.message}
              />
            </Stack>
          </form>
        </Stack>
      </Stack>

      <Stack spacing={2}>
        <StyledPreviewLink onClick={handleProjectPreview}>
          Visualizar publicação
        </StyledPreviewLink>

        <FormActions formId={formId} isSubmitting={isSubmitting} />
      </Stack>
    </>
  );
}
