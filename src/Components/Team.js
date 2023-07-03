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
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="row g-0">
              <div className="col-12" style={{ minHeight: "230px" }}>
                <div className="position-relative h-100 d-flex justify-content-center">
                  <img
                    className="position-absolute w-45 h-100"
                    src={ManthanProfile}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className=" p-4 d-flex flex-column align-items-center">
                  <h4 className="text-uppercase font-20 text-center">
                    Manthan Patel
                  </h4>
                  <span className="font-16">CEO & Founder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-100  text-center pt-2 pb-2">
            <a className="btn " href="#">
              <i className="fab fa-twitter font-24"></i>
            </a>
            <a className="btn" href="#">
              <i className="fab fa-facebook-f font-24"></i>
            </a>
            {/* <a className="btn" href="#">
              <i className="fab fa-linkedin-in font-24"></i>
            </a> */}
            <a className="btn" href="https://www.instagram.com/manthan4894/">
              <i className="fab fa-instagram font-24"></i>
            </a>
            {/* <a className="btn" href="#">
              <i className="fab fa-youtube font-24"></i>
            </a> */}
          </div>
          <div className="text-center">
          <span className="text-primary font-24 mt-5">
            "Success is not just about making profits, but about creating a
            positive impact that transcends generations."
          </span>
          </div>
      </div>
      {/* <!-- Team End --> */}
    </>
  );
}

export default Team;
