import React, { useState } from "react";
import { UpdatesData } from "../constants/data";
import { FaArrowRight } from "react-icons/fa";
import shadowIcon from "../assets/images/shadow.png"; // Replace with your path

const UpdateCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const cardWidth = e.currentTarget.clientWidth;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  return (
    <div className="px-4 md:px-8 py-8 w-full">
      {/* Heading */}
      <div className="flex items-center gap-3 pb-4">
        <img src={UpdatesData.mainlogo} alt="Logo" className="w-10 h-10" />
        <h2 className="text-2xl font-bold text-black">
          {UpdatesData.heading}
        </h2>
      </div>

      {/* Scrollable Cards */}
      <div
        className="flex overflow-x-auto h-72 p-2 space-x-4 scroll-smooth scrollbar-hide"
        onScroll={handleScroll}
      >
        {UpdatesData.updates.map((update, index) => (
          <div
            key={index}
            className={`transform transition-transform duration-300 hover:scale-105 group w-[210px] md:w-[250px] h-[250px] rounded-xl p-4 relative flex-shrink-0 shadow-md ${
              index % 2 === 0 ? "bg-[#FFB39D]" : "bg-[#FFDE97]"
            }`}
          >
            {/* Top-right Shadow Image */}
            <img
              src={shadowIcon}
              alt="Shadow"
              className="absolute top-0 right-0 w-32 h-32 opacity-30"
            />

            {/* Text Content */}
            <div className="flex flex-col z-50 h-full justify-between">
              <div className="gap-3 flex flex-col pt-5">
                <h3 className="text-2xl font-bold text-black group-hover:text-white">
                  {update.heading}
                </h3>
                <p className="text-base font-semibold text-black group-hover:text-white mt-4">
                  {update.headline}
                </p>
              </div>

              {/* Bottom Row */}
              <div className="flex justify-between items-center mt-4 text-sm font-medium text-gray-900">
                <span className="font-bold text-xl group-hover:text-white">More Info</span>
                <span className="bg-white p-1 rounded">
                  <FaArrowRight className="text-black group-hover:text-RED" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {UpdatesData.updates.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              activeIndex === i ? "bg-red-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default UpdateCards;
