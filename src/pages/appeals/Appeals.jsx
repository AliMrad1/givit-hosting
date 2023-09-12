import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Appeal1 from "../../assets/images/appealsCard/appeal1.webp";
import { FaFire } from "react-icons/fa";
import AppealItem from "../../components/appeals/AppealItem";
import api from "../../axios";
function Appeals({appeals}) {
  // const [appeals,setAppeals]=useState([]);
  // useEffect(()=>{
  //   const getAppeals=async()=>{
  //     try {
  //       const response=await api.get('/appeals/all');
  //       if(response.data)
  //       {
  //         setAppeals(response.data);
  //       }
  //       console.log(response);  
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getAppeals();
  // },[])
  // const appeals = [
  //   {
  //     id: 1,
  //     name: "First Nations Support",
  //     image_url:
  //       "https://firebasestorage.googleapis.com/v0/b/givit-donation.appspot.com/o/01d5ae24-e12f-4db8-b7c4-bf23c8565e61.JPG?alt=media",
  //     icon_url:
  //       "https://firebasestorage.googleapis.com/v0/b/givit-donation.appspot.com/o/794d31df-ce4e-4f2e-9350-5cfa25b7eda4.svg?alt=media",
  //     slug: "first-nations-support",
  //     color: {
  //       id: 0,
  //       color: "primary",
  //     },
  //   },{
  //     id: 1,
  //     name: "First Nations Support",
  //     image_url:
  //       "https://firebasestorage.googleapis.com/v0/b/givit-donation.appspot.com/o/c93c6323-535d-4e57-ab1c-dc302eb10e32.png?alt=media",
  //     icon_url:
  //       "https://firebasestorage.googleapis.com/v0/b/givit-donation.appspot.com/o/c0ef61e6-bd9c-4a2f-9862-360f399e17fd.png?alt=media",
  //     slug: "first-nations-support",
  //     color: {
  //       id: 0,
  //       color: "primary",
  //     },
  //   },
  // ];
  return (
    <div className="appeals my-4">
      <div className="container">
        <h1>Appeals</h1>
        <div className="row justify-content-center justify-content-md-between">
          {appeals.length!=0 && appeals.map((appeal,i) => {
            return (
              <div className="col-lg-3 col-md-5 col-8 p-0 shadow m-2" key={i}>
                <AppealItem appeal={appeal} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Appeals;
