import React from "react";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* <!-- Footer Start --> */}
      <div className="footer container-fluid position-relative bg-dark bg-light-radial text-white-50 py-6 px-5">
        <div className="row g-5">
          <div className="col-lg-6 pe-lg-5">
            <div className="">
              <h1 className="m-0 display-4 text-uppercase text-white">
                <i className="bi bi-building text-primary me-2"></i> SHIV WORLD
              </h1>
            </div>
            <p className="font-18 mt-2">Connecting Worlds, Empowering Trade.</p>
            <p className="font-18 mt-5">
              <i className="fa fa-map-marker-alt me-2"></i> A AB 2, Yogeshwar APPT,Ahmedabad , Gujarat 380024
            </p>
            <p className="font-18">
              <i className="fa fa-phone-alt me-2"></i> +91 87349 91764
            </p>
            <p className="font-18">
              <i className="fa fa-envelope me-2"></i> shivworld222@gmail.com
            </p>
            <div className="d-flex justify-content-start mt-4">
              <div className="icons">
                <AiFillInstagram size={35} color="rgb(253, 93, 20)" />
              </div>
              <div className="icons">
                <AiOutlineTwitter size={35} color="rgb(253, 93, 20)" />
              </div>
              <div className="icons">
                <AiFillFacebook size={35} color="rgb(253, 93, 20)" />
              </div>
              <div className="icons">
                <AiFillLinkedin size={35} color="rgb(253, 93, 20)" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 ps-lg-5">
            <div className="row g-5">
              <div className="col-sm-6">
                <h4 className="text-white text-uppercase mb-4 font-24">
                  Quick Links
                </h4>
                <div className="d-flex flex-column justify-content-start">
                  <Link className="text-white-50 mb-2 font-18" to={"/homepage"}>
                    <i className="fa fa-angle-right me-2"></i> Home
                  </Link>
                  <Link
                    className="text-white-50 mb-2 font-18"
                    to={"/aboutpage"}
                  >
                    <i className="fa fa-angle-right me-2"></i> About Us
                  </Link>
                  <Link
                    className="text-white-50 mb-2 font-18"
                    to={"/servicepage"}
                  >
                    <i className="fa fa-angle-right me-2"></i> Our Services
                  </Link>
                  <Link className="text-white-50 mb-2 font-18" to={"/teampage"}>
                    <i className="fa fa-angle-right me-2"></i> Meet The Team
                  </Link>
                  <Link className="text-white-50 font-18" to={"/contactUsPage"}>
                    <i className="fa fa-angle-right me-2"></i> Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark bg-light-radial text-white border-top border-primary px-0">
        <div className="py-4 px-5 text-center text-md-start">
          <p className="mb-0 font-18">
            &copy;
            <span className="text-primary footer-reserved" href="#">
              Shiv World Import/Export
            </span>
            All Rights Reserved.
          </p>
        </div>
      </div>
      {/* <!-- Footer End --> */}
    </>
  );
}

export default Footer;
