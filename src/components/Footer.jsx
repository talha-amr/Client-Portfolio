import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[30vh] gap-6 text-theme-red py-40 border-t-1 border-[#e52222]">
      <p className="text-3xl font-bold text-center">
        <span className="font-black">Let’s Make</span>
        <br />
        Something Amazing Together!
      </p>
      <button
        className="px-10 py-3 rounded-full border-2 border-[#E52222] text-[#E52222] font-semibold tracking-wide bg-transparent hover:bg-[#E52222] hover:text-white transition font-bold"
      >
        Let's Connect
      </button>
    </div>
  );
};

export default Footer;
