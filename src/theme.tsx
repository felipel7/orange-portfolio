import { createTheme, darken } from '@mui/material/styles';

const theme = createTheme({
  palette: {},
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: '#FF5522',
          color: '#FCFDFF',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: darken('#FF5522', 0.05),
          },
          letterSpacing: 0.5,
        },
      },
    },
  },
  typography: {
    h3: {
      fontSize: 48,
      '@media (max-width:600px)': {
        fontSize: 24,
      },
      color: '#222244',
    },
    h5: {
      fontSize: 24,
      '@media (max-width:600px)': {
        fontSize: 16,
      },
      color: '#515255',
    },
  },
});

export default theme;
