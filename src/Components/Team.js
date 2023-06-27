import React from "react";
import ManthanProfile from "./../img/ManthanProfile.jpeg";

function Team() {
  return (
    <>
      {/* <!-- Team Start --> */}
      <div className="container-fluid py-6 px-5">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
          <h1 className="display-5 text-uppercase mb-4 font-28">
            We Are <span className="text-primary">Professional</span>{" "}
          </h1>
        </div>
        <div className="row g-5 team-content-height">
          {/* <div className="col-xl-2 col-lg -6 col-md-6"></div> */}
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="row g-0">
              <div className="col-9"  style={{ minHeight: "230px" }}>
                <div className="position-relative h-100 d-flex justify-content-end" >
                  <img
                    className="position-absolute w-45 h-100"
                    src={ManthanProfile}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className=" p-4 d-flex flex-column align-items-end">
                  <h4 className="text-uppercase font-20 text-end">Manthan Patel</h4>
                  <span className="font-16">CEO & Founder</span>
                </div>
              </div>
              <div className="col-3">
                <div className="h-100 d-flex flex-column align-items-center justify-content-between bg-light">
                  <a className="btn mt-4" href="#">
                    <i className="fab fa-twitter font-24"></i>
                  </a>
                  <a className="btn" href="#">
                    <i className="fab fa-facebook-f font-24"></i>
                  </a>
                  <a className="btn" href="#">
                    <i className="fab fa-linkedin-in font-24"></i>
                  </a>
                  <a className="btn" href="#">
                    <i className="fab fa-instagram font-24"></i>
                  </a>
                  <a className="btn" href="#">
                    <i className="fab fa-youtube font-24"></i>
                  </a>
                </div>
              </div>
              {/* <div className="col-12">
                <div className="bg-light p-4 d-flex justify-content-end">
                  <h4 className="text-uppercase font-20">Manthan Patel</h4>
                  <span className="font-16">CEO & Founder</span>
                </div>
              </div> */}
            </div>
          </div>
          {/* <div className="col-xl-1 col-lg-6 col-md-6"></div> */}
          <div className="col-xl-6 col-lg-6 col-md-6 d-flex justify-center align-center">
            {/* <div className="row g-0">
              <div className="col-10" style={{ minHeight: "300px" }}>
                <div className="position-relative h-100">
                  <img
                    className="position-absolute w-100 h-100"
                    src={ManthanProfile}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="col-2">
                <div className="h-100 d-flex flex-column align-items-center justify-content-between bg-light">
                  <a className="btn" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn" href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="btn" href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a className="btn" href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
              <div className="col-12">
                <div className="bg-light p-4">
                  <h4 className="text-uppercase">Dylan Adams</h4>
                  <span>Civil Engineer</span>
                </div>
              </div>
            </div> */}
            <span className="text-primary font-24 mt-5">
              "Success is not just about making profits, but about creating a
              positive impact that transcends generations."
            </span>
          </div>
          {/* <div className="col-xl-1 col-lg-6 col-md-6"></div> */}
        </div>
      </div>
      {/* <!-- Team End --> */}
    </>
  );
}

export default Team;
