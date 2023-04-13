import '../styles/footer.css'
import '../styles/main.css'
import '../styles/waveStyles.css'

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles'
import { AppProps } from 'next/app'

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "'Public Sans', 'Open Sans', 'sans-serif'",
    },
  },
  palette: {
    primary: {
      main: '#EFA3A3',
    },
    secondary: {
      main: '#279AF1',
      // main: '#2081C3',
    },
  },
})
export default function App({ Component, pageProps }: AppProps) {
  const responsiveTheme = responsiveFontSizes(theme)
  return (
    <>
      <ThemeProvider theme={responsiveTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
