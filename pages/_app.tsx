import '../styles/bootstrap.min.css'
import '../styles/app.min.css'
import '../styles/icons.min.css'
import '../public/libs/flatpickr/flatpickr.min.css'
import '../public/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css'
import '../public/libs/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css'
import '../public/libs/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css'
import '../public/libs/datatables.net-select-bs4/css//select.bootstrap4.min.css'

import Script from 'next/script'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Script src="/js/vendor.min.js" />
      <Script src="/js/app.min.js" />
      <Script src="/libs/select2/js/select2.min.js" />
      <Script src="/libs/multiselect/js/jquery.multi-select.js" />
      <Script src="/libs/flatpickr/flatpickr.min.js" />
      <Script src="/libs/moment/min/moment.min.js" />
      <Script src="/libs/bootstrap-touchspin/jquery.bootstrap-touchspin.min.js" />
      <Script src="/libs/spectrum-colorpicker2/spectrum.min.js" />
      <Script src="/libs/datatables.net/js/jquery.dataTables.min.js" />
      <Script src="/libs/datatables.net-bs4/js/dataTables.bootstrap4.min.js" />
      <Script src="/libs/datatables.net-responsive/js/dataTables.responsive.min.js" />
      <Script src="/libs/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js" />
      <Script src="/libs/datatables.net-buttons/js/dataTables.buttons.min.js" />
      <Script src="/libs/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js" />
      <Script src="/libs/datatables.net-buttons/js/buttons.html5.min.js" />
      <Script src="/libs/datatables.net-buttons/js/buttons.flash.min.js" />
      <Script src="/libs/datatables.net-buttons/js/buttons.print.min.js" />
      <Script src="/libs/datatables.net-keytable/js/dataTables.keyTable.min.js" />
      <Script src="/libs/datatables.net-select/js/dataTables.select.min.js" />

      <Script src="/js/pages/form-advanced.init.js" />
      <Script src="/js/pages/datatables.init.js" />

    </>
  )
}

export default MyApp
