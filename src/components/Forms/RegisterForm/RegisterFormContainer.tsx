import { Stack, Typography } from '@mui/material';
import RegisterForm from './RegisterForm';

export default function RegisterFormContainer() {
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

      <RegisterForm />
    </Stack>
  );
}
