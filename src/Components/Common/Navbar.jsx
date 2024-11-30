import React, { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { Link, Outlet, useLocation } from "react-router-dom";
import AbstractDesign2 from "../../assets/Image/AbstractDesign2.png";
import Group from "../../assets/Image/Group.png";
import logo from "../../assets/Image/logo.png";
import { RxCross1 } from "react-icons/rx";
import Footer from "./Footer";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div
        className="w-full"
        style={{
          backgroundImage: `url(${Group})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-row justify-center items-center gap-3 p-5 h-14">
          <div className="flex justify-center items-center w-full">
            <p className="font-bold md:text-lg text-xs">
              ✨Discover Your Dream Property with Estatein.{" "}
              <Link className="underline font-semibold pl-3 cursor-pointer md:text-lg text-xs">
                Learn More
              </Link>
            </p>
          </div>
          <span className="flex justify-end p-1 bg-slate-300 rounded-full">
            <HiX />
          </span>
        </div>
      </div>
      <header className="sticky top-0 z-50 flex justify-center items-center h-20 border w-full bg-BgWhite">
        <div className="container flex justify-center items-center w-full">
          <div className="flex justify-between items-center w-full mx-5">
            <Link to={'/'}>
              <img src={logo} alt="" className="md:h-12 h-9" />
            </Link>
            <div className="md:flex hidden">
              <ul className="flex justify-center items-center font-semibold">
                <li
                  className={`${
                    isActive("/")
                      ? "border text-BgPurple border-BgPurple rounded-lg bg-BgLightPurple"
                      : ""
                  }  px-5 py-2 cursor-pointer`}
                >
                  <Link to={"/"}>Home</Link>
                </li>
                <li
                  className={`${
                    isActive("/about")
                      ? "border text-BgPurple border-BgPurple rounded-lg bg-BgLightPurple"
                      : ""
                  }  px-5 py-2 cursor-pointer`}
                >
                  <Link to={"/about"}>About Us</Link>
                </li>
                <li
                  className={`${
                    isActive("/properties")
                      ? "border text-BgPurple border-BgPurple rounded-lg bg-BgLightPurple"
                      : ""
                  }  px-5 py-2 cursor-pointer`}
                >
                  <Link to={"/properties"}>Properties</Link>
                </li>
                <li
                  className={`${
                    isActive("/services")
                      ? "border text-BgPurple border-BgPurple rounded-lg bg-BgLightPurple"
                      : ""
                  }  px-5 py-2 cursor-pointer`}
                >
                  <Link to={"/services"}>Services</Link>
                </li>
              </ul>
            </div>
            <div className="md:flex hidden border rounded-lg px-5 py-2 text-BgPurple border-BgPurple bg-BgLightPurple cursor-pointer">
              <Link to={"/contact"}>Contact Us</Link>
            </div>
            <div className="flex md:hidden">
              <span className="text-2xl cursor-pointer" onClick={() => setShowMenu(true)}>
                <HiOutlineMenuAlt3 />
              </span>
            </div>
          </div>
        </div>
        {showMenu && (
          <div className="lg:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex justify-end">
            <div className="flex flex-col w-80 bg-[#f7f7f7] h-full">
              <div className="flex flex-row justify-between items-center font-bold p-5 bg-BgPurple text-white">
                <p>Menu</p>
                <button onClick={() => setShowMenu(false)}>
                  <RxCross1 className="text-white" />
                </button>
              </div>
              <div className="w-full">
                <ul className="flex flex-col w-full">
                  <li
                    className="p-4 text-lg border-b hover:text-BgPurple cursor-pointer  font-bold"
                    onClick={() => setShowMenu(false)}
                  >
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li
                    className="p-4 text-lg border-b hover:text-BgPurple cursor-pointer  font-bold"
                    onClick={() => setShowMenu(false)}
                  >
                    <Link to={"/about"}>About Us</Link>
                  </li>
                  <li
                    className="p-4 text-lg border-b hover:text-BgPurple cursor-pointer  font-bold"
                    onClick={() => setShowMenu(false)}
                  >
                    <Link to={"/properties"}>Properties</Link>
                  </li>
                  <li
                    className={`p-4 text-lg hover:text-BgPurple cursor-pointer  font-bold border-b`}
                    onClick={() => setShowMenu(false)}
                  >
                    <Link to={"/services"}>Services</Link>
                  </li>
                  <li
                    className="p-4 text-lg w-full flex text-center"
                    onClick={() => setShowMenu(false)}
                  >
                    <Link
                      to={"/contact"}
                      className="w-full py-2 px-5 rounded-md font-semibold border text-BgPurple border-BgPurple bg-BgLightPurple"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </header>
      <div className="w-full">
        <Outlet/>
      </div>
      <div className="flex justify-center items-center w-full">
        <Footer/>
      </div>
    </div>
  );
};

export default Navbar;
