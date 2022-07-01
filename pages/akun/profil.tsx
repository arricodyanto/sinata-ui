import Head from 'next/head'
import Rightbar from '../../components/organisms/Rightbar'
import Sidebar from '../../components/organisms/Sidebar'
import Topbar from '../../components/organisms/Topbar'

export async function getStaticProps() {
  return { props: { bodyClassName: 'loading', bodyDataLayout: '{"mode": "light", "width": "fluid", "menuPosition": "fixed", "sidebar": { "color": "dark", "size": "default", "showuser": false}, "topbar": {"color": "light"}, "showRightSidebarOnPageLoad": true}' } }
}

export default function profil() {
  return (
    <>
        <Head>
            <title>Profil Akun - Sinata</title>
        </Head>
        <div id="wrapper">
            <Topbar />
            <Sidebar />
            <div>Profil Akun</div>
        </div>
        <Rightbar />
    </>
  )
}
