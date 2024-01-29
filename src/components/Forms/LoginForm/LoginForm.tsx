import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from '@mui/material';
import { useLoginForm } from './useLoginForm';

export function LoginForm() {
  const { formMethods, showPassword, setShowPassword, onSubmit } =
    useLoginForm();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = formMethods;

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
  );
}
