import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.jfif";

import { Link } from "react-router-dom";
import WhatWeDoSubNav from "./WhatWeDoSubNav";
import AppelsSubNav from "./AppelsSubNav";
import api from "../../axios";
function Navbar({appeals}) {
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
  const [WEDSubNav,setWEDSubNav]=useState();
  const [AppealsSubNav,setAppealsSubNav]=useState();

  const WEDshowSubNav=()=>{
    setAppealsSubNav(false);
    setWEDSubNav(true);
  }
  const WEDHideSubNav=()=>{
    setTimeout(()=>setWEDSubNav(false),2000)
  }

  const AppealsShowSubNav=()=>{
    setAppealsSubNav(true);
    setWEDSubNav(false);
  }
  const AppealsHideSubNav=()=>{
    setTimeout(()=>setAppealsSubNav(false),2000)
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg  pt-3 border-bottom border-1 navbarRender">
        <div className="container-fluid align-items-end">
          <Link to='/' className="navbar-brand" >
            <img className="img-fluid" style={{ width:'40px',height:'40px' }} src={Logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse align-items-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item pb-0 mx-3" onMouseEnter={WEDshowSubNav} onMouseLeave={WEDHideSubNav}>
                <Link
                  className="nav-link active text-capitalize "
                  to="/what-we-do"
                >
                  <span  className="text-uppercase whatWedoLink">what we do</span>
                </Link>
              </li>
              <li className="nav-item pb-0 mx-3" onMouseEnter={AppealsShowSubNav} onMouseLeave={AppealsHideSubNav}>
                <Link
                  className="nav-link active text-capitalize"
                  to="/appeals"
                >
                  <span className="text-uppercase">appeals</span>
                </Link>
              </li>
              <li className="nav-item pb-0 mx-3">
                <Link
                  className="nav-link active text-capitalize"
                  to="/what-we-do"
                >
                  <span className="text-uppercase">need help</span>
                </Link>
              </li>
            </ul>
            <div className="d-flex flex-column mse-auto">
              <div className="text-end pb-4 ">
                For Organization <Link>Signin</Link> |<Link>Signup</Link>
              </div>
              <div className="d-flex">
                <Link to='/what-is-needed'   className="btn btn-primary rounded-pill mx-1 text-uppercase ">
                  what's needed
                </Link>

                <Link to='/donate-items'  className="btn btn-success rounded-pill mx-1  text-uppercase ">
                  donate items
                </Link>

                <Link to='/donate-time'  className="btn btn-info rounded-pill mx-1  text-uppercase ">
                  donate time
                </Link>

                <Link to='/donate-funds'  className="btn btn-secondary rounded-pill mx-1  text-uppercase ">
                  donate funds
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {WEDSubNav && <WhatWeDoSubNav/>}
      
      {AppealsSubNav && <AppelsSubNav appeals={appeals} />}
    </>
  );
}

export default Navbar;
