import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Button,
  FormControl,
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

export default function LoginFormContainer() {
  return (
    <>
      <Typography component="h2" variant="h3" color="primary">
        Entre no Orange Portfólio
      </Typography>
      <Stack maxWidth={517} width="100%" spacing={2}>
        <Typography
          color="neutral.110"
          component="h3"
          pb={{ xs: 2, md: 0 }}
          variant="h5"
        >
          Faça login com email
        </Typography>

        <LoginForm />

        <Link
          color="neutral.main"
          component={RouterLink}
          to="/cadastro"
          underline="none"
        >
          Cadastre-se
        </Link>
      </Stack>
    </>
  );
}

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form>
      <Stack spacing={2}>
        <TextField
          id="outlined-basic"
          label="Email address"
          autoComplete="email"
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
            autoComplete="current-password"
          />
        </FormControl>
        <Button color="secondary" size="large" variant="contained">
          Entrar
        </Button>
      </Stack>
    </form>
  );
}
