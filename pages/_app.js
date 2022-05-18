import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Footer from '../components/footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import '../styles/globals.css'
config.autoAddCss = false
function MyApp({ Component, pageProps }) {
  return <>
  <Navbar/>
   <Component {...pageProps} />
   <Footer/>
  </>
}

export default MyApp
