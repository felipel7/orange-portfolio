import { zodResolver } from '@hookform/resolvers/zod';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Button,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';
import { LoginFormData, loginSchema } from '../../validation/userSchema';

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
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <TextField
          label="Email address"
          autoComplete="email"
          variant="outlined"
          {...register('email')}
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
        />
        <TextField
          autoComplete="current-password"
          fullWidth
          label="Password"
          required
          type={showPassword ? 'text' : 'password'}
          {...register('password')}
          error={Boolean(errors.password)}
          helperText={errors.password?.message}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          type="submit"
          color="secondary"
          size="large"
          variant="contained"
        >
          Entrar
        </Button>
      </Stack>
    </form>
  );
}
