import { Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ApiClient from '../../services/apiClient';
import ViewProjectModal from '../Modal/ViewProject';
import PreviewFormDetails from '../Modal/ViewProject/PreviewFormDetails';
import ProjectFormSkeleton from '../Skeletons/ProjectFormSkeleton';
import ProjectForm from './Form/ProjectForm';
import { StyledFormContainer } from './Form/styles';

interface Props {
  handleDialogOpen: () => void;
}

export default function EditProject({ handleDialogOpen }: Props) {
  const apiClient = new ApiClient<IProject>('/projects');
  const [openPreview, setOpenPreview] = useState(false);
  const { id } = useParams();

  const { data: project, isLoading } = useQuery({
    queryKey: ['project', id],
    queryFn: () => apiClient.get(id),
  });

  const handlePreviewOpen = () => {
    setOpenPreview(true);
  };

  return (
    <>
      <StyledFormContainer>
        <Typography fontSize={24}>Editar Projeto</Typography>

        {isLoading ? (
          <ProjectFormSkeleton />
        ) : (
          <ProjectForm
            formId="edit-project-form"
            project={project}
            onSuccess={handleDialogOpen}
            openPreview={handlePreviewOpen}
          />
        )}
      </StyledFormContainer>

      <ViewProjectModal
        isOpen={openPreview}
        onClose={() => setOpenPreview(false)}
      >
        <PreviewFormDetails />
      </ViewProjectModal>
    </>
  );
}
