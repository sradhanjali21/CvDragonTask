import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaUserCircle,
  FaHome,
  FaTrophy,
  FaUsers,
  FaMapMarkerAlt,
  FaComments,
  FaBriefcase,
} from "react-icons/fa";
import humanlogo from "../../src/assets/images/humanlogo.svg";
import lotus from "../assets/images/lotus.svg";
import rupeelogo from "../assets/images/rupeelogo.svg";
import mainlogoi from "../assets/images/mainlogoi.svg";
import Navoffcanvas from "./Navoffcanvas";
import { IoPersonOutline } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Prevent background scroll when offcanvas is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup on component unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-10 ">
        {/* Top Navbar */}
        <div className="flex items-center justify-between bg-NAVBAR px-4 py-2">
          {/* Left: Menu Icon */}
          <div className="flex items-center  justify-between md:justify-start  md:w-auto w-full gap-2">
            <div className="bg-white rounded-full p-2">
              <FaBars
                className="text-xl text-gray-700 cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            </div>

            <div className="text-xl font-bold text-gray-800">
              <img src={mainlogoi} alt="Main Logo" className="h-10 w-auto" />
            </div>
            <div
              className=" md:hidden h-8 w-8 justify-center items-center flex rounded-full bg-white p-1"
              onClick={() => navigate("/profile")}
            >
              <IoPersonOutline className="text-2xl cursor-pointer" />
            </div>
          </div>

          {/* Right: Navigation Options */}
          <div className=" flex items-center gap-10 text-gray-700">
            {/* for desktop */}
            <div className="hidden md:flex  gap-10">
              <div
                className={`flex items-center gap-1 cursor-pointer ${
                  location.pathname === "/" ? "text-RED" : "hover:text-red-500"
                }`}
                onClick={() => navigate("/")}
              >
                <FaHome />
                <span>Home</span>
              </div>

              <div className="flex items-center gap-1 cursor-pointer hover:text-red-500">
                <FaTrophy /> <span>Leaderboard</span>
              </div>
              <div className="flex items-center gap-1 cursor-pointer hover:text-red-500">
                <FaUsers /> <span>Community</span>
              </div>
              <div className="flex items-center gap-1 cursor-pointer hover:text-red-500">
                <FaMapMarkerAlt /> <span>My Area</span>
              </div>
              <div className="flex items-center gap-1 cursor-pointer hover:text-red-500">
                <FaComments /> <span>Chats</span>
              </div>
              <div
                className="h-8 w-8 justify-center items-center flex rounded-full bg-white p-1"
                onClick={() => navigate("/profile")}
              >
                <IoPersonOutline className="text-2xl cursor-pointer" />
              </div>
            </div>

            {/* Bottom Tab Bar - Mobile Only */}
            <div className="md:hidden fixed  bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 shadow z-50  rounded-tl-4xl rounded-tr-4xl">
              <div className="flex justify-around items-center px-4 py-2 text-gray-600 text-xs">
                <div
                  className={`flex flex-col items-center cursor-pointer ${
                    location.pathname === "/" ? "text-RED" : "text-gray-600"
                  }`}
                  onClick={() => navigate("/")}
                >
                  <FaHome className="text-2xl" />
                  <span>Home</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer hover:text-RED">
                  <FaTrophy className="text-2xl" />
                  <span>Leaderboard</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer hover:text-RED">
                  <FaUsers className="text-2xl" />
                  <span>Community</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer hover:text-RED">
                  <FaMapMarkerAlt className="text-2xl" />
                  <span>My Area</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer hover:text-RED">
                  <FaComments className="text-2xl" />
                  <span>Chats</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="relative w-full h-40 md:h-56 bg-NAVBAR px-4 flex items-end justify-end rounded-bl-3xl rounded-br-3xl">
          <img
            src={lotus}
            alt="Lotus"
            className="absolute bottom-0 right-1 md:right-5 h-28 md:h-40"
          />

          <div className="absolute z-50 bg-transparent w-full bottom-4 right-0  flex justify-between items-center gap-4 px-6 md:px-14">
            <div className="flex items-center gap-3">
              <div className="md:h-40 md:w-40 h-16 w-16 rounded-full bg-white p-0">
                <img
                  src={humanlogo}
                  alt="Profile"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <div className="text-sm text-gray-800">
                <div className="font-extrabold text-xl md:text-4xl text-RED">
                  विक्की जैन
                </div>
                <div className="flex items-center gap-1 md:gap-3 text-sm md:text-xl font-bold text-gray-600">
                  <FaBriefcase className="text-gray-500" />
                  कार्यसमिति सदस्य
                </div>
              </div>
            </div>

            <div className="bg-white rounded-md px-3 py-2 flex items-center gap-2 shadow">
              <img
                src={rupeelogo}
                alt="Logo"
                className=" h-5 w-5 md:h-8 md:w-8"
              />
              <span className="font-semibold text-lg md:text-xl text-RED">
                4000
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Offcanvas Component */}
      <Navoffcanvas isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;
