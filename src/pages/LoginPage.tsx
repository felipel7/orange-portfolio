import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { ImageComponent } from "../components/imageComponent/ImageComponent";
import { LoginForm } from "../components/LoginForm/LoginForm";

export default function LoginPage() {
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
            <ImageComponent imageURL="/images/img_login.png" />
          </Grid>
        ) : (
          " "
        )}

        <Grid item xs={12} md={6}>
          <LoginForm />
        </Grid>
      </Grid>
    </Box>
  );
}
