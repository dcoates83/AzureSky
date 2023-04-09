import '../styles/footer.css'
import '../styles/main.css'

import { createTheme, ThemeProvider } from '@mui/material/styles'
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
  },
})
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
