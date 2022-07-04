export default function Rightbar() {
  return (
    <>
        <div className="right-bar">
            <div data-simplebar className="h-100">
                <h6 className="fw-medium px-3 m-0 py-2 text-uppercase bg-light">
                    <span className="d-block py-1">Theme Settings</span>
                </h6>

                <div className="p-3">
                    <div className="alert alert-warning" role="alert">
                        <strong>Customize </strong> the overall color scheme, sidebar menu, etc.
                    </div>

                    <h6 className="fw-medium mt-4 mb-2 pb-1">Color Scheme</h6>
                    <div className="form-switch mb-1">
                        <input type="checkbox" className="form-check-input" name="color-scheme-mode" value="light" id="light-mode-check" />
                        <label className="form-check-label">Light Mode</label>
                    </div>

                    <div className="form-switch mb-1">
                        <input type="checkbox" className="form-check-input" name="color-scheme-mode" value="dark" id="dark-mode-check" />
                        <label className="form-check-label">Dark Mode</label>
                    </div>

                    <h6 className="fw-medium mt-4 mb-2 pb-1">Width</h6>
                    <div className="form-switch mb-1">
                        <input type="checkbox" className="form-check-input" name="width" value="fluid" id="fluid-check"/>
                        <label className="form-check-label">Fluid</label>
                    </div>
                    <div className="form-switch mb-1">
                        <input type="checkbox" className="form-check-input" name="width" value="boxed" id="boxed-check" />
                        <label className="form-check-label">Boxed</label>
                    </div>

                    <h6 className="fw-medium mt-4 mb-2 pb-1">Menus (Leftsidebar and Topbar) Positon</h6>

                    <div className="form-switch mb-1">
                        <input type="checkbox" className="form-check-input" name="menus-position" value="fixed" id="fixed-check" />
                        <label className="form-check-label">Fixed</label>
                    </div>

                    <div className="form-switch mb-1">
                        <input type="checkbox" className="form-check-input" name="menus-position" value="scrollable" id="scrollable-check" />
                        <label className="form-check-label">Scrollable</label>
                    </div>

                    <h6 className="fw-medium mt-4 mb-2 pb-1">Left Sidebar Color</h6>

                    <div className="form-switch mb-1">
                        <input type="checkbox" className="form-check-input" name="leftsidebar-color" value="light" id="light-check" />
                        <label className="form-check-label">Light</label>
                    </div>

                    <div className="form-switch mb-1">
                        <input type="checkbox" className="form-check-input" name="leftsidebar-color" value="dark" id="dark-check" />
                        <label className="form-check-label">Dark</label>
                    </div>

                    <h6 className="fw-medium mt-4 mb-2 pb-1">Left Sidebar Size</h6>

                    <div className="form-switch mb-1">
                        <input type="checkbox" className="form-check-input" name="leftsidebar-size" value="default" id="default-size-check" />
                        <label className="form-check-label">Default</label>
                    </div>

                    <div className="form-switch mb-1">
                        <input type="checkbox" className="form-check-input" name="leftsidebar-size" value="condensed" id="condensed-check" />
                        <label className="form-check-label">Condensed <small>(Extra Small size)</small></label>
                    </div>

                    <div className="form-switch mb-1">
                        <input type="checkbox" className="form-check-input" name="leftsidebar-size" value="compact" id="compact-check" />
                        <label className="form-check-label">Compact <small>(Small size)</small></label>
                    </div>

                    <h6 className="fw-medium mt-4 mb-2 pb-1">Sidebar User Info</h6>

                    <div className="form-switch mb-1">
                        <input type="checkbox" className="form-check-input" name="leftsidebar-user" value="fixed" id="sidebaruser-check" />
                        <label className="form-check-label">Enable</label>
                    </div>

                    <h6 className="fw-medium mt-4 mb-2 pb-1">Topbar</h6>

                    <div className="form-switch mb-1">
                        <input type="checkbox" className="form-check-input" name="topbar-color" value="dark" id="darktopbar-check" />
                        <label className="form-check-label">Dark</label>
                    </div>

                    <div className="form-switch mb-1">
                        <input type="checkbox" className="form-check-input" name="topbar-color" value="light" id="lighttopbar-check" />
                        <label className="form-check-label">Light</label>
                    </div>

                    <button className="btn btn-primary w-100 mt-4" id="resetBtn">Reset to Default</button>

                </div>

            </div>
        </div>
        <div className="rightbar-overlay"></div>
    </>
  )
}
