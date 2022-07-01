import Head from 'next/head'
import LayananHumasContent from '../../components/organisms/LayananHumas'
import Rightbar from '../../components/organisms/Rightbar'
import Sidebar from '../../components/organisms/Sidebar'
import Topbar from '../../components/organisms/Topbar'

export async function getStaticProps() {
  return { props: { bodyClassName: 'loading', bodyDataLayout: '{"mode": "light", "width": "fluid", "menuPosition": "fixed", "sidebar": { "color": "dark", "size": "default", "showuser": false}, "topbar": {"color": "light"}, "showRightSidebarOnPageLoad": true}' } }
}

export default function layananHumas() {
  return (
    <>
        <Head>
            <title>Pengajuan Layanan Kehumasan - Sinata</title>
        </Head>
        <div id="wrapper">
            <Topbar />
            <Sidebar />
            <LayananHumasContent />
        </div>
        <Rightbar />
    </>

  )
}
