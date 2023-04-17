import '../styles/footer.css'
import '../styles/main.css'
import '../styles/waveStyles.css'

import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles'
import { AppProps } from 'next/app'

import Layout from '../components/Layout/Layout'

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
      <CssBaseline />
      {/* <GlobalStyles styles={{ ...theme.typography }} /> */}
      <ThemeProvider theme={responsiveTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
