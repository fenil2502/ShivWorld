import React from 'react'
import Carousel2 from "./../img/ImportExport1.jpg";


function About() {
  return (
    <>
    {/* <!-- About Start --> */}
    <div className="container-fluid py-6 px-5">
        <h1 className="font-28 display-5 text-uppercase mb-5 text-center">
          {" "}
          Waht <span className="text-primary">We are</span> doing
        </h1>
        <div className="row g-5">
          <div className="col-lg-7 mt-4">
            <h1 className="display-5 text-uppercase mb-4 font-28">
              We are <span className="text-primary">the Leader</span> in
              <span className="text-primary"> Import/Export </span> Industry
            </h1>
            <h4 className="text-uppercase mb-3 text-body font-20">
              We are Connecting the World through Exports.
            </h4>
            <p className="font-16">
              Welcome to{" "}
              <span className="text-primary font-weight-bold">
                {" "}
                Shiv World !{" "}
              </span>
              , a leading global import-export company dedicated to facilitating
              seamless trade and fostering international partnerships. With a
              passion for connecting businesses and bridging markets, we
              specialize in the efficient and reliable movement of goods across
              borders.
            </p>
            <div className="row gx-5 py-2">
              <div className="col-sm-6 mb-2">
                <p className="fw-bold mb-2 font-16">
                  <i className="fa fa-check text-primary me-3"></i>Global
                  Network
                </p>
                <p className="fw-bold mb-2 font-16">
                  <i className="fa fa-check text-primary me-3"></i>Comprehensive
                  Market Research Workers
                </p>
                <p className="fw-bold mb-2 font-16">
                  <i className="fa fa-check text-primary me-3"></i> Customized
                  Solutions Process
                </p>
              </div>
              <div className="col-sm-6 mb-2">
                <p className="fw-bold mb-2 font-16">
                  <i className="fa fa-check text-primary me-3"></i>Perfect
                  Planning
                </p>
                <p className="fw-bold mb-2 font-16">
                  <i className="fa fa-check text-primary me-3"></i>Professional
                  Workers
                </p>
                <p className="fw-bold mb-2 font-16">
                  <i className="fa fa-check text-primary me-3"></i>Exceptional
                  Customer Service Process
                </p>
              </div>
            </div>
            <p className="mb-4 font-16">
              Whether you are a small business looking to explore new markets or
              an established enterprise seeking to optimize your supply chain,
              we are here to support you every step of the way. Our dedication
              to excellence, global reach, and unwavering commitment to customer
              success make us the preferred partner for import-export services.
            </p>
            {/* <img src={Carousel2} alt=""/> */}
          </div>
          <div className="col-lg-5 pb-5">
            <div className="position-relative bg-dark-radial h-100 ms-5">
              <img
                className="position-absolute w-100 h-100 mt-5 ms-n5 "
                src={Carousel2}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}
    </>
  )
}

export default About
