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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(event.target.value);
  };

  return (
    <form>
      <Stack gap={2}>
        <Box display="flex" gap={2}>
          <TextField
            required
            fullWidth
            id="firstName"
            label="Nome"
            name="firstName"
            autoComplete="given-name"
            value={firstName}
            onChange={handleFirstNameChange}
          />

          <TextField
            required
            fullWidth
            id="lastName"
            label="Sobrenome"
            name="lastName"
            autoComplete="family-name"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </Box>

        <TextField
          required
          fullWidth
          id="email"
          label="Email address"
          name="email"
          autoComplete="email"
          value={email}
          onChange={handleEmailChange}
        />

        <TextField
          required
          fullWidth
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={handlePasswordChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
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
