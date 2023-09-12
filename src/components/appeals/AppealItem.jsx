import React from "react";
import { Link } from "react-router-dom";
function AppealItem({ appeal }) {
  return (
    <Link to={`/appeals/${appeal.slug}`} className="text-decoration-none text-dark">
      <div className="imageIcon d-flex  ">
        <div className={`icon p-2 bg-${appeal.color.color}`}>
          <img src={appeal.icon_url} alt="" />
        </div>
        <div className="img  w-100 h-100">
          <img
            src={appeal.image_url}
            className="img-fluid"
            style={{ width: "fit-content" }}
            alt=""
          />
        </div>
      </div>
      <div className="text text-center bg-white py-3 px-2">
        <h4>{appeal.name}</h4>
      </div>
    </Link>
  );
}

export default AppealItem;
