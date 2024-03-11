import { useState } from 'react';
import SuccessDialog from '../../components/Modal/SuccessDialog';
import EditProject from '../../components/Project/EditProject';
import { StyledModal, StyledModalContent } from './styles';

export default function EditProjectPage() {
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);

  const handleDialogOpen = () => setOpenSuccessDialog(true);

  return (
    <>
      <StyledModal open={!openSuccessDialog} sx={{ overflowY: 'auto' }}>
        <StyledModalContent>
          <EditProject handleDialogOpen={handleDialogOpen} />
        </StyledModalContent>
      </StyledModal>

      <SuccessDialog
        label="Edição concluída com sucesso!"
        open={openSuccessDialog}
      />
    </>
  );
}
