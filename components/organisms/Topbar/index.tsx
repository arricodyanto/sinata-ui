import Image from 'next/image'

export default function Topbar() {
  return (
    <div className="navbar navbar-expand flex-column flex-md-row navbar-custom">
        <div className="container-fluid">
            <a href="/" className="navbar-brand mr-0 mr-md-2 logo">
                <span className="logo-lg">
                    <Image src="/images/logo.png" alt="" height={24} width={24} />
                    <span className="d-inline h5 ml-1 text-logo">Shreyu</span>
                </span>
                <span className="logo-sm">
                    <Image src="/images/logo.png" alt="" height={24} width={24} />
                </span>
            </a>

            <ul className="navbar-nav bd-navbar-nav flex-row list-unstyled menu-left mb-0">
                <li className="">
                    <button className="button-menu-mobile open-left disable-btn">
                        <i data-feather="menu" className="menu-icon"></i>
                        <i data-feather="x" className="close-icon"></i>
                    </button>
                </li>
            </ul>

            <ul className="navbar-nav flex-row ml-auto d-flex list-unstyled topnav-menu float-right mb-0">
                <li className="d-none d-sm-block">
                    <div className="app-search">
                        <form>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search..." />
                                <span data-feather="search"></span>
                            </div>
                        </form>
                    </div>
                </li>
                <li className="dropdown notification-list" data-toggle="tooltip" data-placement="left"
                    title="8 new unread notifications">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="false"
                        aria-expanded="false">
                        <i data-feather="bell"></i>
                        <span className="noti-icon-badge"></span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-lg">

                        <div className="dropdown-item noti-title border-bottom">
                            <h5 className="m-0 font-size-16">
                                <span className="float-right">
                                    <a href="" className="text-dark">
                                        <small>Clear All</small>
                                    </a>
                                </span>Notification
                            </h5>
                        </div>

                        <div className="slimscroll noti-scroll">

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
                                <p className="notify-details">Jaclyn Brunswick commented on Dashboard<small className="text-muted">1
                                        min
                                        ago</small></p>
                            </a>

                            <a href="javascript:void(0);" className="dropdown-item notify-item border-bottom">
                                <div className="notify-icon bg-danger"><i className="uil uil-comment-message"></i></div>
                                <p className="notify-details">Caleb Flakelar commented on Admin<small className="text-muted">4 days
                                        ago</small></p>
                            </a>

                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <div className="notify-icon bg-primary">
                                    <i className="uil uil-heart"></i>
                                </div>
                                <p className="notify-details">Carlos Crouch liked
                                    <b>Admin</b>
                                    <small className="text-muted">13 days ago</small>
                                </p>
                            </a>
                        </div>

                        <a href="javascript:void(0);"
                            className="dropdown-item text-center text-primary notify-item notify-all border-top">
                            View all
                            <i className="fi-arrow-right"></i>
                        </a>

                    </div>
                </li>

                <li className="dropdown notification-list align-self-center profile-dropdown">
                    <a className="nav-link dropdown-toggle nav-user mr-0" data-toggle="dropdown" href="#" role="button"
                        aria-haspopup="false" aria-expanded="false">
                        <div className="media user-profile ">
                            <img src="/images/users/avatar-7.jpg" alt="user-image" className="rounded-circle align-self-center" />
                            <div className="media-body text-left">
                                <h6 className="pro-user-name ml-2 my-0">
                                    <span>Shreyu N</span>
                                    <span className="pro-user-desc text-muted d-block mt-1">Administrator </span>
                                </h6>
                            </div>
                            <span data-feather="chevron-down" className="ml-2 align-self-center"></span>
                        </div>
                    </a>
                    <div className="dropdown-menu profile-dropdown-items dropdown-menu-right">
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
                </li>
            </ul>
        </div>

    </div>
  )
}
