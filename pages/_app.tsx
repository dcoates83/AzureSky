import '../styles/footer.css'
import '../styles/main.css'

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
  // h3: { fontSize: '3em' },
  palette: {
    primary: {
      main: '#EFA3A3',
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
