import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

export default function LoginPage() {
  return (
    <Grid container>
      <Grid item sm={false} md={4}>
        {/* TODO: colocar imagem */}
        <Box
          sx={{
            height: '100vh',
            backgroundColor: 'tomato',
          }}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <Stack
          component="section"
          alignItems="center"
          justifyContent="center"
          height="100vh"
          spacing={4}
          px={3}
        >
          <Typography variant="h3">Entre no Orange Portfólio</Typography>
          <Stack maxWidth={517} width="100%" spacing={2}>
            <Typography variant="h5" pb={{ xs: 2, md: 0 }}>
              Faça login com email
            </Typography>

            <LoginForm />

            <Link
              component={RouterLink}
              to="/cadastrar"
              underline="none"
              // TODO: colocar cor no theme
              color="#818388"
            >
              Cadastre-se
            </Link>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
}

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  // TODO: controle dos campos do form
  // TODO: handleSubmit

  const handleClickShowPassword = () => setShowPassword(show => !show);

  return (
    <form>
      <Stack spacing={2}>
        <TextField
          id="outlined-basic"
          label="Email address"
          variant="outlined"
        />
        <FormControl variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Botão para mudar visibilidade do campo de senha"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button size="large" variant="contained">
          Entrar
        </Button>
      </Stack>
    </form>
  );
}
