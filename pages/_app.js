import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Navbar from '../components/Navbar/Navbar'
import '../styles/globals.css'
config.autoAddCss = false
function MyApp({ Component, pageProps }) {
  return <>
  <Navbar/>
   <Component {...pageProps} />
  </>
}

export default MyApp
