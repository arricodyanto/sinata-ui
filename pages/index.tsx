import type { NextPage } from 'next'
// import Image from 'next/image'
import Topbar from '../components/organisms/Topbar'

const Home: NextPage = () => {
  return (
    <>
        {/* <!-- Begin page --> */}
        <div id="wrapper">

            {/* <!-- Topbar Start --> */}
            <Topbar />
            {/* <!-- end Topbar --> */}

            {/* <!-- ========== Left Sidebar Start ========== --> */}
            <div className="left-side-menu">
                <div className="media user-profile mt-2 mb-2">
                    <img src="/images/users/avatar-7.jpg" className="avatar-sm rounded-circle mr-2" alt="Shreyu" />
                    <img src="/images/users/avatar-7.jpg" className="avatar-xs rounded-circle mr-2" alt="Shreyu" />

                    <div className="media-body">
                        <h6 className="pro-user-name mt-0 mb-0">Nik Patel</h6>
                        <span className="pro-user-desc">Administrator</span>
                    </div>
                    <div className="dropdown align-self-center profile-dropdown-menu">
                        <a className="dropdown-toggle mr-0" data-toggle="dropdown" href="" role="button" aria-haspopup="false"
                            aria-expanded="false">
                            <span data-feather="chevron-down"></span>
                        </a>
                        <div className="dropdown-menu profile-dropdown">
                            <a href="pages-profile.html" className="dropdown-item notify-item">
                                <i data-feather="user" className="icon-dual icon-xs mr-2"></i>
                                <span>My Account</span>
                            </a>

                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i data-feather="settings" className="icon-dual icon-xs mr-2"></i>
                                <span>Settings</span>
                            </a>

                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i data-feather="help-circle" className="icon-dual icon-xs mr-2"></i>
                                <span>Support</span>
                            </a>

                            <a href="pages-lock-screen.html" className="dropdown-item notify-item">
                                <i data-feather="lock" className="icon-dual icon-xs mr-2"></i>
                                <span>Lock Screen</span>
                            </a>

                            <div className="dropdown-divider"></div>

                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i data-feather="log-out" className="icon-dual icon-xs mr-2"></i>
                                <span>Logout</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="sidebar-content">
                    {/* <!--- Sidemenu --> */}
                    <div id="sidebar-menu" className="slimscroll-menu">
                        <ul className="metismenu" id="menu-bar">
                            <li className="menu-title">Navigation</li>

                            <li>
                                <a href="/">
                                    <i data-feather="home"></i>
                                    <span className="badge badge-success float-right">1</span>
                                    <span> Dashboard </span>
                                </a>
                            </li>
                            <li className="menu-title">Apps</li>
                            <li>
                                <a href="apps-calendar.html">
                                    <i data-feather="calendar"></i>
                                    <span> Calendar </span>
                                </a>
                            </li>
                            <li>
                                <a href="/#">
                                    <i data-feather="inbox"></i>
                                    <span> Email </span>
                                    <span className="menu-arrow"></span>
                                </a>

                                <ul className="nav-second-level" aria-expanded="false">
                                    <li>
                                        <a href="email-inbox.html">Inbox</a>
                                    </li>
                                    <li>
                                        <a href="email-read.html">Read</a>
                                    </li>
                                    <li>
                                        <a href="email-compose.html">Compose</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="/#">
                                    <i data-feather="briefcase"></i>
                                    <span> Projects </span>
                                    <span className="menu-arrow"></span>
                                </a>

                                <ul className="nav-second-level" aria-expanded="false">
                                    <li>
                                        <a href="project-list.html">List</a>
                                    </li>
                                    <li>
                                        <a href="project-detail.html">Detail</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="/#">
                                    <i data-feather="bookmark"></i>
                                    <span> Tasks </span>
                                    <span className="menu-arrow"></span>
                                </a>

                                <ul className="nav-second-level" aria-expanded="false">
                                    <li>
                                        <a href="task-list.html">List</a>
                                    </li>
                                    <li>
                                        <a href="task-board.html">Kanban Board</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-title">Custom</li>
                            <li>
                                <a href="/#">
                                    <i data-feather="file-text"></i>
                                    <span> Pages </span>
                                    <span className="menu-arrow"></span>
                                </a>
                                <ul className="nav-second-level" aria-expanded="false">
                                    <li>
                                        <a href="pages-starter.html">Starter</a>
                                    </li>
                                    <li>
                                        <a href="pages-profile.html">Profile</a>
                                    </li>
                                    <li>
                                        <a href="pages-activity.html">Activity</a>
                                    </li>
                                    <li>
                                        <a href="pages-invoice.html">Invoice</a>
                                    </li>
                                    <li>
                                        <a href="pages-pricing.html">Pricing</a>
                                    </li>
                                    <li>
                                        <a href="pages-maintenance.html">Maintenance</a>
                                    </li>
                                    <li>
                                        <a href="pages-login.html">Login</a>
                                    </li>
                                    <li>
                                        <a href="pages-register.html">Register</a>
                                    </li>
                                    <li>
                                        <a href="pages-recoverpw.html">Recover Password</a>
                                    </li>
                                    <li>
                                        <a href="pages-confirm-mail.html">Confirm</a>
                                    </li>
                                    <li>
                                        <a href="pages-404.html">Error 404</a>
                                    </li>
                                    <li>
                                        <a href="pages-500.html">Error 500</a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a href="/#">
                                    <i data-feather="layout"></i>
                                    <span> Layouts </span>
                                    <span className="menu-arrow"></span>
                                </a>
                                <ul className="nav-second-level" aria-expanded="false">
                                    <li>
                                        <a href="layouts-horizontal.html">Horizontal Nav</a>
                                    </li>
                                    <li>
                                        <a href="layouts-rtl.html">RTL</a>
                                    </li>
                                    <li>
                                        <a href="layouts-dark.html">Dark</a>
                                    </li>
                                    <li>
                                        <a href="layouts-scrollable.html">Scrollable</a>
                                    </li>
                                    <li>
                                        <a href="layouts-boxed.html">Boxed</a>
                                    </li>
                                    <li>
                                        <a href="layouts-preloader.html">With Pre-loader</a>
                                    </li>
                                    <li>
                                        <a href="layouts-dark-sidebar.html">Dark Side Nav</a>
                                    </li>
                                    <li>
                                        <a href="layouts-condensed.html">Condensed Nav</a>
                                    </li>
                                </ul>
                            </li>

                            <li className="menu-title">Components</li>

                            <li>
                                <a href="/#">
                                    <i data-feather="package"></i>
                                    <span> UI Elements </span>
                                    <span className="menu-arrow"></span>
                                </a>
                                <ul className="nav-second-level" aria-expanded="false">
                                    <li>
                                        <a href="components-bootstrap.html">Bootstrap UI</a>
                                    </li>
                                    <li>
                                        <a href="/#" aria-expanded="false">Icons
                                            <span className="menu-arrow"></span>
                                        </a>
                                        <ul className="nav-third-level" aria-expanded="false">
                                            <li>
                                                <a href="icons-feather.html">Feather Icons</a>
                                            </li>
                                            <li>
                                                <a href="icons-unicons.html">Unicons Icons</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="widgets.html">Widgets</a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a href="/#" aria-expanded="false">
                                    <i data-feather="file-text"></i>
                                    <span> Forms </span>
                                    <span className="menu-arrow"></span>
                                </a>
                                <ul className="nav-second-level" aria-expanded="false">
                                    <li>
                                        <a href="forms-basic.html">Basic Elements</a>
                                    </li>
                                    <li>
                                        <a href="forms-advanced.html">Advanced</a>
                                    </li>
                                    <li>
                                        <a href="forms-validation.html">Validation</a>
                                    </li>
                                    <li>
                                        <a href="forms-wizard.html">Wizard</a>
                                    </li>
                                    <li>
                                        <a href="forms-editor.html">Editor</a>
                                    </li>
                                    <li>
                                        <a href="forms-file-uploads.html">File Uploads</a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a href="charts-apex.html" aria-expanded="false">
                                    <i data-feather="pie-chart"></i>
                                    <span> Charts </span>
                                </a>
                            </li>

                            <li>
                                <a href="/#" aria-expanded="false">
                                    <i data-feather="grid"></i>
                                    <span> Tables </span>
                                    <span className="menu-arrow"></span>
                                </a>
                                <ul className="nav-second-level" aria-expanded="false">
                                    <li>
                                        <a href="tables-basic.html">Basic</a>
                                    </li>
                                    <li>
                                        <a href="tables-datatables.html">Advanced</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- End Sidebar --> */}

                    <div className="clearfix"></div>
                </div>
                {/* <!-- Sidebar -left --> */}

            </div>
            {/* <!-- Left Sidebar End --> */}

            {/* <!-- ============================================================== -->
            <!-- Start Page Content here -->
            <!-- ============================================================== --> */}

            <div className="content-page">
                <div className="content">

                    {/* <!-- Start Content--> */}
                    <div className="container-fluid">
                        <div className="row page-title">
                            <div className="col-md-12">
                                <nav aria-label="breadcrumb" className="float-right mt-1">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="">Shreyu</a></li>
                                        <li className="breadcrumb-item"><a href="">Pages</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Starter</li>
                                    </ol>
                                </nav>
                                <h4 className="mb-1 mt-0">Starter Page</h4>
                            </div>
                        </div>
                    </div>
                    {/* <!-- container-fluid --> */}
                </div>
                {/* <!-- content --> */}

                {/* <!-- Footer Start --> */}
                <footer className="footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                2019 &copy; Shreyu. All Rights Reserved. Crafted with <i className='uil uil-heart text-danger font-size-12'></i> by <a href="https://coderthemes.com">Coderthemes</a>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* <!-- end Footer --> */}

            </div>

            {/* <!-- ============================================================== -->
            <!-- End Page content -->
            <!-- ============================================================== --> */}

        </div>
    </>
  )
}

export default Home
