// pages/ProfilePage.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaSignOutAlt, FaBriefcase, FaPen } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import humanlogo from "../assets/images/humanlogo.svg"; // Adjust path
import lotus from "../assets/images/lotus.svg";
import {
  MdPersonOutline,
  MdLocationOn,
  MdNotificationsNone,
  MdFolderOpen,
  MdNoteAlt,
  MdBarChart,
  MdPhone,
  MdFeedback,
  MdSupportAgent,
  MdSettings,
} from "react-icons/md";



const options = [
  {
    optionimage: <MdPersonOutline className="text-2xl text-gray-500" />,
    optionheading: "Profile",
    subheading: "Manage your profile",
  },
  {
    optionimage: <MdLocationOn className="text-2xl text-gray-500" />,
    optionheading: "My Area",
    subheading: "Explore your region",
  },
  {
    optionimage: <MdNotificationsNone className="text-2xl text-gray-500" />,
    optionheading: "Notifications",
    subheading: "View recent updates",
  },
  {
    optionimage: <MdFolderOpen className="text-2xl text-gray-500" />,
    optionheading: "My Contributions",
    subheading: "Posts you've shared",
  },
  {
    optionimage: <MdNoteAlt className="text-2xl text-gray-500" />,
    optionheading: "My Notes",
    subheading: "Your saved notes",
  },
  {
    optionimage: <MdBarChart className="text-2xl text-gray-500" />,
    optionheading: "My Scores",
    subheading: "Track your performance",
  },
  {
    optionimage: <MdPhone className="text-2xl text-gray-500" />,
    optionheading: "Contact",
    subheading: "Reach out to us",
  },
  {
    optionimage: <MdFeedback className="text-2xl text-gray-500" />,
    optionheading: "Feedback",
    subheading: "Help us improve",
  },
  {
    optionimage: <MdSupportAgent className="text-2xl text-gray-500" />,
    optionheading: "Support",
    subheading: "Get assistance",
  },
  {
    optionimage: <MdSettings className="text-2xl text-gray-500" />,
    optionheading: "Settings",
    subheading: "Customize your experience",
  },
];



const ProfilePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // add your logout logic here
    console.log("Logged out");
  };

  return (
    <div className=" absolute z-10  min-h-screen w-full mt-0 bg-[#FAFAFA] flex flex-col ">
      {/* Top Section */}
      <div className="bg-[#FEEBCA] rounded-b-3xl p-6 relative">
        <img
          src={lotus}
          alt="Lotus"
          className="absolute bottom-0 right-0 md:right-5 h-24 md:h-40"
        />
        {/* Back & Logout Buttons */}
        <div className="flex justify-between items-center">
          <div
            onClick={() => navigate(-1)}
            className="h-10 w-10 bg-white rounded-full flex justify-center items-center cursor-pointer shadow"
          >
            <FaArrowLeft className="text-gray-800" />
          </div>
          <div
            onClick={handleLogout}
            className="h-10 w-10 bg-white rounded-full flex justify-center items-center cursor-pointer shadow"
          >
            <FaSignOutAlt className="text-gray-800" />
          </div>
        </div>

        {/* Profile Picture */}
        <div className="flex flex-col items-center mt-4 relative">
          <div className="relative">
            <img
              src={humanlogo}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white object-cover"
            />
            <div className="absolute bottom-3 right-2 bg-white rounded-full p-1 shadow cursor-pointer">
              <FaPen className="text-sm text-gray-700" />
            </div>
          </div>
          <h2 className="text-xl font-bold mt-2 capitalize">vikky jain</h2>
          <div className="flex items-center gap-2 text-gray-600 mt-1 text-sm">
            <FaBriefcase />
            Karyasamiti Sadasya
          </div>
        </div>
      </div>

      {/* Options */}
      <div className="flex-1 px-5 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {options.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center bg-white rounded-lg p-2 shadow-xl hover:bg-gray-50 cursor-pointer"
            >
              <div className="flex items-center gap-4 w-full">
                <div className="flex w-[17%] rounded h-full p-3 bg-[#fcf4f3] justify-center items-center">
                  <div className="text-2xl">{item.optionimage}</div>
                </div>

                <div className="flex flex-col w-full ">
                  <h3 className="text-sm text-RED font-bold">
                    {item.optionheading}
                  </h3>
                  <p className="text-xs text-gray-500">{item.subheading}</p>
                </div>
              </div>
              <IoIosArrowForward className="text-gray-400 text-xl" />
            </div>
          ))}
        </div>
      </div>

      {/* Logout Button */}
      <div className="px-5 pb-6 flex justify-center items-center mb-10 md:mb-0">
        <button
          onClick={handleLogout}
          className=" bg-RED w-full md:w-auto text-white   py-3 px-10 rounded-md font-semibold hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
