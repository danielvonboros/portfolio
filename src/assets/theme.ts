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
          color: 'palette.secondary.main'
        },
        h3: {
          fontFamily: 'Noto Sans',
          fontSize: 30,
          fontWeight: 800,
          color: '#AFE7E9'
        },
        h4: {
            fontFamily: 'Advent Pro',
            fontSize: 26,
            fontWeight: 400,
            color: '#AFE7E9'
        },
        h5: {
          fontFamily: 'Archivo',
            fontSize: 24,
            fontWeight: 600,
            color: '#AFE7E9'
        },
        h6: {
          fontFamily: 'Advent Pro',
            fontSize: 20,
            fontWeight: 400,
            color: '#AFE7E9'
        },
        body1: {
            fontFamily: 'Advent Pro',
            fontWeight: 400,
            color: '#AFE7E9'
        },
    }
  })

