export default function Sidebar() {
  return (
    <div className="left-side-menu">
        <div className="h-100" data-simplebar>
            <div className="user-box text-center">
                <img src="images/users/avatar-1.jpg" alt="user-img" title="Mat Helme" className="rounded-circle avatar-md" />
                <div className="dropdown">
                    <a href="javascript: void(0);" className="text-dark dropdown-toggle h5 mt-2 mb-1 d-block" data-bs-toggle="dropdown">Nik Patel</a>
                    <div className="dropdown-menu user-pro-dropdown">

                        <a href="pages-profile.html" className="dropdown-item notify-item">
                            <i data-feather="user" className="icon-dual icon-xs me-1"></i><span>My Account</span>
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                            <i data-feather="settings" className="icon-dual icon-xs me-1"></i><span>Settings</span>
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                            <i data-feather="help-circle" className="icon-dual icon-xs me-1"></i><span>Support</span>
                        </a>
                        <a href="pages-lock-screen.html" className="dropdown-item notify-item">
                            <i data-feather="lock" className="icon-dual icon-xs me-1"></i><span>Lock Screen</span>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                            <i data-feather="log-out" className="icon-dual icon-xs me-1"></i><span>Logout</span>
                        </a>

                    </div>
                </div>
                <p className="text-muted">Admin Head</p>
            </div>

            <div id="sidebar-menu">

                <ul id="side-menu">
                    <li>
                        <a href="/dashboard">
                            <i className="uil-home-alt"></i>
                            <span> Dashboard </span>
                        </a>
                    </li>
                    <li className="menu-title mt-2">Layanan</li>
                    <li>
                        <a href="#sidebarRiwayat" data-bs-toggle="collapse">
                            <i className="uil-calender"></i>
                            <span> Riwayat </span>
                            <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="sidebarRiwayat">
                            <ul className="nav-second-level">
                                <li><a href="/kegiatan/riwayat">Riwayat Kegiatan</a></li>
                                <li><a href="/kegiatan/tambah">Tambah Kegiatan</a></li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <a href="#sidebarLayanan" data-bs-toggle="collapse">
                            <i className="uil-archive-alt"></i>
                            <span> Ajukan Layanan </span>
                            <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="sidebarLayanan">
                            <ul className="nav-second-level">
                                <li><a href="/layanan/layanan_humas">Layanan Hubungan Masyarakat</a></li>
                                <li><a href="/layanan-publikasi">Layanan Publikasi</a></li>
                                <li><a href="/layanan-media">Layanan Media</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="menu-title mt-2">Akun</li>
                    <li>
                        <a href="/akun/profil">
                            <i className="uil-user"></i>
                            <span> Profil Akun </span>
                        </a>
                    </li>

                    <li>
                        <a href="/akun/logout">
                            <i className="uil-exit"></i>
                            <span> Log Out </span>
                        </a>
                    </li>
                </ul>

            </div>
            <div className="clearfix"></div>

        </div>
    </div>
  )
}
