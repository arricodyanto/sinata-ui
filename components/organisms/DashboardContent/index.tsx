import Footer from '../Footer'

export default function DashboardContent() {
  return (
    <div className="content-page">
        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box">
                            <h4 className="page-title">Starter</h4>
                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Shreyu</a></li>
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Pages</a></li>
                                    <li className="breadcrumb-item active">Starter</li>
                                </ol>
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
