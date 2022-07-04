import Head from 'next/head'
import DashboardContent from '../../components/organisms/DashboardContent'
// import Preloader from '../../components/organisms/Preloader'
import Rightbar from '../../components/organisms/Rightbar'
import Sidebar from '../../components/organisms/Sidebar'
import Topbar from '../../components/organisms/Topbar'

export async function getStaticProps() {
  return { props: { bodyClassName: 'loading', bodyDataLayout: '{"mode": "light", "width": "fluid", "menuPosition": "fixed", "sidebar": { "color": "dark", "size": "default", "showuser": false}, "topbar": {"color": "light"}, "showRightSidebarOnPageLoad": true}' } }
}

export default function dashboard(props:any) {
  return (
    <>
      <Head>
        <title>Dashboard - Sistem Informasi Manajemen Pelayanan dan Berita | SINATA</title>
      </Head>
      <div id="wrapper">
          {/* <Preloader /> */}
          <Topbar />
          <Sidebar />
          <DashboardContent />
      </div>
      <Rightbar />

    </>
  )
}
