import React from "react";
import FundDonate from "../assets/images/fundDonate.jpg";
import { FaLaptop } from "react-icons/fa";
import FundDonnationForm from "../components/fundDonationForm.jsx/FundDonnationForm";
function FundWhatIsNeeded() {
  const data = {
    id: "3",
    item: "Supporting healthy siblings after death",
    recipient: "Local Charity",
    color: "primary",
    donation_icon: null,
    location: {
      id: 0,
      state: "New South Wales",
      suburb: "Sydney",
      QLD: "QLD",
      code: "1234",
      zone: 0,
    },
    detailsFund: {
      description: `This young family live in remote NSW.
            In early 2023, the youngest of 5 children, was diagnosed with an aggressive and incurable brain tumour. 6 months later, this little person passed away.... leaving behind a devastated family.`,
      quantity: 10,
      offerInDollars: 50.0,
    },
  };
  return (
    <div className="fundWhatIsNeeded">
      <div
        className="landing position-relative"
        style={{
          backgroundImage: `url(${FundDonate})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "50vh",
          backgroundSize: "cover",
          top: 0,
          left: 0,
        }}
      >
        <div
          className="container "
          style={{ bottom: "-10%", transform: "translateX(-50%)" }}
        ></div>
      </div>

      <div
        className="container position-relative"
        style={{ marginTop: "-10%" }}
      >
        <div className=" p-4" style={{ backgroundColor: "#f1f1f1" }}>
          <div className="container p-3 ">
            <div className="row justify-content-center">
              <div className="col-md-6 col-10 border-end border-1 border-dark p-2 borderNoneMobile">
                <h1 className="fw-bold">Fund what's needed</h1>
                <div className="item d-flex align-items-center gap-2 p-2">
                  <FaLaptop />
                  <div className="fw-bold">{data.recipient}</div>
                </div>
                <h5 className="fw-bold p-2">{data.item}</h5>
                <p className="p-2">{data.detailsFund.description}</p>
              </div>
              <div className="col-md-6 col-10 p-2">
                <div className="px-4">
                  <h4 className="fw-bold text-primary ">Area</h4>
                  <div>{data.location.state}</div>
                  <div>
                    {data.location.QLD} {data.location.code}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        <div className="container my-4">
        <FundDonnationForm detailsFund={data.detailsFund}/>
        </div>
    </div>
  );
}

export default FundWhatIsNeeded;
