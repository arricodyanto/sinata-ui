import Head from 'next/head'
import Rightbar from '../../components/organisms/Rightbar'
import Sidebar from '../../components/organisms/Sidebar'
import TambahKegiatanForm from '../../components/organisms/TambahKegiatanForm'
import Topbar from '../../components/organisms/Topbar'

export async function getStaticProps() {
  return { props: { bodyClassName: 'loading', bodyDataLayout: '{"mode": "light", "width": "fluid", "menuPosition": "fixed", "sidebar": { "color": "dark", "size": "default", "showuser": false}, "topbar": {"color": "light"}, "showRightSidebarOnPageLoad": true}' } }
}

export default function TambahKegiatan() {
  return (
    <>
        <Head>
            <title>Tambah Kegiatan - Sinata</title>
        </Head>
        <div id="wrapper">
            <Topbar />
            <Sidebar />
            <TambahKegiatanForm />
        </div>
        <Rightbar />

    </>
  )
}
