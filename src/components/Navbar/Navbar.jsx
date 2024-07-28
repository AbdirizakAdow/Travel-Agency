import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import LogoIm from "../../assets/logo.png";
import { FaCaretDown } from 'react-icons/fa';

const DropdownLinks = [
  {
    name: "Our Services",
    link: "/services",
  },
  {
    name: "Top Brands",
    link: "/mobile_brands",
  },
  {
    name: "Location",
    link: "/location",
  },
]
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
            <Link to="/" activeClassName="active" onClick={() => 
              window.scrollTo(0, 0)}>
            < img src={LogoIm} alt="" className='h-16'/>
            </Link>
            {/* Desktop Navlink section */}
          </div>
          <div className="hidden md:block">
            <ul className=" flex items-center gap-6">
              <li className="py-4">
                <NavLink activeClassName="active" to= "/" onClick={() => window.
                  scrollTo(0, 0)}>
                    Home
                </NavLink>
              </li>
              <li className="py-4">
                <NavLink activeClassName="active" to= "/blogs" onClick={() => window.
                  scrollTo(0, 0)}>
                    Blogs
                </NavLink>
              </li>
              <li className="py-4">
                <NavLink activeClassName="active" to= "/places" onClick={() => window.
                  scrollTo(0, 0)}>
                    Best places
                </NavLink>
              </li>
              <li className="py-4">
                <NavLink activeClassName="active" to= "/about" onClick={() => window.
                  scrollTo(0, 0)}>
                    About
                </NavLink>
              </li>
              {/* Dropdown section */}
              <li className="py-4 relative group cursor-pointer">
                <div className="dropdown  flex items-center">
                  <span>Quick links</span>
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180:"></FaCaretDown>
                  </span>
                </div>
                <dir className="absolute -left-9 top-
                [57px] z-[9999] hidden group-hover:block 
                shadow-md text-black w-[150px] bg-white p-2">
                  <ul>
                    { DropdownLinks.map((data) => {
                      return (
                        <li key={data.name}>
                          <a className="inline-block 
                          w-full rounded-md p-2 
                          hover:bg-primary/20"
                          href={data.link}>
                            {data.link}
                          </a>
                        </li>
                      );
                      })};
                  </ul>
                </dir>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar
