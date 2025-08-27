import React from "react";

const Card = ({ image, title, desc }) => {
  return (
    <div className="project-card w-full mb-16  bg-[#F9F9F9]  overflow-hidden flex flex-col">
      
      {/* Image Section */}
      {image && (
        <div className="w-full">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-120" // h-64 ensures consistent height
          />
        </div>
      )}

      {/* Content Section */}
       <div className="w-full py-10 px-8">
        <div className="flex items-center justify-between">
          <p className="text-[#e52222] text-base max-w-[70%]">{desc}</p>
          <button className="px-6 py-3 rounded-md border border-[#E52222] bg-white text-[#E52222] text-sm font-semibold 
            hover:bg-[#E52222] hover:text-white transition-colors duration-300">
            View Study
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
