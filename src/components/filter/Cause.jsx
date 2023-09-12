import React, { useState } from "react";

function Cause({causes,selectedCauses,handleCheckboxCauseChange}) {

  

  return (
    <div className="cause">
      <div className="container">
        <div className="row flex-row flex-wrap justify-content-start">
          {causes.map((cause,i) => {
            return (
              <div className="col-md-3 col-sm-5 col-10 " key={i}>
                <div className="d-flex gap-1 p-1">
                  <input
                    id={cause.id}
                    className="form-input mt-0"
                    type="checkbox"
                    onChange={()=>handleCheckboxCauseChange(cause.id)}
                    checked={selectedCauses.includes(cause.id)}
                    value=""
                  />
                  <label htmlFor={cause.id} className="fs-6">
                    {cause.cause}
                  </label>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cause;
