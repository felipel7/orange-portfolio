import { PaletteColor, createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      '100': '#E6E9F2',
      light: '#222244',
      main: '#111133',
    },
    secondary: {
      '50': '#FFEECC',
      '100': '#FFAA66',
      '200': '#FFCC99',
      light: '#FF8833',
      main: '#FF5522',
      dark: '#CC4400',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          letterSpacing: 0.5,
          paddingInline: 22,
          fontWeight: 500,
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        anchorOriginTopRight: {
          '@media (max-width: 599px)': {
            top: '49px',
          },
          '@media (min-width: 600px)': {
            top: '77px',
            right: '184px',
          },
        },
      },
    },
  },
  typography: {
    fontFamily: 'Roboto',
    h2: {
      fontSize: 34,
      fontWeight: 400,
      '@media (max-width:600px)': {
        fontSize: 24,
      },
    },
    h3: {
      fontSize: 48,
      '@media (max-width:600px)': {
        fontSize: 24,
      },
    },
    h4: {
      fontSize: 24,
    },
    h5: {
      fontSize: 24,
      '@media (max-width:600px)': {
        fontSize: 16,
      },
    },
    h6: {
      fontSize: 20,
    },
  },
});

interface CustomPaletteColor extends PaletteColor {
  '60': string;
  '110': string;
  '120': string;
  '130': string;
}

theme = createTheme(theme, {
  palette: {
    neutral: theme.palette.augmentColor({
      color: {
        dark: '#515255',
        main: '#818388',
        light: '#A1A3AA',
        '60': '#FCFDFF',
        '110': '#515255',
        '120': '#303133',
        '130': '#0B0C0D',
      } as CustomPaletteColor,
      name: 'neutral',
    }),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            background: theme.palette.grey[300],
            color: theme.palette.grey[600],
          },
        },
        containedPrimary: {
          background: theme.palette.grey[300],
          color: theme.palette.grey[600],
          boxShadow: 'none',
          '&:hover': {
            background: theme.palette.grey[400],
          },
        },
        containedSecondary: {
          background: theme.palette.secondary.main,
        },
      },
    },
  },
});

export default theme;
