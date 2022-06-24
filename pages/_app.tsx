import '../styles/bootstrap.min.css'
import '../styles/icons.min.css'
import '../styles/app.min.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Shreyu Coba Lagi</title>

        {/* <!-- App favicon --> */}
        <link rel="shortcut icon" href="/images/favicon.ico" />

        {/* <!-- App css --> */}
        <link href="/styles/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="/styles/icons.min.css" rel="stylesheet" type="text/css" />
        <link href="/styles/app.min.css" rel="stylesheet" type="text/css" />
      </Head>
      <Component {...pageProps} />

      {/* <!-- Vendor js --> */}
      <Script src="/js/vendor.min.js" type="text/javascript"></Script>

      {/* <!-- App js --> */}
      <Script src="/js/app.min.js" type="text/javascript"></Script>
    </>
  )
}

export default MyApp
