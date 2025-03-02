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
          fontFamily: 'Alegreya Sans',
          fontWeight: 100,
          fontSize: 96,
        },
        h3: {
          fontFamily: 'Alegreya Sans',
          fontSize: 30,
          fontWeight: 100,
        },
        h4: {
            fontFamily: 'Alegreya Sans',
            fontSize: 26,
            fontWeight: 100,
        },
        h5: {
          fontFamily: 'Alegreya Sans',
            fontSize: 24,
            fontWeight: 100,
        },
        h6: {
          fontFamily: 'Alegreya Sans',
            fontSize: 20,
            fontWeight: 100,
        },
        body1: {
            fontFamily: 'Alegreya Sans',
            fontWeight: 100,
        },
    }
  })

