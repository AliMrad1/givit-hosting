import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaHouseUser,
  FaFire,
  FaPeopleArrows,
  FaPooStorm,
  FaHandHolding,
  FaDrawPolygon,
  FaHeart,
  FaPeopleCarry,
} from "react-icons/fa";
function AppelsSubNav({ appeals }) {
  return (
    <div className="subnavWhatWedo border-bottom border-1 position-relative z-5">
      <div className="container">
        <div className="d-flex  justify-content-between align-items-center py-2">
          <div>CURRENT APPEALS</div>
        </div>
        <div className="row justify-content-center  align-items-center">
            {appeals.length!=0 &&
              appeals.map((appeal) => {
                return (
                  <div className="col-lg-3 col-6 appeals" key={appeal.id}>
                    <Link
                      to={`/appeals/${appeal.slug}`}
                      className="text-decoration-none text-dark link-hover "
                    >
                      <div className="d-flex align-items-center gap-1 p-2">
                        <div className={`icon bg-${appeal.color.color} m-2 p-2`}>
                          <FaFire
                            style={{ color: "white", fontSize: "20px" }}
                          />
                          <img src={appeal.icon_url} alt="" />
                        </div>
                        <div className="fs-6">{appeal.name}</div>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
      </div>
    </div>
  );
}

export default AppelsSubNav;
