import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export async function getStaticProps() {
  return { props: { bodyClassName: 'authentication-bg' } }
}

export default function logout() {
  return (
    <>
        <Head>
            <title>Log Out!</title>
        </Head>
        <div className="account-pages my-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="row g-0">
                                    <div className="col p-4">
                                        <div className="text-center">
                                                <div className="mx-auto">
                                                    <a href="/">
                                                        <img src="/images/logo-dark.png" alt="" height="40" />
                                                    </a>
                                                </div>
                                                <div className="mt-4">
                                                    <div className="logout-checkmark">
                                                        <Image src="/svg/check-mark.svg" width={500} height={500} />
                                                    </div>
                                                </div>
                                                <h4 className="h4 mb-0 mt-2">Jangan lupa untuk kembali ya !</h4>
                                                <p className="text-muted mt-1 mb-2">
                                                    Akun Anda telah berhasil keluar.
                                                </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-12 text-center">
                                <p className="text-muted">Kembali ke Halaman<Link href="/login"><a className="text-primary fw-bold ms-1">Log in</a></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
