import {createTheme} from '@mui/material/styles' 

export const theme = createTheme({
    palette: {
      primary: {
        main: '#1D2734',
      },
      secondary: {
        main: '#AFE7E9',
      },
      text: {
        primary: '#AFE7E9'
      }
    },
    typography: {
        h1: {
          fontFamily: 'Chelsea Market',
          fontSize: 96,
        },
        h3: {
          fontFamily: 'Noto Sans',
          fontSize: 30,
          fontWeight: 800,
        },
        h4: {
            fontFamily: 'Advent Pro',
            fontSize: 26,
            fontWeight: 400,
        },
        h5: {
          fontFamily: 'Archivo',
            fontSize: 24,
            fontWeight: 600,
        },
        h6: {
          fontFamily: 'Advent Pro',
            fontSize: 20,
            fontWeight: 400,
        },
        body1: {
            fontFamily: 'Advent Pro',
            fontWeight: 400,
        },
    }
  })

