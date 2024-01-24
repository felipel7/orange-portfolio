import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Box,
  Container,
  Divider,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const pages = [
  { id: 1, label: 'Meus projetos', url: '/meus-projetos' },
  { id: 2, label: 'Descobrir', url: '/descobrir' },
];

export default function Navbar() {
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

  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: '#111133' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ px: 1, height: 73 }}>
          <Logo sx={{ display: { xs: 'none', md: 'flex' }, mr: '100px' }} />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
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
                  <RouterLink to={page.url} style={{ textDecoration: 'none' }}>
                    <Typography color="black" fontWeight={400}>
                      {page.label}
                    </Typography>
                  </RouterLink>
                </MenuItem>
              ))}
              <Divider />
              <MenuItem>Configurações</MenuItem>
            </Menu>
          </Box>

          <Logo
            sx={{ display: { xs: 'flex', md: 'none' }, flexBasis: '100%' }}
          />

          <Box
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 3 }}
          >
            {pages.map(page => (
              <RouterLink
                key={page.id}
                to={page.url}
                style={{ textDecoration: 'none' }}
              >
                <Typography color="white" fontWeight={500}>
                  {page.label}
                </Typography>
              </RouterLink>
            ))}
          </Box>

          <Stack direction="row" spacing={2}>
            <Tooltip title="Configurações">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User name" src="" />
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
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Sair</Typography>
              </MenuItem>
            </Menu>

            <IconButton
              size="medium"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              {/* TODO: Adicionar notificacoes: <Badge badgeContent={17} color="error"> */}
              <NotificationsIcon />
              {/* <Badge /> */}
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

function Logo({ ...rest }) {
  return (
    <Link component={RouterLink} to="/" {...rest}>
      <img src={logo} alt="Orange portfolio logo" />
    </Link>
  );
}
