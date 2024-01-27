import { Typography, Stack, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { LoginForm } from "./LoginForm";

export function LoginFormContainer() {
  return (
    <>
      <Typography component="h2" variant="h3" color="primary">
        Entre no Orange Portfólio
      </Typography>
      <Stack maxWidth={517} width="100%" spacing={2}>
        <Typography
          color="neutral.110"
          component="h3"
          pb={{ xs: 2, md: 0 }}
          variant="h5"
        >
          Faça login com email
        </Typography>
        <LoginForm />
        <Link
          color="neutral.main"
          component={RouterLink}
          to="/cadastro"
          underline="none"
        >
          Cadastre-se
        </Link>
      </Stack>
    </>
  );
}
