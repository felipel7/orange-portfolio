import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Container,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useCurrentUser from '../../../hooks/useCurrentUser';
import {
  StyledAppBar,
  StyledImageLogo,
  StyledMenuLink,
  StyledMobileMenuLink,
} from './styles';
import logo from '/logo.png';

export default function Navbar() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { data: user, error } = useCurrentUser();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    logout();
    handleCloseUserMenu();
    navigate(0);
  };

  return (
    <StyledAppBar color="primary">
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ px: 1, height: 73 }}>
          <StyledImageLogo
            src={logo}
            alt="Orange portfolio logo"
            sx={{ display: { xs: 'none', md: 'flex' }, mr: '100px' }}
          />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none', alignItems: 'center' },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              keepMounted
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(page => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <StyledMobileMenuLink to={page.url}>
                    {page.label}
                  </StyledMobileMenuLink>
                </MenuItem>
              ))}
              <Divider />
              <MenuItem onClick={handleLogout}>
                <Typography color="primary">Desconectar</Typography>
              </MenuItem>
            </Menu>
            <StyledImageLogo src={logo} alt="Orange portfolio logo" />
          </Box>

          <Box
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 3 }}
          >
            {pages.map(page => (
              <StyledMenuLink key={page.id} to={page.url}>
                {page.label}
              </StyledMenuLink>
            ))}
          </Box>

          <Stack direction="row" spacing={2}>
            <Tooltip title="Configurações">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt={user?.firstName}
                  src={error ? '' : user?.picture}
                />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleLogout}>
                <Typography textAlign="center">Desconectar</Typography>
              </MenuItem>
            </Menu>

            <IconButton
              size="medium"
              aria-label="show notifications"
              color="inherit"
            >
              <NotificationsIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}

const pages = [
  { id: 1, label: 'Meus projetos', url: '/' },
  { id: 2, label: 'Descobrir', url: '/descobrir' },
];
