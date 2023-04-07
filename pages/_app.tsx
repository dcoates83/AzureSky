import 'tailwindcss/tailwind.css'
import '../styles/footer.css'
import '../styles/main.css'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import { AppProps } from 'next/app'

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "'Public Sans', 'Open Sans', 'sans-serif'",
      // fontSize: '1.125rem',
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
