import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from '@mui/material';
import useSignUpForm from './useSignUpForm';

export default function SignUpForm() {
  const {
    errors,
    handleSubmit,
    isSubmitting,
    register,
    showPassword,
    handleClickShowPassword,
  } = useSignUpForm();

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
            {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
          </Button>
        </Stack>
      </form>
    </>
  );
}
