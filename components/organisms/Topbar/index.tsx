export default function Topbar() {
  return (
    <div className="navbar-custom">
        <div className="container-fluid">
            <ul className="list-unstyled topnav-menu float-end mb-0">

                <li className="d-none d-lg-block">
                    <form className="app-search">
                        <div className="app-search-box dropdown">
                            <div className="input-group">
                                <input type="search" className="form-control" placeholder="Search..." id="top-search" />
                                <button className="btn input-group-text" type="submit">
                                    <i className="uil uil-search"></i>
                                </button>
                            </div>

                            <div className="dropdown-menu dropdown-lg" id="search-dropdown">
                                <div className="dropdown-header noti-title">
                                    <h5 className="text-overflow mb-2">Found 05 results</h5>
                                </div>
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <i className="uil uil-sliders-v-alt me-1"></i>
                                    <span>User profile settings</span>
                                </a>

                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <i className="uil uil-home-alt me-1"></i>
                                    <span>Analytics Report</span>
                                </a>

                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <i className="uil uil-life-ring me-1"></i>
                                    <span>How can I help you?</span>
                                </a>

                                <div className="dropdown-header noti-title">
                                    <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
                                </div>

                                <div className="notification-list">
                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <div className="d-flex text-align-start">
                                            <img className="me-2 rounded-circle" src="/images/users/avatar-2.jpg" alt="Generic placeholder image" height="32" />
                                            <div className="flex-grow-1">
                                                <h5 className="m-0 fs-14">Shirley Miller</h5>
                                                <span className="fs-12 mb-0">UI Designer</span>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <div className="d-flex text-align-start">
                                            <img className="me-2 rounded-circle" src="/images/users/avatar-5.jpg" alt="Generic placeholder image" height="32" />
                                            <div className="flex-grow-1">
                                                <h5 className="m-0 fs-14">Timothy Moreno</h5>
                                                <span className="fs-12 mb-0">Frontend Developer</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </form>
                </li>

                <li className="dropdown d-inline-block d-lg-none">
                    <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                        <i className="uil-search"></i>
                    </a>
                    <div className="dropdown-menu dropdown-lg dropdown-menu-end p-0">
                        <form className="p-3">
                            <input type="text" className="form-control" placeholder="Search ..." aria-label="search here" />
                        </form>
                    </div>
                </li>

                <li className="dropdown d-none d-lg-inline-block">
                    <a className="nav-link dropdown-toggle arrow-none" data-toggle="fullscreen" href="#">
                        <i className="bi-fullscreen"></i>
                    </a>
                </li>

                <li className="dropdown d-none d-lg-inline-block topbar-dropdown">
                    <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                        <i className="bi-grid"></i>
                    </a>
                    <div className="dropdown-menu dropdown-lg dropdown-menu-end p-0">

                        <div className="p-1">
                            <div className="row g-0">
                                <div className="col">
                                    <a className="dropdown-icon-item" href="#">
                                        <img src="/images/brands/slack.png" alt="slack" />
                                        <span>Slack</span>
                                    </a>
                                </div>
                                <div className="col">
                                    <a className="dropdown-icon-item" href="#">
                                        <img src="/images/brands/github.png" alt="Github" />
                                        <span>GitHub</span>
                                    </a>
                                </div>
                                <div className="col">
                                    <a className="dropdown-icon-item" href="#">
                                        <img src="/images/brands/dribbble.png" alt="dribbble" />
                                        <span>Dribbble</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </li>

                <li className="dropdown d-none d-lg-inline-block topbar-dropdown">
                    <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                        <i className="bi-globe"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">

                        <a href="javascript:void(0);" className="dropdown-item">
                            <img src="/images/flags/us.jpg" alt="user-image" className="me-1" height="12" />
                            <span className="align-middle">English</span>
                        </a>

                        <a href="javascript:void(0);" className="dropdown-item">
                            <img src="/images/flags/germany.jpg" alt="user-image" className="me-1" height="12" />
                            <span className="align-middle">German</span>
                        </a>

                        <a href="javascript:void(0);" className="dropdown-item">
                            <img src="/images/flags/italy.jpg" alt="user-image" className="me-1" height="12" />
                            <span className="align-middle">Italian</span>
                        </a>

                        <a href="javascript:void(0);" className="dropdown-item">
                            <img src="/images/flags/spain.jpg" alt="user-image" className="me-1" height="12" />
                            <span className="align-middle">Spanish</span>
                        </a>

                        <a href="javascript:void(0);" className="dropdown-item">
                            <img src="/images/flags/russia.jpg" alt="user-image" className="me-1" height="12" />
                            <span className="align-middle">Russian</span>
                        </a>

                    </div>
                </li>

                <li className="dropdown notification-list topbar-dropdown">
                    <a className="nav-link dropdown-toggle position-relative" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                        <i className="bi-bell"></i>
                        <span className="badge bg-danger rounded-circle noti-icon-badge">6</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end dropdown-lg">

                        <div className="dropdown-item noti-title">
                            <h5 className="m-0">
                                <span className="float-end">
                                    <a href="" className="text-dark"><small>Clear All</small></a>
                                </span>Notification
                            </h5>
                        </div>

                        <div className="noti-scroll" data-simplebar>

                            <a href="javascript:void(0);" className="dropdown-item notify-item border-bottom">
                                <div className="notify-icon bg-primary"><i className="uil uil-user-plus"></i></div>
                                <p className="notify-details">New user registered.<small className="text-muted">5 hours ago</small>
                                </p>
                            </a>

                            <a href="javascript:void(0);" className="dropdown-item notify-item border-bottom">
                                <div className="notify-icon">
                                    <img src="/images/users/avatar-1.jpg" className="img-fluid rounded-circle" alt="" />
                                </div>
                                <p className="notify-details">Karen Robinson</p>
                                <p className="text-muted mb-0 user-msg">
                                    <small>Wow ! this admin looks good and awesome design</small>
                                </p>
                            </a>

                            <a href="javascript:void(0);" className="dropdown-item notify-item border-bottom">
                                <div className="notify-icon">
                                    <img src="/images/users/avatar-2.jpg" className="img-fluid rounded-circle" alt="" />
                                </div>
                                <p className="notify-details">Cristina Pride</p>
                                <p className="text-muted mb-0 user-msg">
                                    <small>Hi, How are you? What about our next meeting</small>
                                </p>
                            </a>

                            <a href="javascript:void(0);" className="dropdown-item notify-item border-bottom active">
                                <div className="notify-icon bg-success"><i className="uil uil-comment-message"></i> </div>
                                <p className="notify-details">
                                    Jaclyn Brunswick commented on Dashboard<small className="text-muted">1 min ago</small>
                                </p>
                            </a>

                            <a href="javascript:void(0);" className="dropdown-item notify-item border-bottom">
                                <div className="notify-icon bg-danger"><i className="uil uil-comment-message"></i></div>
                                <p className="notify-details">
                                    Caleb Flakelar commented on Admin<small className="text-muted">4 days ago</small>
                                </p>
                            </a>

                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <div className="notify-icon bg-primary">
                                    <i className="uil uil-heart"></i>
                                </div>
                                <p className="notify-details">
                                    Carlos Crouch liked <b>Admin</b> <small className="text-muted">13 days ago</small>
                                </p>
                            </a>
                        </div>

                        <a href="javascript:void(0);" className="dropdown-item text-center text-primary notify-item notify-all">
                            View all <i className="fe-arrow-right"></i>
                        </a>

                    </div>
                </li>

                <li className="dropdown notification-list topbar-dropdown">
                    <a className="nav-link dropdown-toggle nav-user me-0" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                        <img src="/images/users/avatar-default.png" alt="user-image" className="rounded-circle" />
                        <span className="pro-user-name ms-1">
                            Maryani <i className="uil uil-angle-down"></i>
                        </span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end profile-dropdown ">
                        <div className="dropdown-header noti-title">
                            <h6 className="text-overflow m-0">Selamat Datang !</h6>
                        </div>

                        <a href="pages-profile.html" className="dropdown-item notify-item">
                            <i className="uil-user me-1"></i><span>Profil Akun</span>
                        </a>

                        <a href="pages-lock-screen.html" className="dropdown-item notify-item">
                            <i className="uil-padlock me-1"></i><span>Layar Kunci</span>
                        </a>

                        <div className="dropdown-divider"></div>

                        <a href="pages-logout.html" className="dropdown-item notify-item">
                            <i className="uil-exit me-1"></i><span>Log Out</span>
                        </a>

                    </div>
                </li>

                <li className="dropdown notification-list">
                    <a href="javascript:void(0);" className="nav-link right-bar-toggle">
                        <i className="uil-cog"></i>
                    </a>
                </li>

            </ul>

            <div className="logo-box">
                <a href="/dashboard" className="logo logo-dark">
                    <span className="logo-sm">
                        <img src="/images/logo-sm.png" alt="" height="24" />
                        {/* <!-- <span className="logo-lg-text-light">Shreyu</span> --> */}
                    </span>
                    <span className="logo-lg ms-3">
                        <img src="/images/logo-dark.png" alt="" height="40" />
                        {/* <!-- <span className="logo-lg-text-light">S</span> --> */}
                    </span>
                </a>

                <a href="/dashboard" className="logo logo-light">
                    <span className="logo-sm">
                        <img src="/images/logo-sm.png" alt="" height="24" />
                    </span>
                    <span className="logo-lg ms-3">
                        <img src="/images/logo-light.png" alt="" height="40" />
                    </span>
                </a>
            </div>

            <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
                <li>
                    <button className="button-menu-mobile">
                        <i className="uil-bars"></i>
                    </button>
                </li>

                <li>
                    <a className="navbar-toggle nav-link" data-bs-toggle="collapse" data-bs-target="#topnav-menu-content">
                        <div className="lines">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </a>
                </li>

                <li className="dropdown d-none d-xl-block">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                        Create New
                        <i className="uil uil-angle-down"></i>
                    </a>
                    <div className="dropdown-menu">
                        <a href="javascript:void(0);" className="dropdown-item">
                            <i className="uil uil-bag me-1"></i><span>New Projects</span>
                        </a>

                        <a href="javascript:void(0);" className="dropdown-item">
                            <i className="uil uil-user-plus me-1"></i><span>Create Users</span>
                        </a>

                        <a href="javascript:void(0);" className="dropdown-item">
                            <i className="uil uil-chart-pie me-1"></i><span>Revenue Report</span>
                        </a>

                        <a href="javascript:void(0);" className="dropdown-item">
                            <i className="uil uil-cog me-1"></i><span>Settings</span>
                        </a>

                        <div className="dropdown-divider"></div>

                        <a href="javascript:void(0);" className="dropdown-item">
                            <i className="uil uil-question-circle me-1"></i><span>Help & Support</span>
                        </a>

                    </div>
                </li>

            </ul>
            <div className="clearfix"></div>
        </div>
    </div>

  )
}
