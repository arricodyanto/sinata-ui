export async function getStaticProps() {
  return { props: { bodyClassName: 'authentication-bg', bodyDataLayout: '' } }
}

export default function Login() {
  return (
    <div className="account-pages my-5">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-10">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="row g-0">
                                <div className="col-lg-6 p-4">
                                    <div className="mx-auto">
                                        <a href="index.html">
                                            <img src="/images/logo-dark.png" alt="" height="24" />
                                        </a>
                                    </div>

                                    <h6 className="h5 mb-0 mt-3">Welcome back!</h6>
                                    <p className="text-muted mt-1 mb-4">
                                        Enter your email address and password to access admin panel.
                                    </p>

                                    <form action="#" className="authentication-form">
                                        <div className="mb-3">
                                            <label className="form-label">Email Address</label>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <i className="uil-envelope"></i>
                                                </span>
                                                <input type="email" className="form-control" id="email" placeholder="hello@coderthemes.com" />
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Password</label>
                                            <a href="pages-recoverpw.html" className="float-end text-muted text-unline-dashed ms-1">Forgot your password?</a>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <i className="uil-padlock"
                                                    ></i>
                                                </span>
                                                <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="checkbox-signin" />
                                                <label className="form-check-label" for="checkbox-signin">Remember me</label>
                                            </div>
                                        </div>

                                        <div className="mb-3 text-center d-grid">
                                            <button className="btn btn-primary" type="submit">Log In</button>
                                        </div>
                                    </form>
                                    <div className="py-3 text-center"><span className="fs-16 fw-bold">OR</span></div>
                                    <div className="row">
                                        <div className="col-12 text-center">
                                            <a href="" className="btn btn-white mb-2 mb-sm-0"><i className='uil uil-google icon-google me-2'></i>With Google</a>
                                            <a href="" className="btn btn-white mb-2 mb-sm-0"><i className='uil uil-facebook me-2 icon-fb'></i>With Facebook</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-none d-md-inline-block">
                                    <div className="auth-page-sidebar">
                                        <div className="overlay"></div>
                                        <div className="auth-user-testimonial">
                                            <p className="fs-24 fw-bold text-white mb-1">I simply love it!</p>
                                            <p className="lead">It is a elegent templete. I love it very much!</p>
                                            <p>- Admin User</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-12 text-center">
                            <p className="text-muted">Do not have an account? <a href="pages-register.html" className="text-primary fw-bold ms-1">Sign Up</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}
