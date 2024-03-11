import { Typography } from '@mui/material';
import { useState } from 'react';
import ViewProjectModal from '../Modal/ViewProject';
import PreviewFormDetails from '../Modal/ViewProject/PreviewFormDetails';
import ProjectForm from './Form/ProjectForm';
import { StyledFormContainer } from './Form/styles';

interface Props {
  handleDialogOpen: () => void;
}

export default function NewProject({ handleDialogOpen }: Props) {
  const [openPreview, setOpenPreview] = useState(false);

  const handlePreviewOpen = () => {
    setOpenPreview(true);
  };

  return (
    <>
      <StyledFormContainer>
        <Typography fontSize={24}>Adicionar Projeto</Typography>

        <ProjectForm
          formId="new-project-form"
          onSuccess={handleDialogOpen}
          openPreview={handlePreviewOpen}
        />
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
