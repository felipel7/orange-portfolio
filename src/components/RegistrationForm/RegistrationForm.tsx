import { Container, Typography, Stack } from "@mui/material";
import { InputRegister } from "./InputRegister";

export const RegistrationForm = () => {
  return (
    <Container maxWidth="xs">
      <Stack
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          sx={{
            mb: 2,
            fontSize: { xs: "1.5rem", sm: "2.5rem", md: "3rem" },
          }}
        >
          Cadastre-se
        </Typography>
        <InputRegister />
      </Stack>
    </Container>
  );
};
