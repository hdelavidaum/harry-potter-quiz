import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json'
import HeadTags from '../src/components/HeadTags'
import { AppProvider } from '../src/context'
import {Idb} from '../src/types'



const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme}: Idb) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const theme = db.theme;

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <HeadTags/>
      <AppProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </AppProvider>
    </>
  )
}