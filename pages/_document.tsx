import Document, { Html, Head, Main, NextScript } from 'next/document'
// import Body from '../components/organisms/Body'
// import Sidebar from '../components/organisms/Sidebar'
// import Topbar from '../components/organisms/Topbar'

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const pageProps = this.props?.__NEXT_DATA__?.props?.pageProps
    return <Html>
        <Head>
          <link rel="shortcut icon" href="/images/favicon.ico" />
        </Head>
        <body className={pageProps.bodyClassName} data-layout={pageProps.bodyDataLayout}>
        {/* <body className="loading" data-layout='{"mode": "light", "width": "fluid", "menuPosition": "fixed", "sidebar": { "color": "dark", "size": "default", "showuser": false}, "topbar": {"color": "light"}, "showRightSidebarOnPageLoad": true}'> */}
            <Main />
            <NextScript />
        </body>
    </Html>
  }
}
