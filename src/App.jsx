import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/layouts/Navbar";
import Appeals  from "./pages/appeals/Appeals";
import NavbarSide from "./components/layouts/NavbarSide";
import { useEffect, useState } from "react";
import Footer from "./components/layouts/Footer";
import Appeal from "./pages/appeals/Appeal";
import WhatIsNeeded from "./pages/WhatIsNeeded";
import FundWhatIsNeeded from "./pages/FundWhatIsNeeded";
import api from "./axios";
function App() {
  const [appeals,setAppeals]=useState([]);
  useEffect(()=>{
    const getAppeals=async()=>{
      try {
        const response=await api.get('/appeals/all');
        if(response.data)
        {
          setAppeals(response.data);
        }
        console.log(response);  
      } catch (error) {
        console.log(error);
      }
    }
    getAppeals();
  },[])
  return (
    <>
      <Router>
        <div className="container">
          <Navbar appeals={appeals} />
          <NavbarSide appeals={appeals} />
        </div>

        <Routes>
          <Route path="/" element={<Home appeals={appeals} />} />
          <Route path="/appeals" element={<Appeals appeals={appeals} />} />
          <Route path="/appeals/:slug" element={<Appeal />} />
          <Route path="/what-is-needed" element={<WhatIsNeeded appeals={appeals} />} />
          <Route path="/fund-what-is-needed/:donnationId" element={<FundWhatIsNeeded />} />
        </Routes>
        <div className="footer">
          <Footer/>
        </div>
      </Router>
    </>
  );
}

export default App;
