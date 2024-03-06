import { useState } from 'react';
import SuccessDialog from '../../components/Modal/SuccessDialog';
import NewProject from '../../components/Project/NewProject';
import { StyledModal, StyledModalContent } from './styles';

export default function NewProjectPage() {
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);

  const handleDialogOpen = () => setOpenSuccessDialog(true);

  return (
    <>
      <StyledModal open={!openSuccessDialog} sx={{ overflowY: 'auto' }}>
        <StyledModalContent>
          <NewProject handleDialogOpen={handleDialogOpen} />
        </StyledModalContent>
      </StyledModal>

      <SuccessDialog
        label="Projeto adicionado com sucesso!"
        open={openSuccessDialog}
      />
    </>
  );
}
