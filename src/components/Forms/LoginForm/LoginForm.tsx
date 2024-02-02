import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from '@mui/material';
import AppSnackbar from '../../AppSnackbar';
import useLoginForm from './useLoginForm';

export function LoginForm() {
  const {
    showPassword,
    handleSubmit,
    errors,
    handleClickShowPassword,
    handleSnackbarClose,
    register,
    snackbar,
  } = useLoginForm();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            required
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

      <AppSnackbar
        type={snackbar.type}
        label={snackbar.label}
        open={snackbar.open}
        onClose={handleSnackbarClose}
      />
    </>
  );
}
