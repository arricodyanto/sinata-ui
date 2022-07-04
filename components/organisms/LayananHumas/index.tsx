import Image from 'next/image'
import Footer from '../Footer'

export default function LayananHumasContent() {
  return (
    <div className="content-page">
        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box">
                            <h4 className="page-title">Pengajuan Layanan Hubungan Masyarakat</h4>
                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Sinata</a></li>
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Ajukan Layanan</a></li>
                                    <li className="breadcrumb-item active">Layanan Hubungan Masyarakat</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9">
                        <div className="card">
                            <div className="card-body">
                                <ul className="nav nav-pills navtab-bg nav-justified p-1">
                                    <li className="nav-item">
                                        <a href="#peliputan" data-bs-toggle="tab" aria-expanded="false" className="nav-link">
                                            <span className="d-block d-sm-none"><i className="uil-home-alt"></i></span>
                                            <span className="d-none d-sm-block">Layanan Peliputan</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#konpers" data-bs-toggle="tab" aria-expanded="true" className="nav-link active">
                                            <span className="d-block d-sm-none"><i className="uil-user"></i></span>
                                            <span className="d-none d-sm-block">Layanan Konferesi Pers</span>
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content text-muted">
                                    <div className="tab-pan show active" id="peliputan">
                                        <form>
                                            <div className="mb-3">
                                                <label className="form-label">Judul Kegiatan</label>
                                                <select data-plugin="customselect" className="form-select" data-placeholder="Cari Judul Kegiatan">
                                                    <option></option>
                                                    {/* <Link href="/kegiatan/tambah">Tambahkan Kegiatan Baru</Link> */}
                                                    <option value="Kegiatan 1">Kegiatan 1</option>
                                                    <option value="Kegiatan 2">Kegiatan 2</option>
                                                    <option value="Kegiatan 3">Kegiatan 3</option>
                                                    <option value="Kegiatan 4">Kegiatan 4</option>
                                                    <option value="Kegiatan 5">Kegiatan 5</option>
                                                </select>
                                            </div>

                                            {/* <div className="mb-3">
                                                <label className="form-label" for="judulKegiatan">Judul Kegiatan</label>
                                                <input type="text" className="form-control" id="judulKegiatan" placeholder="Masukkan judul acara kegiatan" />
                                            </div> */}
                                            <div className="mb-3">
                                                <label className="form-label">Deskripsi Kegiatan</label>
                                                <textarea className="form-control" rows={2} id="deskripsiKegiatan" placeholder="Deskripsikan secara singkat kegiatan inti acara"></textarea>
                                            </div>
                                            <div className="row">
                                                <div className="mb-3 col-md-3">
                                                    <label className="form-label">Tanggal</label>
                                                    <input type="date" id="basic-datepicker" className="form-control" placeholder="Tanggal Kegiatan" />
                                                </div>
                                                <div className="mb-3 col-md-2">
                                                    <label className="form-label">Waktu</label>
                                                    <input type="time" id="24hours-timepicker" className="form-control" placeholder="Waktu Kegiatan" />
                                                </div>
                                            </div>
                                            <div className="mb-1">
                                                <label className="form-label">Tempat/Lokasi</label>
                                                <input type="text" className="form-control" id="tempatKegiatan" placeholder="Masukkan lokasi acara kegiatan" />
                                            </div>
                                            <div className="div">
                                                <span className="badge badge-soft-info mb-3">Data kegiatan akan digunakan pada pelayanan yang diajukan, mohon pastikan informasi yang anda masukkan sudah benar.</span>
                                            </div>
                                            <button type="submit" className="btn btn-primary">Tambahkan Data</button>
                                        </form>
                                    </div>
                                    <div className="tab-pane" id="konpers">
                                        <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                                            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                                            Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras
                                            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
                                            tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
                                            ac, enim.</p>
                                        <p className="mb-0">Vakal text here dolor sit amet, consectetuer adipiscing
                                            elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                                            natoque penatibus et magnis dis parturient montes, nascetur
                                            ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                                            pretium quis, sem. Nulla consequat massa quis enim.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <Image src="/images/white-space-1.jpg" width={570} height={1160} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
