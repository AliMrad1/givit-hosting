import React from "react";
import { FaFile, FaFire, FaLine } from "react-icons/fa";
import { Link } from "react-router-dom";

function Table({filteredDonations}) {
  // const displayedDonations = filteredDonations.length > 0 ? filteredDonations : donations;
  return (
    <div className="container p-0">
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-light">
            <tr>
              <th>appeal</th>
              <th>Item</th>
              <th>Recipient</th>
              <th>Delivery</th>
              <th>Area</th>
            </tr>
          </thead>
          <tbody>
          {filteredDonations.map((donation)=>{
            return (
              <tr key={donation.id}>
            <td className="bg-danger ">
                <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                <FaFire style={{ color:"white",fontSize:'30px' }} />
                </div>
               </td>
              <td><FaFile size={'30px'} className="text-primary" /> {donation.item}</td>
              <td>{donation.recipient}</td>
              <td>
                {donation.deliveries.map((delivery)=>{
                  return (
                    <div key={delivery.id}>{delivery.type}</div>
                  )
                })}
              </td>
              <td>
                <div className="d-flex justify-content-between">
                  <div className="address">BankstownNSW 2200</div>
                  <div className="payDonate d-flex justify-content-between text-uppercase">
                    {donation.fund && <Link to={`/fund-what-is-needed/${donation.id}`} className="btn btn-primary rounded-pill p-2 px-3 mx-1">
                      fund
                    </Link>}
                    {donation.givit && <Link to={`/givit-what-is-needed/${donation.id}`} className="btn btn-success rounded-pill p-2 px-3 mx-1">
                      givit
                    </Link>}
                  </div>
                </div>
              </td>
            </tr>
            )
          })}


          {/* <tr>
            <td className="bg-danger ">
                <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                <FaFire style={{ color:"white",fontSize:'30px' }} />
                </div>
               </td>
              <td><FaFile size={'30px'} className="text-primary" /> bycicle</td>
              <td>Supporting healthy siblings after death</td>
              <td>Drop off Post / Courier Voucher</td>
              <td>
                <div className="d-flex justify-content-between">
                  <div className="address">BankstownNSW 2200</div>
                  <div className="payDonate d-flex justify-content-between text-uppercase">
                    <Link className="btn btn-primary rounded-pill p-2 px-3 mx-1">
                      fund
                    </Link>
                    <Link className="btn btn-success rounded-pill p-2 px-3 mx-1">
                      givit
                    </Link>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
            <td className="bg-danger ">
                <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                <FaFire style={{ color:"white",fontSize:'30px' }} />
                </div>
               </td>
              <td><FaFile size={'30px'} className="text-primary" /> bycicle</td>
              <td>Supporting healthy siblings after death</td>
              <td>Drop off Post / Courier Voucher</td>
              <td>
                <div className="d-flex justify-content-between">
                  <div className="address">BankstownNSW 2200</div>
                  <div className="payDonate d-flex justify-content-between text-uppercase">
                    <Link className="btn btn-primary rounded-pill p-2 px-3 mx-1">
                      fund
                    </Link>
                    <Link className="btn btn-success rounded-pill p-2 px-3 mx-1">
                      givit
                    </Link>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
            <td className="bg-danger ">
                <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                <FaFire style={{ color:"white",fontSize:'30px' }} />
                </div>
               </td>
              <td><FaFile size={'30px'} className="text-primary" /> bycicle</td>
              <td>Supporting healthy siblings after death</td>
              <td>Drop off Post / Courier Voucher</td>
              <td>
                <div className="d-flex justify-content-between">
                  <div className="address">BankstownNSW 2200</div>
                  <div className="payDonate d-flex justify-content-between text-uppercase">
                    <Link className="btn btn-primary rounded-pill p-2 px-3 mx-1">
                      fund
                    </Link>
                    <Link className="btn btn-success rounded-pill p-2 px-3 mx-1">
                      givit
                    </Link>
                  </div>
                </div>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
