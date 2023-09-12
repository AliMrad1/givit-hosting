import React from "react";
import Stat1 from "../assets/images/statistic/stat1.png";
import Stat2 from "../assets/images/statistic/stat2.png";
function Stat() {
  return (
    <div
      className="py-4 position-relative"
      style={{ backgroundColor: "#f7f7f7" }}
    >
      {/* image in background */}
      <div className="img position-absolute top-50 text-start   translate-middle z-0" style={{ left:"10%" }}>
        <img src={Stat1} alt="" className="w-50" />
      </div>
      <div className="img position-absolute top-50 text-end   translate-middle z-0" style={{ right:"10%" }}>
        <img src={Stat2} alt="" className="w-50" />
      </div>
      {/* image in background */}
      <div className="container ">
        {/* stats */}
        <div className="row text-primary justify-content-center text-capitalize">
          <div className="col-md-4 col-10 text-center p-3">
            <div className="num p-1">
              <h1>46,801</h1>
            </div>
            <div className="txt p-1">Items needed right now</div>
            <div className="go">
              <button className="btn btn-outline-primary rounded-pill">
                give an item
              </button>
            </div>
          </div>
          <div className="col-md-4 col-10 text-center p-3">
            <div className="num p-1">
              <h1>7,941,567</h1>
            </div>
            <div className="txt p-1">Items donated to people in need</div>
            <div className="go">
              <button className="btn btn-outline-primary rounded-pill">
                give an item
              </button>
            </div>
          </div>
          <div className="col-md-4 col-10 text-center p-3">
            <div className="num p-1">
              <h1>4,587</h1>
            </div>
            <div className="txt p-1">Organisations we work with</div>
            <div className="go">
              <button className="btn btn-outline-primary rounded-pill">
                give an item
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stat;
