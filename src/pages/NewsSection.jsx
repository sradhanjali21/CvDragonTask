import React, { useState } from "react";
import { newsData } from "../constants/data.js";
import { IoMdArrowRoundForward } from "react-icons/io";

const NewsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = window.innerWidth >= 768 ? 5 : 3;
  const visibleNews = showAll
    ? newsData.news
    : newsData.news.slice(currentIndex, currentIndex + itemsPerPage);

  const pageCount = Math.ceil(newsData.news.length / itemsPerPage);

  return (
    <div className="px-4 md:px-6 pb-8 pt-8 max-w-screen">
      {/* Heading */}
      <div className="flex items-center gap-3 pt-2">
        {newsData.mainlogo && (
          <img
            src={newsData.mainlogo}
            alt="Logo"
            className="w-10 h-10 object-contain"
          />
        )}
        <h1 className="text-2xl font-bold text-black">{newsData.heading}</h1>
      </div>

      {/* News Cards */}
<div
  className={`relative flex gap-4 h-60 px-2 items-center overflow-x-auto scrollbar-hide scroll-smooth  md:flex-wrap`}
>

  {visibleNews.map((item, idx) => {
    const isLastVisibleCard = !showAll && idx === visibleNews.length - 1;
    return (
      <div
        key={idx}
        className="group relative w-[210px] md:min-w-[16%] h-52 flex-shrink-0 overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105"
      >
        {/* Card Content */}
        <div
          className="w-full h-56 bg-center bg-cover rounded-lg shadow-md text-white relative"
          style={{ backgroundImage: `url(${item.newsLogo})` }}
        >
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute top-2 right-2 bg-gray-400 bg-opacity-50 text-white text-xs px-2 py-1 rounded group-hover:bg-white group-hover:text-RED">
            {item.releasedTime}
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-3 py-2">
            <h3 className="group-hover:text-white text-zinc-400 text-md font-bold -mt-18">{item.newsHeading}</h3>
          </div>
          {isLastVisibleCard && (
            <button
              className="absolute inset-0 bg-black/40 text-white text-sm font-semibold rounded-lg hover:bg-black/60 transition flex flex-col justify-center items-center"
              onClick={() => setShowAll(true)}
            >
              <div className="text-white text-2xl font-extrabold py-2">View All</div>
              <span className="text-white h-8 w-8 bg-RED flex justify-center items-center rounded-md text-xl font-bold center">
                <IoMdArrowRoundForward />
              </span>
            </button>
          )}
        </div>
      </div>
    );
  })}
</div>


      {/* Dot Navigation */}
      {!showAll && (
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i * itemsPerPage)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === i * itemsPerPage ? "bg-red-600" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      )}

      {/* View Less Button */}
      {showAll && (
        <div className="flex justify-center mt-6">
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
            onClick={() => {
              setShowAll(false);
              setCurrentIndex(0);
            }}
          >
            View Less ↑
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsSection;
