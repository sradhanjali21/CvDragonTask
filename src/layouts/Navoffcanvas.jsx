// components/Navoffcanvas.jsx
import React from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import {
  FaTasks,
  FaUsers,
  FaTrophy,
  FaComments,
  FaBook,
  FaLightbulb,
  FaPoll,
  FaHandsHelping,
  FaQuestionCircle,
  FaDownload,
  FaNewspaper,
  FaCog,
  FaGift,
  FaBriefcase,
} from "react-icons/fa";
import humanlogo from "../assets/images/humanlogo.svg";

const options = [
  { icon: <FaTasks />, label: "My Task" },
  { icon: <FaUsers />, label: "My Community" },
  { icon: <FaTrophy />, label: "Leaderboard" },
  { icon: <FaComments />, label: "Chats" },
  { icon: <FaBook />, label: "Courses" },
  { icon: <FaLightbulb />, label: "Knowledge" },
  { icon: <FaPoll />, label: "Polls" },
  { icon: <FaHandsHelping />, label: "Contributions" },
  { icon: <FaGift />, label: "Quizzes" },
  { icon: <FaNewspaper />, label: "Updates" },
  { icon: <FaDownload />, label: "Downloads" },
  { icon: <FaNewspaper />, label: "News" },
  { icon: <FaQuestionCircle />, label: "FAQs" },
  { icon: <FaCog />, label: "Settings" },
];

const Navoffcanvas = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-[999] transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } flex flex-col`}
    >
      {/* Close button */}
      <div className="flex justify-end p-3">
        <IoCloseCircleSharp
          className="text-3xl text-gray-600 cursor-pointer"
          onClick={onClose}
        />
      </div>

      {/* Profile Info */}
      <div className="flex items-center gap-3 px-4 mb-2">
        <img
          src={humanlogo}
          alt="Profile"
          className="h-16 w-16 rounded-full object-cover"
        />
        <div>
          <h2 className="text-lg font-bold text-gray-800">Vikky jain</h2>
          <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <FaBriefcase className="text-gray-500" />
            Karyasamiti Sadasya
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-300 my-2" />

      {/* Scrollable Menu */}
      <div className="flex-1 overflow-y-auto px-4 md:space-y-3 space-y-5 mt-3">
        {options.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-gray-700 hover:text-red-500 cursor-pointer"
          >
            <span className="md:text-base text-xl">{item.icon}</span>
            <span className="md:text-sm text-base font-medium">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <hr className="border-t border-gray-300 mt-4 mb-1" />
      <div className="flex justify-center text-[8px] mb-2">
        Version 89799.00
      </div>
    </div>
  );
};

export default Navoffcanvas;
