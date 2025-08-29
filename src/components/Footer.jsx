import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-8 w-full border-b border-[#E52222] pt-25 pb-17">
        {/* Contact Column */}
        <div>
          <h3 className="text-[#E52222] text-2xl pb-2 border-b border-[#E52222] mb-4">
            CONTACT
          </h3>
          <ul className="space-y-2 text-lg text-[#E52222]">
            <li>
              <a
                href="#"
                className="inline-block link-hover-btn border-b border-transparent hover:border-[#E52222]"
              >
                LINKEDIN
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block link-hover-btn border-b border-transparent hover:border-[#E52222]"
              >
                BEHANCE
              </a>
            </li>
          </ul>
        </div>

        {/* Pages Column */}
        <div className="col-span-2">
          <h3 className="text-[#E52222] text-2xl pb-2 border-b border-[#E52222] mb-4">
            PAGES
          </h3>

          <ul className="space-y-2 text-[#E52222] text-lg">
            <li className="flex justify-between items-center">
              <Link
                to="/"
                className="inline-block link-hover-btn border-b border-transparent hover:border-[#E52222]"
              >
                HOME
              </Link>
              <Link
                to="/"
                className="text-sm inline-block link-hover-btn border-b border-transparent hover:border-[#E52222]"
              >
                BACK TO TOP ↑
              </Link>
            </li>
            <li>
              <Link
                to="/work"
                className="inline-block link-hover-btn border-b border-transparent hover:border-[#E52222]"
              >
                WORK
              </Link>
            </li>
            <li>
              <Link
                to="/experience"
                className="inline-block link-hover-btn border-b border-transparent hover:border-[#E52222]"
              >
                EXPERIENCE
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center h-[35vh] gap-6 text-theme-red py-30">
        <p className="text-3xl font-bold text-center">
          <span className="font-black">Let’s Make</span>
          <br />
          Something Amazing Together!
        </p>
        <button
          className="px-10 py-3 rounded-full border-2 border-[#E52222] text-[#E52222] tracking-wide bg-transparent hover:bg-[#E52222] hover:text-white transition font-bold"
        >
          Let's Connect
        </button>
      </div>
    </>
  );
};

export default Footer;
