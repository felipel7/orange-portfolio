import { zodResolver } from '@hookform/resolvers/zod';
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  Modal,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ProjectFormData, projectSchema } from '../../validation/projectSchema';
import ImageCard from '../Cards/ImageCard';

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
            }}
            maxWidth={390}
          >
            <ImageCard />
          </Grid>
          <Grid xs={12} md item sx={{ order: { xs: 1, md: 2 } }}>
            <ProjectForm />
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

export function ProjectForm() {
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
          multiline
          label="Descrição"
          rows={3}
          {...register('description')}
          error={Boolean(errors.description)}
          helperText={errors.description?.message}
        />
      </Stack>
    </form>
  );
}
