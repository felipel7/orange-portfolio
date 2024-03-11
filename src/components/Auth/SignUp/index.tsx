import { Stack } from '@mui/material';
import { StyledAppLink, StyledFormTitle } from '../styles';
import SignUpForm from './SignUpForm';

export default function SignUpSection() {
  return (
    <Stack maxWidth={517} width="100%">
      <StyledFormTitle sx={{ mb: 4, textAlign: 'center' }}>
        Cadastre-se
      </StyledFormTitle>

      <SignUpForm />

      <StyledAppLink to="/login" sx={{ mt: 2 }}>
        Já é cadastrado? Faça login
      </StyledAppLink>
    </Stack>
  );
}
