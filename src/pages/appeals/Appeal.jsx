import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Appeal1 from "../../assets/images/appealsCard/appeal1.webp";
import { FaFire } from "react-icons/fa";
import Find from "../../components/Find";
import FilterTable from "../../components/FilterTable";
import DonateHeart from '../../assets/images/donateHeart.png'
import part1 from '../../assets/images/partner/1.webp'
import api from "../../axios";
import GivitComponent from "../../components/GivitComponent";
function Appeal() {
  const [appeal, setAppeal] = useState({});
  const [isLoading,setIsLoading]=useState(true);
  const [appealDonations,setAppealDonations]=useState([]);
  const params = useParams();
  console.log(params.name);
  useEffect(() => {
    const getAppeal=async()=>{
      try {
        const response=await api.get(`/appeals/slug/${params.slug}`);
        await getAppealDonations(1,10,params.slug)
        if(response.data)
        {
          console.log(response.data);
          setAppeal(response.data)
        }
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        console.log(error);
      }
    }
    getAppeal();
    
  }, []);

  const getAppealDonations=async(page=1,size=10,slug='first-nations-support')=>{
    try {
      const response=await api.get(`/donations/items?page=${page}&size=${size}&slug=${slug}`)
      if(response.data)
      {
        console.log(response.data);
        setAppealDonations(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  if(isLoading) return <h1>loading</h1>
  return (
    <div className="appeal mb-4">
      <div
        className="landing"
        style={{
          backgroundImage: `url(${appeal.image_url})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "50vh",
          backgroundSize: "cover",
          top: 0,
          left: 0,
        }}
      >
        <div className="container">
          <div
            className={`appealBox bg-${appeal.color.color} text-white p-4`}
            style={{ width: "35%", height: "55vh" }}
          >
            <h6 className="mb-4 mx-3 pb-4">
              <Link to="/appeals" className="text-decoration-none text-white">
                appeals
              </Link>
            </h6>
            <div className={`icon bg-${appeal.color}  h-25 w-25 d-flex align-items-end justify-content-center`}>
              <FaFire size={"30px"} />
            </div>
            <div className="name pt-4">
              <h4>{appeal.slug}</h4>
            </div>
            <div className="donate">
              <Link
                className="btn btn-outline-light rounded-pill px-3 py-2 text-uppercase"
                to={`/donate-funds/appealId=${appeal.id}`}
              >
                Donate funds
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="description w-75 my-4 py-3">
        <div className="container my-4">
          <div className="txt text-capitalize p-3">
            <h5 className="text-primary ">
              {appeal.title1}
            </h5>
            <p className="text-secondary">
              {appeal.description1}
            </p>
          </div>
          <div className="txt text-capitalize p-3 border-top border-1 border-secondary">
            <h5 className="text-primary ">
            {appeal.title2}
            </h5>
            <p className="text-secondary">
            {appeal.description2}
            </p>
          </div>
        </div>
      </div>
      <div className="my-4">
        <div
          className="find shadow p-4 "
          style={{ backgroundColor: "#ebf6f5" }}
        >
           <Find/>
        </div>
      </div>
      <div className="filter-table">
        <FilterTable donations={appealDonations} />
      </div>
      <GivitComponent title='Organisations & charities' paragraph='Are you an organisation in need of donations for people you support?' urlText='register now' url='/sign-up' />

      <div className="partner">
        <div className="container">
          <div className="head p-3">
            <h3 className="text-primary">Partners</h3>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-2 col-mg-4 col-sm-6">
              <div className="imgLink ">
                <Link>
                  <img src={part1} className="w-100 h-100" alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-2 col-mg-4 col-sm-6">
              <div className="imgLink ">
                <Link>
                  <img src={part1} className="w-100 h-100" alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-2 col-mg-4 col-sm-6">
              <div className="imgLink ">
                <Link>
                  <img src={part1} className="w-100 h-100" alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-2 col-mg-4 col-sm-6">
              <div className="imgLink ">
                <Link>
                  <img src={part1} className="w-100 h-100" alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-2 col-mg-4 col-sm-6">
              <div className="imgLink ">
                <Link>
                  <img src={part1} className="w-100 h-100" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appeal;
