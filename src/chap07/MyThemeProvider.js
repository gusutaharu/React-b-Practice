import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { amber,grey } from '@mui/material/colors';
import React, { useState } from 'react'
import ThemaContext from './ThemaContext';

const MyThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  const themeConfig = {
    mode,
    toggleMode: () => {
      setMode(prev =>
        prev === 'light' ? 'dark' : 'light'
      );
    }
  };

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
          primary: amber,
          }
        :{
          primary: {
            main: grey[500],
            contrastText: '#fff'
          },
          background: {
            default: grey[900],
            paper: grey[900],
          },
        }
      )
    }
  });
  return (
    <ThemaContext.Provider value={themeConfig}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemaContext.Provider>
  )
}

export default MyThemeProvider