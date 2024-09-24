import { createTheme } from '@mui/material/styles';
import { purple, orange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode: 'dark', 
    primary: {
      main: purple[500], 
    },
    secondary: {
      main: orange[500], 
    },
    background: {
      default: '#1c1b22', 
      paper: '#282636', 
    },
    text: {
      primary: '#ffffff', 
      secondary: orange[400], 
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#121626', 
        },
      },
    },
  },
});

export default theme;
