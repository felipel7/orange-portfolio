import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    // suas outras configurações de cores
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(255, 136, 51)",
          color: "white",
          "&:hover": {
            backgroundColor: "rgb(229, 126, 34)",
          },
        },
      },
    },
  },
});

export default theme;
