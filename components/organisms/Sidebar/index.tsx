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
                        <a href="#sidebarDashboard" data-bs-toggle="collapse">
                            <span className="badge bg-success float-end">02</span>
                            <i className="uil-home-alt"></i>
                            <span> Dashboards </span>
                        </a>
                        <div className="collapse" id="sidebarDashboard">
                            <ul className="nav-second-level">
                                <li><a href="index.html">Ecommerce</a></li>
                                <li><a href="dashboard-analytics.html">Analytics</a></li>
                            </ul>
                        </div>
                    </li>

                    <li className="menu-title mt-2">Apps</li>

                    <li>
                        <a href="apps-calendar.html">
                            <i data-feather="calendar"></i>
                            <span> Calendar </span>
                        </a>
                    </li>

                    <li>
                        <a href="apps-chat.html">
                            <i data-feather="message-square"></i>
                            <span> Chat </span>
                        </a>
                    </li>

                    <li>
                        <a href="#sidebarEmail" data-bs-toggle="collapse">
                            <i data-feather="mail"></i>
                            <span> Email </span>
                            <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="sidebarEmail">
                            <ul className="nav-second-level">
                                <li><a href="email-inbox.html">Inbox</a></li>
                                <li><a href="email-read.html">Read Email</a></li>
                                <li><a href="email-compose.html">Compose Email</a></li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <a href="#sidebarProjects" data-bs-toggle="collapse">
                            <i data-feather="briefcase"></i>
                            <span> Projects </span>
                            <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="sidebarProjects">
                            <ul className="nav-second-level">
                                <li><a href="project-list.html">List</a></li>
                                <li><a href="project-detail.html">Detail</a></li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <a href="#sidebarTasks" data-bs-toggle="collapse">
                            <i data-feather="clipboard"></i>
                            <span> Tasks </span>
                            <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="sidebarTasks">
                            <ul className="nav-second-level">
                                <li><a href="task-list.html">List</a></li>
                                <li><a href="task-board.html">Kanban Board</a></li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <a href="apps-file-manager.html">
                            <i data-feather="file-plus"></i>
                            <span> File Manager </span>
                        </a>
                    </li>

                    <li className="menu-title mt-2">Custom</li>

                    <li>
                        <a href="#sidebarExpages" data-bs-toggle="collapse">
                            <i data-feather="file-text"></i>
                            <span> Pages </span>
                            <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="sidebarExpages">
                            <ul className="nav-second-level">
                                <li><a href="pages-starter.html">Starter</a></li>
                                <li><a href="pages-profile.html">Profile</a></li>
                                <li><a href="pages-activity.html">Activity</a></li>
                                <li><a href="pages-invoice.html">Invoice</a></li>
                                <li><a href="pages-pricing.html">Pricing</a></li>
                                <li><a href="pages-maintenance.html">Maintenance</a></li>
                                <li><a href="pages-login.html">Login</a></li>
                                <li><a href="pages-register.html">Register</a></li>
                                <li><a href="pages-logout.html">Logout</a></li>
                                <li><a href="pages-recoverpw.html">Recover Password</a></li>
                                <li><a href="pages-lock-screen.html">Lock Screen</a></li>
                                <li><a href="pages-confirm-mail.html">Confirm</a></li>
                                <li><a href="pages-404.html">Error 404</a></li>
                                <li><a href="pages-500.html">Error 500</a></li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <a href="#sidebarLayouts" data-bs-toggle="collapse">
                            <i data-feather="layout"></i>
                            <span className="badge bg-danger float-end">New</span>
                            <span> Layouts </span>
                        </a>
                        <div className="collapse" id="sidebarLayouts">
                            <ul className="nav-second-level">
                                <li><a href="layouts-horizontal.html">Horizontal</a></li>
                                <li><a href="layouts-detached.html">Detached</a></li>
                                <li><a href="layouts-two-column.html">Two Column Menu</a></li>
                                <li><a href="layouts-preloader.html">Preloader</a></li>
                            </ul>
                        </div>
                    </li>

                    <li className="menu-title mt-2">Components</li>

                    <li>
                        <a href="ui-elements.html">
                            <i data-feather="package"></i>
                            <span> UI Elements </span>
                        </a>
                    </li>

                    <li>
                        <a href="widgets.html">
                            <i data-feather="gift"></i>
                            <span> Widgets </span>
                        </a>
                    </li>

                    <li>
                        <a href="#sidebarIcons" data-bs-toggle="collapse">
                            <i data-feather="cpu"></i>
                            <span> Icons </span>
                            <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="sidebarIcons">
                            <ul className="nav-second-level">
                                <li><a href="icons-unicons.html">Unicons</a></li>
                                <li><a href="icons-feather.html">Feather</a></li>
                                <li><a href="icons-bootstrap.html">Bootstrap</a></li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <a href="#sidebarForms" data-bs-toggle="collapse">
                            <i data-feather="bookmark"></i>
                            <span> Forms </span>
                            <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="sidebarForms">
                            <ul className="nav-second-level">
                                <li><a href="forms-basic.html">Basic Elements</a></li>
                                <li><a href="forms-advanced.html">Advanced</a></li>
                                <li><a href="forms-validation.html">Validation</a></li>
                                <li><a href="forms-wizard.html">Wizard</a></li>
                                <li><a href="forms-editor.html">Editor</a></li>
                                <li><a href="forms-file-uploads.html">File Uploads</a></li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <a href="charts.html">
                            <i data-feather="bar-chart-2"></i>
                            <span> Charts </span>
                        </a>
                    </li>

                    <li>
                        <a href="#sidebarTables" data-bs-toggle="collapse">
                            <i data-feather="grid"></i>
                            <span> Tables </span>
                            <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="sidebarTables">
                            <ul className="nav-second-level">
                                <li><a href="tables-basic.html">Basic</a></li>
                                <li><a href="tables-datatables.html">Data Tables</a></li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <a href="#sidebarMaps" data-bs-toggle="collapse">
                            <i data-feather="map"></i>
                            <span> Maps </span>
                            <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="sidebarMaps">
                            <ul className="nav-second-level">
                                <li><a href="maps-google.html">Google Maps</a></li>
                                <li><a href="maps-vector.html">Vector Maps</a></li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <a href="#sidebarMultilevel" data-bs-toggle="collapse">
                            <i data-feather="share-2"></i>
                            <span> Multi Level </span>
                            <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="sidebarMultilevel">
                            <ul className="nav-second-level">
                                <li>
                                    <a href="#sidebarMultilevel2" data-bs-toggle="collapse">
                                        Second Level <span className="menu-arrow"></span>
                                    </a>
                                    <div className="collapse" id="sidebarMultilevel2">
                                        <ul className="nav-second-level">
                                            <li><a href="javascript: void(0);">Item 1</a></li>
                                            <li><a href="javascript: void(0);">Item 2</a></li>
                                        </ul>
                                    </div>
                                </li>

                                <li>
                                    <a href="#sidebarMultilevel3" data-bs-toggle="collapse">
                                        Third Level <span className="menu-arrow"></span>
                                    </a>
                                    <div className="collapse" id="sidebarMultilevel3">
                                        <ul className="nav-second-level">
                                            <li><a href="javascript: void(0);">Item 1</a></li>
                                            <li>
                                                <a href="#sidebarMultilevel4" data-bs-toggle="collapse">
                                                    Item 2 <span className="menu-arrow"></span>
                                                </a>
                                                <div className="collapse" id="sidebarMultilevel4">
                                                    <ul className="nav-second-level">
                                                        <li><a href="javascript: void(0);">Item 1</a></li>
                                                        <li><a href="javascript: void(0);">Item 2</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>

            </div>
            <div className="clearfix"></div>

        </div>
    </div>
  )
}
