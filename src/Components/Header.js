import React from "react";

function Header() {
  return (
    <>
      {/* // <!-- Topbar Start --> */}
      <div className="container-fluid px-5 d-none d-lg-block border-bottom">
        <div className="row gx-5">
          <div className="col-lg-4 text-center py-3">
            <div className="d-inline-flex align-items-center">
              <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
              <div className="text-start">
                <h6 className="text-uppercase font-18 fw-bold">Our Office</h6>
                <span className="font-16">
                  A AB 2, YOGESHWAR APPT, Ahmedabad{" "}
                </span>
                <br />
                <span className="font-16"> Gujarat 380024 </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center border-start border-end py-3">
            <div className="d-inline-flex align-items-center">
              <i className="bi bi-envelope-open fs-1 text-primary me-3"></i>
              <div className="text-start">
                <h6 className="text-uppercase font-18 fw-bold">Email Us</h6>
                <span className="font-16">shivworld222@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 border-start text-center py-3">
            <div className="d-inline-flex align-items-center">
              <i className="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
              <div className="text-start">
                <h6 className="text-uppercase font-18 fw-bold">Call Us</h6>
                <span className="font-16">+91 87349 91764</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Topbar End --> */}
    </>
  );
}

export default Header;
