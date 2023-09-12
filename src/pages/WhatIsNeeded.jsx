import React from "react";
import { Link } from "react-router-dom";
import whatisneeded from "../assets/images/whatisNeeded1.png";
import Find from "../components/Find";
import FilterTable from "../components/FilterTable";
import GivitComponent from "../components/GivitComponent";
import AppealSliderCard from '../components/appeals/AppealSliderCard'
function WhatIsNeeded({appeals}) {
  return (
    <>
      <div className="heading my-4 pb-4">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-7 col-10 py-2">
              <div className="txt">
                <h6 className="mb-4 mx-3 pb-4 text-capitalize">
                  <Link
                    to="/appeals"
                    className="text-decoration-none text-white"
                  >
                    appeals
                  </Link>
                </h6>
                <h2 className="fw-bold">What's needed</h2>
                <h3 className="text-primary">
                  Thanks for wanting to help someone in need!
                </h3>
                <p>
                  All the requests listed are from organisations vetted by GIVIT
                  as genuinely working with people in need.
                </p>
                <p>
                  Donating exactly what's needed is a smart way to give. It'll
                  make you feel great, and you might just change a life.
                </p>
              </div>
            </div>
            <div className="col-md-5 col-10 py-2">
              <div className="img">
                <img src={whatisneeded} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4">
        <div
          className="find shadow p-4 "
          style={{ backgroundColor: "#ebf6f5" }}
        >
           <Find/>
        </div>
      </div>
      <div className="filter-table">
        <FilterTable  />
      </div>
      <GivitComponent title='Have something else to give?' paragraph='List your donation and support organisations working with vulnerable people and communities will see what you are offering.' urlText='offer a donation' url='/donate-items' />
      <div className="sliderAppeals">
        <AppealSliderCard appeals={appeals}/>
      </div>
    </>
  );
}

export default WhatIsNeeded;
