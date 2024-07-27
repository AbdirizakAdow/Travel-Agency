import React from 'react'
import { Link } from 'react-router-dom';
import LogoIm from "../../assets/logo.png";

const Navbar = () => {
  return (
    <>
    <div className="fixed top-0 right-0 w-full bg-white text-black shadow-md">
      <div className="bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container py-z[2px] py-[2px] sm:block hidden">
        <div className = "flex justify-between ">
          <p>20% off on next booking</p>
          <p>Mobile No. +252 612847462</p>
          </div>
        </div>
      </div>
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center ">
          {/* logo section */}
          <div>
            <Link to="/">
            < img src={LogoIm} alt=""/>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar
