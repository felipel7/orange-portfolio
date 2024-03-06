import { Stack } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import useOAuthSignIn from '../../../hooks/useOAuthSignIn';
import { StyledAppLink, StyledFormSubTitle, StyledFormTitle } from '../styles';
import SignInForm from './SignInForm';

export default function SignInSection() {
  const { onSuccess, onError } = useOAuthSignIn();

  return (
    <>
      <StyledFormTitle>Entre no Orange Portfólio</StyledFormTitle>

      <GoogleLogin onSuccess={onSuccess} onError={onError} />

      <Stack maxWidth={517} width="100%" spacing={2}>
        <StyledFormSubTitle>Faça login com email</StyledFormSubTitle>
        <SignInForm />
        <StyledAppLink to="/cadastro">Cadastre-se</StyledAppLink>
      </Stack>
    </>
  );
}
