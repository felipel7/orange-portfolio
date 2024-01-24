import { createTheme, darken } from '@mui/material/styles';

const theme = createTheme({
  palette: {},
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: '#FF5522',
          color: '#FCFDFF',
          letterSpacing: 0.5,
          fontWeight: 600,
          '&:hover': {
            backgroundColor: darken('#FF5522', 0.05),
          },
          '&.Mui-disabled': {
            background: 'rgba(0, 0, 0, .12)',
            paddingInline: '22px',
            fontWeight: 500,
          },
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
    h4: {
      fontSize: 24,
      color: '#303113',
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
