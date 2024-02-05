import { Edit } from '@mui/icons-material';
import {
  Box,
  ClickAwayListener,
  Grow,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from '@mui/material';
import { useRef, useState } from 'react';
import ProjectModalForm from './Forms/ProjectForm/ProjectModalForm';
import DeleteDialog from './Modal/DeleteDialog';

export default function ProjectOptionsMenu({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const anchorRef = useRef<HTMLDivElement>(null);

  const handleMouseLeave = () => {
    setShowMenu(false);
    setOpen(false);
  };

  const handleUpdate = () => {
    setOpenEdit(true);
    setOpen(false);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };

  const handleDelete = () => {
    setOpen(false);
    setOpenDelete(true);
  };

  return (
    <>
      <Box
        sx={{ position: 'absolute', inset: 0 }}
        component="div"
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={handleMouseLeave}
      >
        {showMenu && (
          <>
            <Box
              ref={anchorRef}
              bgcolor="secondary.200"
              component={IconButton}
              onClick={() => setOpen(true)}
              sx={{
                position: 'absolute',
                top: 40,
                right: 16,
                '&:hover': {
                  backgroundColor: 'secondary.100',
                },
                padding: '3px',
              }}
            >
              <Edit />
            </Box>
            <Popper
              sx={{ zIndex: 1, width: '200px' }}
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
              placement="left-start"
              modifiers={[
                {
                  name: 'offset',
                  options: {
                    offset: [35, -25],
                  },
                },
              ]}
            >
              {({ TransitionProps }) => (
                <Grow {...TransitionProps}>
                  <Paper>
                    <ClickAwayListener onClickAway={handleMouseLeave}>
                      <MenuList id="split-button-menu" autoFocusItem>
                        <MenuItem sx={menuItemStyles} onClick={handleUpdate}>
                          Editar
                        </MenuItem>
                        <MenuItem sx={menuItemStyles} onClick={handleDelete}>
                          Excluir
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </>
        )}
      </Box>

      <ProjectModalForm
        isEdit
        open={openEdit}
        onClose={handleEditClose}
        project={project}
      />

      <DeleteDialog
        open={openDelete}
        setOpen={setOpenDelete}
        projectId={project.id}
      />
    </>
  );
}

const menuItemStyles = {
  '&:hover': {
    backgroundColor: 'secondary.50',
  },
  px: 3,
};
