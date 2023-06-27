import React from 'react'

function ContactUs() {
  return (
   <>
   {/* <!-- Appointment Start --> */}
   <div className="container-fluid py-6 px-5">
        <div className="row gx-5">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="mb-4">
              <h1 className="display-5 text-uppercase mb-4 mt-3 font-28">
                {" "}
                <span className="text-primary"> Connect </span> Us
              </h1>
            </div>
            <p className="mb-5 font-18">
              We are here to provide transperent connections with out clients.
              You can connect with us by this form We will get back to you as
              soon as possible.
            </p>
          </div>
          <div className="col-lg-8">
            <div className="bg-light text-center p-5">
              <form>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <input
                      type="text"
                      className="form-control border-0 font-16"
                      placeholder="Your Name"
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input
                      type="email"
                      className="form-control border-0 font-16"
                      placeholder="Your Email"
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-12 col-sm-6 mt-4">
                    <div className="date" id="date" data-target-input="nearest">
                      <input
                        type="text"
                        className="form-control border-0 datetimepicker-input font-16"
                        placeholder="Call Back Date"
                        data-target="#date"
                        data-toggle="datetimepicker"
                        style={{ height: "55px" }}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 mt-4">
                    <div className="time" id="time" data-target-input="nearest">
                      <input
                        type="text"
                        className="form-control border-0 datetimepicker-input font-16"
                        placeholder="Call Back Time"
                        data-target="#time"
                        data-toggle="datetimepicker"
                        style={{ height: "55px" }}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control border-0 font-16 mt-4"
                      rows="5"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button className=" custom-btn w-100 mt-4" type="submit">
                      Submit Request
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Appointment End --> */}

   </>
  )
}

export default ContactUs
