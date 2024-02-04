import { PhotoLibrary } from '@mui/icons-material';
import {
  Alert,
  Box,
  Button,
  ButtonBase,
  CircularProgress,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useImageUpload } from '../../../hooks/useImageUpload';
import usePreviewProjectStore from '../../../store/previewProjectStore';
import ModalWrapper from '../../Modal/ModalWrapper';
import ProjectViewModal from '../../Modal/ProjectViewModal';
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
  const [openPreview, setOpenPreview] = useState(false);
  const { setPreviewProject } = usePreviewProjectStore();

  const { imageUrl, imageError, onImageUpload, setImageError, isLoading } =
    useImageUpload(project);

  useEffect(() => {
    return () => {
      setPreviewProject({} as PreviewProject);
    };
  }, []);

  const handlePreviewClose = () => {
    setOpenPreview(false);
  };

  const handlePreviewOpen = () => {
    setOpenPreview(true);
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
            {isLoading ? (
              <Loading />
            ) : (
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
                  accept=".jpg, .jpeg, .png"
                  size={1000000}
                  hidden
                  onChange={onImageUpload}
                />
              </ButtonBase>
            )}

            {imageError && !imageUrl && (
              <Alert
                severity="error"
                sx={{ cursor: 'default' }}
                component="span"
              >
                Não foi possível processar a imagem. Tente novamente
              </Alert>
            )}
          </Stack>
        </Grid>

        <Grid xs={12} md item sx={{ order: { xs: 1, md: 2 } }}>
          <ProjectForm
            imageProject={imageUrl}
            project={project}
            onClose={onClose}
            isEdit={isEdit}
            onImageError={() => setImageError(true)}
          />
        </Grid>

        <Box
          display="flex"
          flexBasis="100%"
          flexDirection="column"
          gap={2}
          order={3}
        >
          <Typography
            sx={{
              cursor: 'pointer',
              width: 'fit-content',
              '&:hover': {
                color: 'primary.main',
              },
            }}
            onClick={handlePreviewOpen}
          >
            Visualizar publicação
          </Typography>

          <ProjectViewModal open={openPreview} onClose={handlePreviewClose} />

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

function Loading() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ width: '100%', height: '100%' }}
    >
      <CircularProgress color="primary" />
    </Box>
  );
}
