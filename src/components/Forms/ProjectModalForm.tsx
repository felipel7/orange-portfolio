import { zodResolver } from '@hookform/resolvers/zod';
import { PhotoLibrary } from '@mui/icons-material';
import {
  Autocomplete,
  Box,
  Button,
  ButtonBase,
  Grid,
  Modal,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ProjectFormData, projectSchema } from '../../validation/projectSchema';

interface ProjectModalFormProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const style = {
  position: 'absolute',
  top: { xs: '148px', md: '50%' },
  left: { md: '50%' },
  transform: { md: 'translate(-50%, -50%)' },
  width: '100%',
  maxWidth: '890px',
};

export default function ProjectModalForm({
  open = false,
  setOpen,
}: ProjectModalFormProps) {
  const [imageUrl, setImageUrl] = useState('');

  const onImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target.files![0];
    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('upload_preset', 'orange');

    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_PUBLIC_CLOUDINARY_NAME
      }/image/upload`,
      formData
    );

    setImageUrl(res.data.secure_url);
  };

  return (
    <Modal open={open} sx={{ overflowY: 'auto' }}>
      <Box sx={style} px={3}>
        <Grid
          bgcolor="background.paper"
          color="neutral.110"
          component="section"
          container
          gap={3}
          p={3}
        >
          <Typography flexBasis="100%" variant="h4">
            Adicionar projeto
          </Typography>
          <Grid
            item
            sx={{
              order: { xs: 2, md: 1 },
              overflow: 'hidden',
            }}
            maxWidth={390}
          >
            <Stack sx={{ height: '100%', cursor: 'pointer' }} spacing={1}>
              <Typography>
                Selecione o conteúdo que você deseja fazer upload
              </Typography>
              {imageUrl ? (
                <Box
                  component="img"
                  src={imageUrl}
                  alt="Imagem de Prévia do Projeto"
                  sx={{
                    maxWidth: 389,
                    maxHeight: 336,
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              ) : (
                <ButtonBase sx={{ height: '100%' }} component="label">
                  <Stack
                    alignItems="center"
                    bgcolor="primary.100"
                    borderRadius={1}
                    color="neutral.120"
                    gap={1}
                    height="100%"
                    justifyContent="center"
                    minHeight={258}
                    px={{ xs: 4, sm: 8 }}
                  >
                    <PhotoLibrary
                      sx={{ fill: '#323232', height: 46, width: 46 }}
                    />

                    <Typography fontSize={14}>
                      Compartilhe seu talento com milhares de pessoas
                    </Typography>
                  </Stack>

                  <input
                    type="file"
                    accept="image/png, image/jpeg, image/jpg"
                    hidden
                    onChange={onImageUpload}
                  />
                </ButtonBase>
              )}
            </Stack>
          </Grid>
          <Grid xs={12} md item sx={{ order: { xs: 1, md: 2 } }}>
            <ProjectForm imageProject={imageUrl} />
          </Grid>
          <Box
            display="flex"
            flexBasis="100%"
            flexDirection="column"
            gap={2}
            order={3}
          >
            <Typography>Visualizar publicação</Typography>

            <Stack direction="row" gap={2}>
              <Button
                color="secondary"
                form="project-form"
                size="large"
                type="submit"
                variant="contained"
              >
                Salvar
              </Button>
              <Button
                color="primary"
                onClick={() => setOpen(false)}
                size="large"
                variant="contained"
              >
                Cancelar
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Box>
    </Modal>
  );
}

export function ProjectForm({ imageProject }: { imageProject: string }) {
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
    data.imageProject = imageProject;
    console.log(data);
    reset();
  };

  return (
    <form id="project-form" onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <TextField
          label="Título"
          {...register('title')}
          error={Boolean(errors.title)}
          helperText={errors.title?.message}
        />
        <Controller
          name="tags"
          control={control}
          defaultValue={[]}
          render={({ field: { ref, onChange, ...field } }) => (
            <Autocomplete
              multiple
              options={[]}
              onChange={(_, data) => onChange(data)}
              freeSolo
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
          {...register('link')}
          error={Boolean(errors.link)}
          helperText={errors.link?.message}
        />
        <TextField
          id="project-description"
          multiline
          label="Descrição"
          rows={4}
          {...register('description')}
          error={Boolean(errors.description)}
          helperText={errors.description?.message}
        />
      </Stack>
    </form>
  );
}
