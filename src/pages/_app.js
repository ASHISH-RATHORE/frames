// import theme from '../config/theme'
import '@/styles/globals.css'
import { ThemeProvider } from '@mui/material/styles'
import Head from 'next/head';
import { useNProgress } from '../hooks/use-nprogress';
import { CssBaseline } from '@mui/material';
import { createTheme } from '@/theme';
import Link from 'next/link';

export default function App({ Component, pageProps }) {

  const theme =createTheme()
  const getLayout = Component.getLayout ?? ((page) => page);
  useNProgress();
  return (
    <>
    <Head>
      <title>
      Pixel
      </title>
      
      <meta
        name="viewport"
        content="initial-scale=1, width=device-width"
        />
    </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
            {
                 getLayout(<Component {...pageProps} />)
              }
        </ThemeProvider>
  
              </>
  )
}
