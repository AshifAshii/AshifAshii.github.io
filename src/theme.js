import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#011c37',
      light: '#2196f3',
    },
    secondary: {
      main: '#ff0045',
    },
    background: {
      default: '#0a1929',
      paper: '#0d2137',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: 'clamp(2.5rem, 6vw, 5rem)',
    },
    h2: {
      fontWeight: 600,
      fontSize: 'clamp(1.75rem, 4vw, 3rem)',
    },
    h3: {
      fontWeight: 600,
      fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
})

export default theme
