import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json';
import HeadTags from '../src/components/HeadTags'

interface Idb {
    theme:{
            colors: {
              primary?: string,
              secondary?: string,
              mainBg?: string,
              contrastText?: string,
              wrong?: string,
              success?: string,
              darkBlue?: string,
              darkRed?: string, 
              dargKray?: string ,
              yellow?: string,
              caramel?: string
          }
    }
}

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
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}