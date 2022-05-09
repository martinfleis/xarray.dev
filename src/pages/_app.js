import { ChakraProvider } from "@chakra-ui/react"
import theme from "../theme"
import { Container } from "@chakra-ui/react"
import { Header } from "layouts/Header"
import { Footer } from "layouts/Footer"
import MDXComponentsProvider from "components/MDXComponentsProvider"
import Head from "next/head"

const Layout = ({ children }) => {
  return (
    <>
      <Container maxW={"full"} maxH={"full"}>
        <Header />
        {children}
        <Footer />
      </Container>
    </>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://pydata-datasette.herokuapp.com/" />
        <title>xarray: N-D labeled arrays and datasets in Python</title>
      </Head>
      <Layout>
        <MDXComponentsProvider>
          <Component {...pageProps} />
        </MDXComponentsProvider>
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
