import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from '@mui/material';
import AppSnackbar from '../../AppSnackbar';
import useRegisterForm from './useRegisterForm';

export default function RegisterForm() {
  const {
    handleSubmit,
    register,
    errors,
    showPassword,
    handleClickShowPassword,
    snackbar,
    handleSnackbarClose,
  } = useRegisterForm();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack gap={2}>
          <Box display="flex" gap={2}>
            <TextField
              autoComplete="given-name"
              fullWidth
              label="Nome"
              required
              {...register('firstname')}
              error={Boolean(errors.firstname)}
              helperText={errors.firstname?.message}
            />

            <TextField
              autoComplete="family-name"
              fullWidth
              label="Sobrenome"
              required
              {...register('lastname')}
              error={Boolean(errors.lastname)}
              helperText={errors.lastname?.message}
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

      <AppSnackbar
        type={snackbar.type}
        label={snackbar.label}
        open={snackbar.open}
        onClose={handleSnackbarClose}
      />
    </>
  );
}
