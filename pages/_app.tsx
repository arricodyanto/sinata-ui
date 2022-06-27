import '../styles/bootstrap.min.css'
import '../styles/app.min.css'
import '../styles/icons.min.css'
// import '../public/libs/flatpickr/flatpickr.min.css'
import Script from 'next/script'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Script src="/js/vendor.min.js" />
      <Script src="/js/app.min.js" />
      {/* <!-- page js --> */}
      {/* <Script src="/js/pages/dashboard.init.js" /> */}
    </>
  )
}

export default MyApp
