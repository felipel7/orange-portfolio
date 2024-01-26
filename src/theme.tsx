import { PaletteColor, alpha, createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      light: '#222244',
      main: '#111133',
    },
    secondary: {
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
          '&.Mui-disabled': {
            background: alpha('#000000', 0.12),
            color: alpha('#000000', 0.38),
          },
        },
      },
    },
  },
  typography: {
    fontFamily: 'Roboto',
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
        '120': '#303133',
        '130': '#0B0C0D',
      } as CustomPaletteColor,
      name: 'neutral',
    }),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedSecondary: {
          background: theme.palette.secondary.main,
        },
      },
    },
  },
});

export default theme;
