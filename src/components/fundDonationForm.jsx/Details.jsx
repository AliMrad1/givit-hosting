import React, { useState } from "react";
// import FaArrowLeft from 'react-icons/fa'
function Details() {
  const [buttonActive, setButtonActive] = useState("individual");
  const renderComponent = (name) => {
    setButtonActive(name);
  };
  const [data,setData]=useState({
    firstname:"",
    lastname:"",
    email:"",
    suburb_or_postcode:"",
    hearfrom:false,
    recieveAlert:false,
    donate_id:false,
    organisationName: "", // Added field for organisation name
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRadioChange = (event, fieldName) => {
    const value = event.target.value === "true"; // Convert string "true"/"false" to boolean true/false
    setData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };
  return (
    <div className="col-lg-8 col-12 py-3">
      <h3 className="fw-bold py-3">Your Details</h3>
      <div className="d-flex my-5">
        <button
          onClick={() => renderComponent("individual")}
          className={`btn btn-outline-primary px-5 py-2 rounded-start btnLeft ${
            buttonActive === "individual" ? "active" : ""
          } `}
        >
          FUND as an invidual
        </button>

        <button
          onClick={() => renderComponent("organisation")}
          className={`btn btn-outline-primary px-5 py-2 rounded-end btnRight ${
            buttonActive === "organisation" ? "active" : ""
          }`}
        >
          FUND as an organisation
        </button>
      </div>
      <div className="info my-3">
        <div className="container">
          <div className="row">
            {buttonActive==='organisation' && <div className="col-lg-6 col-12">
              <div className="mb-3">
                <label htmlFor="Organisation" className="form-label fw-bold">
                  Organisation Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Organisation"
                  placeholder="Your Organisation Name"
                />
              </div>
            </div>}
            
            <div className="col-lg-6 col-12">
              <div className="mb-3">
                <label htmlFor="firstname" className="form-label fw-bold">
                  First Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  placeholder="Your First Name"
                />
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="mb-3">
                <label htmlFor="lastname" className="form-label fw-bold">
                  Last Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  placeholder="Your Last Name"
                />
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="mb-3">
                <label htmlFor="suburb_or_postcode" className="form-label fw-bold">
                  Your suburb / postcode <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="suburb_or_postcode"
                  placeholder="Your Suburb Or Postcode"
                />
              </div>
            </div>
            <div className=" col-12">
              <div className="mb-3">
                <label htmlFor="comments" className="form-label fw-bold">
                  Comments or additional information{" "}
                  <span className="text-primary">*</span>
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="comments"
                  placeholder="Your Comments"
                  style={{ height: "150px" }}
                ></textarea>
              </div>
            </div>

            <div className="col-12">
              <div className="mb-3 ">
                <label htmlFor="hearFrom" className="form-label fw-bold d-block">
                  I would like to hear from GIVIT{" "}
                  <span className="text-primary">*</span>
                </label>
                <div className="d-flex gap-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="hearFrom"
                    id="hearFrom"
                    checked={data.hearFrom === true}
                    onChange={(event) => handleRadioChange(event, "hearFrom")}
                  />
                  <label className="form-check-label" htmlFor="hearFrom">
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="hearFrom"
                    id="hearFrom"
                    checked={data.hearFrom === true}
                    onChange={(event) => handleRadioChange(event, "hearFrom")}
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    No
                  </label>
                </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="mb-3">
                <label htmlFor="comments" className="form-label fw-bold">
                  I would like to receive alerts about what’s needed in my area{" "}
                  <span className="text-primary">*</span>
                </label>
                <div className="d-flex gap-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    No
                  </label>
                </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="mb-3">
                <label htmlFor="suburb_or_postcode" className="form-label fw-bold">
                  Alert me near suburb / postcode{" "}
                  <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="suburb_or_postcode"
                  placeholder="Your Suburb Or Postcode"
                />
              </div>
            </div>
            <div className="fund mx-3">
            {/* <span onClick={fundAll} className="link-primary mx-2 link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover"  style={{ cursor:'pointer' }}><FaArrowLeft/> back</span> */}
              <button className="btn btn-warning px-4 py-2 text-uppercase rounded-pill fs-4 text-light">
               Continue to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
