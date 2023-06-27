import React from 'react'
import Service1 from "./../img/Service_1.png"
import Service2 from "./../img/Service_2.jpg"
import Service3 from "./../img/Service_3.png"
import Service4 from "./../img/Service_4.png"
import Service5 from "./../img/Service_5.png"
import Service6 from "./../img/Service_6.png"

function Services() {
  return (
    <>
     {/* <!-- Services Start --> */}
     <div className="container-fluid bg-light py-6 px-5">
        <div className="text-center mx-auto mb-5">
          <h1 className="font-28 display-5 text-uppercase mb-5">
            <span className="text-primary"> Shiv World </span> Provide The Best{" "}
            <span className="text-primary">Import/Export</span> Services
          </h1>
        </div>
        <div className="row g-5 service-section">
          <div className="col-lg-4 col-md-6 service-section-tabs">
            <div className="service-item bg-white d-flex flex-column align-items-center text-center">
              <img className="img-fluid" src={Service1} alt="" />
              <div className="service-icon bg-white">
                <i className="fa fa-3x fa-building text-primary"></i>
              </div>
              <div className="px-4 pb-4">
                <h4 className="text-uppercase mb-3  font-20">
                  Supplier Sourcing and Management
                </h4>
                <p className="font-16">
                  {" "}
                  Identify reliable suppliers of disposable items and establish
                  strong relationships with them. Ensure that the suppliers meet
                  quality standards, have sufficient production capacity, and
                  can consistently deliver the required quantity of goods.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 service-section-tabs">
            <div className="service-item bg-white rounded d-flex flex-column align-items-center text-center">
              <img className="img-fluid" src={Service2} alt="" />
              <div className="service-icon bg-white">
                <i className="fa fa-3x fa-shopping-bag text-primary"></i>
              </div>
              <div className="px-4 pb-4">
                <h4 className="text-uppercase mb-3 font-20">
                  Quality Control and Inspection
                </h4>
                <p className="font-16">
                  {" "}
                  Implement rigorous quality control measures to ensure that the
                  disposable items meet the required standards and
                  specifications. Conduct regular inspections of production
                  facilities and pre-shipment inspections to maintain quality
                  consistency.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 service-section-tabs">
            <div className="service-item bg-white rounded d-flex flex-column align-items-center text-center">
              <img className="img-fluid" src={Service3} alt="" />
              <div className="service-icon bg-white">
                <i className="fa fa-3x fa-drafting-compass text-primary"></i>
              </div>
              <div className="px-4 pb-4">
                <h4 className="text-uppercase mb-3 font-20">
                  Regulatory Compliance
                </h4>
                <p className="font-16">
                  Stay updated with the import and export regulations related to
                  disposable items in different countries. Provide guidance and
                  assistance to clients in complying with product safety
                  standards, labeling requirements, and any other relevant
                  regulations.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 service-section-tabs">
            <div className="service-item bg-white rounded d-flex flex-column align-items-center text-center">
              <img className="img-fluid" src={Service4} alt="" />
              <div className="service-icon bg-white">
                <i className="fa fa-3x fa-palette text-primary"></i>
              </div>
              <div className="px-4 pb-4">
                <h4 className="text-uppercase mb-3 font-20">
                  Logistics and Freight Forwarding
                </h4>
                <p className="font-16">
                  {" "}
                  Arrange the transportation, shipping, and delivery of
                  disposable items. Coordinate with shipping companies, freight
                  forwarders, and logistics providers to ensure timely and
                  cost-effective transportation.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 service-section-tabs">
            <div className="service-item bg-white rounded d-flex flex-column align-items-center text-center">
              <img className="img-fluid" src={Service5} alt="" />
              <div className="service-icon bg-white">
                <i className="fa fa-3x fa-tools text-primary"></i>
              </div>
              <div className="px-4 pb-4">
                <h4 className="text-uppercase mb-3 font-20">
                  Fixing & Support
                </h4>
                <p className="font-16">
                  Duo dolore et diam sed ipsum stet amet duo diam. Rebum amet ut
                  amet sed erat sed sed amet magna elitr amet kasd diam duo
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 service-section-tabs">
            <div className="service-item bg-white rounded d-flex flex-column align-items-center text-center">
              <img className="img-fluid" src={Service6} alt="" />
              <div className="service-icon bg-white">
                <i className="fa fa-3x fa-paint-brush text-primary"></i>
              </div>
              <div className="px-4 pb-4">
                <h4 className="text-uppercase mb-3 font-20">
                  Customer Support and After-Sales Service
                </h4>
                <p className="font-16">
                  {" "}
                  Offer responsive customer support services to address client
                  inquiries, resolve issues, and provide after-sales assistance.
                  Maintain strong communication channels with clients to build
                  long-term relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Services End --> */}
    </>
  )
}

export default Services
