import { RegistrationForm } from "../components/RegistrationForm/RegistrationForm";
import { ImageComponent } from "../components/imageComponent/ImageComponent";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";

export const RegisterPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        {!isMobile ? (
          <Grid item xs={12} md={6}>
            <ImageComponent imageURL="/images/img_cadastro.png" />
          </Grid>
        ) : (
          " "
        )}

        <Grid item xs={12} md={6}>
          <RegistrationForm />
        </Grid>
      </Grid>
    </Box>
  );
};
