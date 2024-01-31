import { PhotoLibrary } from '@mui/icons-material';
import {
  Box,
  Button,
  ButtonBase,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import ModalWrapper from '../../Modal/ModalWrapper';
import ProjectForm from './ProjectForm';

interface ProjectModalFormProps {
  open: boolean;
  onClose: () => void;
  isEdit?: boolean;
  project?: Project;
}

export default function ProjectModalForm({
  open = false,
  onClose,
  isEdit = false,
  project,
}: ProjectModalFormProps) {
  const [imageUrl, setImageUrl] = useState(project?.imageProject);

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
    <ModalWrapper open={open}>
      <Grid
        bgcolor="background.paper"
        color="neutral.110"
        component="section"
        container
        gap={3}
        p={3}
      >
        <Typography flexBasis="100%" variant="h4">
          {isEdit ? 'Editar' : 'Adicionar'} projeto
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
            <ButtonBase sx={{ height: '100%' }} component="label">
              {imageUrl ? (
                <Box
                  component="div"
                  sx={{
                    objectFit: 'cover',
                    borderRadius: 1,
                    overflow: 'hidden',
                    width: '100%',
                    height: '100%',
                    maxWidth: 389,
                    maxHeight: 336,
                    minHeight: 304,
                    background: `url(${
                      project?.imageProject || imageUrl
                    }) no-repeat`,
                    backgroundSize: 'cover',
                  }}
                />
              ) : (
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
              )}

              <input
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                hidden
                onChange={onImageUpload}
              />
            </ButtonBase>
          </Stack>
        </Grid>

        <Grid xs={12} md item sx={{ order: { xs: 1, md: 2 } }}>
          <ProjectForm
            imageProject={imageUrl}
            project={project}
            onClose={onClose}
            isEdit={isEdit}
          />
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
              onClick={onClose}
              size="large"
              variant="contained"
            >
              Cancelar
            </Button>
          </Stack>
        </Box>
      </Grid>
    </ModalWrapper>
  );
}
