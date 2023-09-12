import React from 'react'

function Delivery({deliveries,selectedDeliveries,handleCheckboxDeliveryChange}) {
  return (
    <div className="delivery">
      <div className="container">
        <div className="row flex-row flex-wrap justify-content-start">
          {deliveries.map((delivery,i) => {
            return (
              <div className="col-md-3 col-sm-5 col-10 " key={i}>
                <div className="d-flex gap-1 p-1">
                  <input
                    id={delivery.id}
                    className="form-input mt-0"
                    type="checkbox"
                    onChange={()=>handleCheckboxDeliveryChange(delivery.id)}
                    checked={selectedDeliveries.includes(delivery.id)}
                    value=""
                  />
                  <label htmlFor={delivery.id} className="fs-6">
                    {delivery.delivery}
                  </label>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Delivery