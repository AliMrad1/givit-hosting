import React from 'react'

function Quantity({detailsFund,setTotalQuantity,quantity,setPlfAmmount,platformAmmount,fundAll}) {
  return (
    <div className="col-lg-8 col-12 py-3">
    <h3 className="text-primary fw-bold">
      You are offering to fund what's needed:
    </h3>
    <p className="p-2"><span className="text-warning mx-2">{detailsFund.quantity} needed</span> |
    <span onClick={fundAll} className="link-primary mx-2 link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover"  style={{ cursor:'pointer' }}>fund them all</span>
    </p>
    <div className="quantityBox w-50 my-2 fw-bold">
        <div className="d-flex justify-content-between my-3">
            <div>Quantity</div>
            <div>@</div>
            <div>${detailsFund.offerInDollars} each</div>
        </div>
        <div className="inputQuantity border-bottom my-3 py-2">
            <input type="number" max={detailsFund.quantity} value={quantity} onChange={(e)=>setTotalQuantity(e.target.value)} step="1" min="1" className="form-control w-50" />
        </div>
        <div className="d-flex justify-content-between">
            <div>Total</div>
            <div>${quantity*detailsFund.offerInDollars}</div>
        </div>
    </div>
    <div className="helpGivit my-3">
        <h5 className="py-3">Would you also like to donate directly to GIVIT to help cover the costs of purchasing what's needed on your behalf?</h5>
        <input type="number" placeholder="$10" min="1" step='0.1' value={platformAmmount} onChange={(e)=>setPlfAmmount(e.target.value)} className="rounded-pill border-primary px-3 py-2 w-50" />
    </div>
    <div className="fund mx-3">
        <button className="btn btn-warning px-4 py-2 text-uppercase rounded-pill fs-4 text-light">fund with credit card</button>
    </div>
  </div>
  )
}

export default Quantity