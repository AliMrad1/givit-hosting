import React from "react";
import { Link } from "react-router-dom";
import WarmClothes from "../../assets/images/whatWeDoNavbar/warmClothes.webp";
import DarlingDonates from "../../assets/images/whatWeDoNavbar/DarlingDonates.webp";
import Community from '../../assets/images/whatWeDoNavbar/community.webp'
import Impact from '../../assets/images/whatWeDoNavbar/Impact.webp'
function WhatWeDoSubNav() {

  return (
    <div className="subnavWhatWedo border-bottom border-1 position-relative z-3">
      <div className="container">
        <div className="d-flex  justify-content-between align-items-center py-2">
          <div>SEE ALL STORIES</div>
          <div>
            <Link to="" className="btn btn-outline-success rounded-pill">
              see all stories
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-5">
            <Link className="text-decoration-none text-dark link-hover ">
              <div className="d-flex flex-column overflow-hidden">
                <img src={WarmClothes} alt="" className="img-hover pb-3" />
                <div className="text-capitalize  fw-bold fs-5">
                  warm clothes for winter
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-5">
            <Link className="text-decoration-none text-dark link-hover ">
              <div className="d-flex flex-column overflow-hidden">
                <img src={DarlingDonates} alt="" className="img-hover pb-3" />
                <div className="text-capitalize  fw-bold fs-5">
                  the darling donates an entier hotel to support local
                  communities
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-5">
            <Link className="text-decoration-none text-dark link-hover ">
              <div className="d-flex flex-column overflow-hidden">
                <img src={Community} alt="" className="img-hover pb-3" />
                <div className="text-capitalize  fw-bold fs-5">
                  warm clothes for winter
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-5">
            <Link className="text-decoration-none text-dark link-hover ">
              <div className="d-flex flex-column overflow-hidden">
                <img src={Impact} alt="" className="img-hover pb-3" />
                <div className="text-capitalize  fw-bold fs-5">
                  warm clothes for winter
                </div>
              </div>
            </Link>
          </div>
          {/* <div className="col-lg-3 col-5">
              <Link className="text-decoration-none text-dark link-hover ">
                <div className="d-flex flex-column overflow-hidden">
                  <img src={WarmClothes} alt="" className='img-hover pb-3' />
                  <div className="text-capitalize  fw-bold fs-5">
                    warm clothes for winter
                  </div>
                </div>
              </Link>
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default WhatWeDoSubNav;
