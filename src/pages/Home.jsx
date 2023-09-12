import React from "react";
import AppealSliderCard from "../components/appeals/AppealSliderCard";
import Stat from "../components/Stat";
import Table from "../components/Table";
import logo from '../assets/images/logo.jfif'
import WEDImg1 from "../assets/images/whatWeDoNavbar/Impact.webp";
import WEDImg2 from "../assets/images/whatWeDoNavbar/warmClothes.webp";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
function Home({appeals}) {
  
  return (
    <>
      <div className="main-page text-capitalize ">
        <div className="container">
          <div className="headings text-white py-3 my-2">
            <h1 className="py-3  fs-1">
              help us continue supporting <br /> australians in need{" "}
            </h1>
            <button className="btn btn-outline-primary rounded-pill p-2 text-capitilize">
              give now
            </button>
          </div>
          <AppealSliderCard appeals={appeals} />
        </div>
      </div>
      {/* stat section */}
      <div className="stat mb-3">
        <Stat />
      </div>
      {/* stat section */}
      {/* table section */}
      <div className="table my-4" style={{ backgroundColor: "#f7f7f7" }}>
        <div className="container">
          <div className="heading p-2">
            <h2 className="fw-bold text-primary text-capitalize bg-transparent">
              46,794 items currently needed
            </h2>
          </div>
          {/* <Table filteredDonations={appeals} /> */}
        </div>
      </div>
      {/* table section */}
      <div className="table my-3">
        {/* <Table /> */}
        <div className="goSearch text-center py-2">
          <Link
            to="/what-is-needed"
            className="btn btn-outline-primary rounded-pill"
          >
            search all items needed
          </Link>
        </div>
      </div>
      {/* table section */}
      {/* donate  */}
      <div className="donate p-2">
        <div className="container">
          <div className="row justify-content-md-start justify-content-center">
            <div className="col-10 p-4 ">
              <div className="shadow d-flex flex-md-row flex-column  justify-content-center align-items-center">
                <div className="img p-4 text-center ">
                  <img src={logo} alt="" />
                </div>
                <div className="content text-capitalize text-center text-md-start p-4">
                  <h1 className="p-2 text-primary fst-italic fw-bold ">
                    How can you help?
                  </h1>
                  <p className="p-2">
                    Upload your donation offer to help someone doing it tough
                    right now.
                  </p>
                  <p className="p-2">
                    Your offer will be seen by organisations working with people
                    in need across Australia.
                  </p>
                  <Link
                    to="/donate-items"
                    className="btn btn-primary pt-2 px-4 rounded-pill "
                  >
                    offer a donation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* donate  */}
      {/* what-we-do latest */}
      <div className="wedLatest my-3 p-2 text-capitalize">
        <div className="container">
          <div className="heading">
            <h1 className="text-primary fw-bold  ">Latest from GIVIT</h1>
          </div>
          <div className="row justify-content-center">
            {/* 1 */}
            <div className="col-lg-6 col-10">
              <Link to='/what-we-do' className="text-decoration-none">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="img overflow-hidden w-50 p-3">
                    <img src={WEDImg1} className="w-100" alt="" />
                  </div>
                  <div className="content p-3 w-50">
                    <h5 className="text-secondary">
                      Our Impact | Six months on from the Victoria Floods
                    </h5>
                    <p>
                      In October 2022, Victoria experienced extreme flooding.
                      Six months on, people are only now beginning to rebuild
                      their homes and their lives. Here's how GIVIT is helping.{" "}
                      <span className="arrow">
                        {" "}
                        <FaArrowRight />
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            {/* 2 */}
            <div className="col-lg-6 col-10">
              <Link to='/what-we-do' className="text-decoration-none">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="img overflow-hidden p-3 w-50">
                    <img src={WEDImg1} className="w-100" alt="" />
                  </div>
                  <div className="content p-3 w-50">
                    <h5 className="text-secondary">
                      Our Impact | Six months on from the Victoria Floods
                    </h5>
                    <p>
                      In October 2022, Victoria experienced extreme flooding.
                      Six months on, people are only now beginning to rebuild
                      their homes and their lives. Here's how GIVIT is helping.{" "}
                      <span className="arrow">
                        {" "}
                        <FaArrowRight />
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* what-we-do latest */}
    </>
  );
}

export default Home;
