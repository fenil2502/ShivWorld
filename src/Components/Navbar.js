import React, { useState } from "react";
import { MdEmojiTransportation } from "react-icons/md";
import { Link } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState("homepage");

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {/* <!-- Navbar Start --> */}
      <div className="container-fluid sticky-top bg-dark bg-light-radial shadow-sm px-5 pe-lg-0">
        <nav className="navbar navbar-expand-lg bg-dark bg-light-radial navbar-dark py-lg-0">
          {/* <div> */}
            <Link to={"/"} className="navbar-brand">
              <h1 className="m-0 display-4 text-uppercase text-white">
                <MdEmojiTransportation color="#FD5D14" size={50} />
                <span> Import/Export</span>
              </h1>
            </Link>
          {/* </div> */}
          {/* <div> */}
            <button
              className={`navbar-toggler  ${toggle ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              onClick={() => handleToggle()}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${toggle ? "show" : " collapsing"}`} id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0">
                <Link
                  to={"/homepage"}
                  className={`nav-item nav-link ${
                    active === "homepage" ? "active" : ""
                  }`}
                  onClick={() => {setActive("homepage");setToggle(false)}}
                >
                  Home
                </Link>
                <Link
                  to={"/aboutpage"}
                  className={`nav-item nav-link ${
                    active === "aboutpage" ? "active" : ""
                  }`}
                  onClick={() => {setActive("aboutpage");setToggle(false)}}
                >
                  About
                </Link>
                <Link
                  to={"/servicepage"}
                  className={`nav-item nav-link ${
                    active === "servicepage" ? "active" : ""
                  }`}
                  onClick={() => {setActive("servicepage");setToggle(false)}}
                >
                  Service
                </Link>
                <Link
                  to={"/teampage"}
                  className={`nav-item nav-link ${
                    active === "teampage" ? "active" : ""
                  }`}
                  onClick={() => {setActive("teampage");setToggle(false)}}
                >
                  Team
                </Link>
                <Link
                  to={"/contactUsPage"}
                  className={`nav-item nav-link ${
                    active === "contactpage" ? "active" : ""
                  }`}
                  onClick={() => {setActive("contactpage");setToggle(false)}}
                >
                  Contact
                </Link>
              </div>
            </div>
          {/* </div> */}
        </nav>
      </div>
      {/* <!-- Navbar End --> */}
    </>
  );
}

export default Navbar;
