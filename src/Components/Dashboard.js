import React from 'react'
import Carousel1 from "./../img/ImportExport2.jpg";
import Carousel2 from "./../img/ImportExport1.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

function Dashboard() {
  return (
    <>
     {/* <!-- Carousel Start --> */}
     <div className="container-fluid p-0">
        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <Carousel autoPlay>
              <div>
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <img className="w-100" src={Carousel1} alt="Image" />
                </div>
              </div>
              <div>
                <img className="w-100" src={Carousel2} alt="Image" />
                {/* <div className=" d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3 mw-100">
                  
                  </div>
                </div> */}
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      {/* <!-- Carousel End --> */}
    </>
  )
}

export default Dashboard
