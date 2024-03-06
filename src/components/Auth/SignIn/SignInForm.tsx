import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from '@mui/material';
import useSignInForm from './useSignInForm';

export default function SignInForm() {
  const {
    errors,
    handleClickShowPassword,
    handleSubmit,
    isSubmitting,
    register,
    showPassword,
  } = useSignInForm();

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          autoComplete="email"
          label="Email address"
          required
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
                  aria-label="Mudar a visibilidade da senha"
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
          color="secondary"
          disabled={isSubmitting}
          size="large"
          type="submit"
          variant="contained"
        >
          {isSubmitting && <CircularProgress size={16} sx={{ mr: 1 }} />}
          {isSubmitting ? 'Entrando...' : 'Entrar'}
        </Button>
      </Stack>
    </form>
  );
}
