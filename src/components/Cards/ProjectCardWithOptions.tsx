import { Edit } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Stack,
  Typography,
} from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../utils/dateUtils';
import { getUserFullName } from '../../utils/userUtils';
import DeleteDialog from '../Modal/DeleteDialog';

export default function ProjectCardWithOptions({
  project,
}: {
  project: IProject;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const fullName = getUserFullName(project.user);

  return (
    <Card
      sx={{ borderRadius: 1, boxShadow: 'none', position: 'relative' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        component="img"
        src={project?.images[0]?.url}
        alt={project.title}
        sx={{
          objectFit: 'cover',
          objectPosition: 'top',
          width: '100%',
          maxWidth: '389px',
          height: '258px',
        }}
      />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mt={1}
      >
        <Box display="flex" gap={1}>
          <Avatar
            sx={{ width: 24, height: 24 }}
            src={project.user?.picture}
            alt={fullName}
          />
          <Typography color="neutral.110">
            {`${fullName} • ${formatDate(project.createdAt)}`}
          </Typography>
        </Box>

        <Box display="flex" gap={1}>
          {project.tags?.map(({ tag }) => (
            <Chip
              key={tag.id}
              label={tag.label}
              sx={{ fontWeight: 500, color: 'primary' }}
            />
          ))}
        </Box>
      </Stack>
      {isHovered && <OptionsMenu projectId={project.id} />}
    </Card>
  );
}

function OptionsMenu({ projectId }: { projectId: number }) {
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const prevOpen = useRef(open);
  const navigate = useNavigate();

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  const handleUpdate = (e: Event | React.SyntheticEvent) => {
    handleClose(e);
    navigate('/editar-projeto/' + projectId);
  };
  const handleDelete = (e: Event | React.SyntheticEvent) => {
    setOpenDelete(true);
    handleClose(e);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Stack direction="row" spacing={2}>
        <div>
          <Button
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            sx={{
              position: 'absolute',
              bgcolor: 'secondary.200',
              right: 16,
              top: 40,
              '&:hover': {
                backgroundColor: 'secondary.100',
              },
              borderRadius: 8,
              p: '4px',
              minWidth: 3,
            }}
          >
            <Edit sx={{ width: 24, height: 24 }} />
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
            modifiers={[
              {
                name: 'offset',
                options: {
                  offset: [0, 6],
                },
              },
            ]}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                      sx={{ zIndex: 1, width: '200px' }}
                    >
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
        </div>
      </Stack>

      <DeleteDialog
        open={openDelete}
        setOpen={setOpenDelete}
        projectId={projectId}
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
