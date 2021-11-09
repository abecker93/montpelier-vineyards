import '../styles/globals.css'
// import "tailwindcss/tailwind.css"

import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import NavBar from '../components/utils/NavBar'
import Footer from '../components/utils/Footer'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Montpelier Vineyards</title>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <NavBar/>
    {/* <section
      className="max-h-full"
    > */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
