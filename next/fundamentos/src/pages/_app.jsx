// Aqui referênciamos CSS globais

import '../styles/globals.css'
import'../styles/app.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
