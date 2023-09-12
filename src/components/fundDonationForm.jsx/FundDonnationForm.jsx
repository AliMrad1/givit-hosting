import React, { useEffect, useState } from "react";
import Quantity from "./Quantity";
import Details from "./Details";

function FundDonnationForm({detailsFund}) {
  // quantity state and functions
  const [quantity,setQuantity]=useState(1);
  const [platformAmmount,setPlatformAmmount]=useState(0.0);
  const [ammount,setTotalAmmount]=useState(+detailsFund.offerInDollars)
  useEffect(()=>{
    calculateAmmount()
  },[quantity,platformAmmount])
  const setTotalQuantity=(quantity)=>{
    setQuantity(quantity);
  }
  const setPlfAmmount=(quantity)=>{
    setPlatformAmmount(quantity);
  }
  const fundAll=()=>{
    setQuantity(detailsFund.quantity);
  }
  const calculateAmmount = ()=>{
    console.log(platformAmmount,detailsFund.offerInDollars,quantity);
    setTotalAmmount(+platformAmmount+ (detailsFund.offerInDollars * quantity) );
  }
  // quantity state and functions
  
  return (
    <div className="quantity p-4">
      <div className="container">
        <div className="row justify-content-center flex-md-row flex-column-reverse">
          
          {/* <Quantity setTotalAmmount={setTotalAmmount} setTotalQuantity={setTotalQuantity} quantity={quantity} detailsFund={detailsFund} platformAmmount={platformAmmount} setPlfAmmount={setPlfAmmount} fundAll={fundAll}  /> */}

          <Details/>
          <div className="col-lg-4 col-12 py-3 p-3 h-fit" style={{ backgroundColor: "#f1f1f1" }}>
            <div className="offer p-3">
                <h2 className="text-primary p-2">Your offer is <span className="text-dark fw-bold">${ammount}</span>      </h2>
                <p className="text-secondary p-2">for the donnation: <span className="text-dark fw-bold">${detailsFund.offerInDollars*quantity}</span></p>
                <p className="text-secondary p-2">for givit website:<span className="text-dark fw-bold">${platformAmmount}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FundDonnationForm;
