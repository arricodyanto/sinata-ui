import Image from 'next/image'
import Footer from '../Footer'

export default function TambahKegiatanForm() {
  return (
    <div className="content-page">
        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box">
                            <h4 className="page-title">Tambah Kegiatan</h4>
                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Sinata</a></li>
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Riwayat</a></li>
                                    <li className="breadcrumb-item active">Tambah Kegiatan</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9">
                        <div className="card">
                            <div className="card-body">
                                <div className="alert alert-warning alert-dismissible fade show mb-3 mt-0 fst-italic fw-lighter" role="alert">
                                    Sebelum mengajukan layanan, harap pastikan judul dan detail acara anda sudah terdaftar pada sistem
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">Judul Kegiatan</label>
                                        <input type="text" className="form-control" id="judulKegiatan" placeholder="Masukkan judul acara kegiatan" />
                                    </div>
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
