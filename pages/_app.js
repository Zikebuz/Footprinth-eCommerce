import '../styles/globals.css'
import '../styles/layout.css'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { SnipcartProvider } from 'use-snipcart'

function MyApp({ Component, pageProps }) {
  return (
  <SnipcartProvider>
  <Header />
  <Component {...pageProps} />
  <Footer />
  </SnipcartProvider>
  )
}

export default MyApp


// import and define both the header and the footer components inside the react fragments
