import { zodResolver } from '@hookform/resolvers/zod';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { RegisterFormData, userSchema } from '../../validation/userSchema';

export default function RegistrationFormContainer() {
  return (
    <Stack maxWidth={517} width="100%">
      <Typography
        textAlign="center"
        component="h2"
        variant="h3"
        color="primary"
        mb={4}
      >
        Cadastre-se
      </Typography>

      <RegistrationForm />
    </Stack>
  );
}

function RegistrationForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(userSchema),
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data: RegisterFormData) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={2}>
        <Box display="flex" gap={2}>
          <TextField
            autoComplete="given-name"
            fullWidth
            label="Nome"
            required
            {...register('firstName')}
            error={Boolean(errors.firstName)}
            helperText={errors.firstName?.message}
          />

          <TextField
            autoComplete="family-name"
            fullWidth
            label="Sobrenome"
            required
            {...register('lastName')}
            error={Boolean(errors.lastName)}
            helperText={errors.lastName?.message}
          />
        </Box>

        <TextField
          autoComplete="email"
          required
          fullWidth
          label="Email"
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
          fullWidth
          variant="contained"
        >
          Cadastrar
        </Button>
      </Stack>
    </form>
  );
}
