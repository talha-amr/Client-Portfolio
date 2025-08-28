import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  // Function to scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-8 w-full border-b border-[#E52222] pt-50 pb-17 ">
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
                onClick={scrollToTop}
                className="inline-block link-hover-btn border-b border-transparent hover:border-[#E52222]"
              >
                HOME
              </Link>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                }}
                className="text-sm inline-block link-hover-btn border-b border-transparent hover:border-[#E52222]"
              >
                BACK TO TOP ↑
              </a>
            </li>
            <li>
              <Link
                to="/work"
                onClick={scrollToTop}
                className="inline-block link-hover-btn border-b border-transparent hover:border-[#E52222]"
              >
                WORK
              </Link>
            </li>
            <li>
              <Link
                to="/experience"
                onClick={scrollToTop}
                className="inline-block link-hover-btn border-b border-transparent hover:border-[#E52222]"
              >
                EXPERIENCE
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center h-[30vh] gap-6 text-theme-red py-40">
        <p className="text-3xl font-bold text-center">
          <span className="font-black">Let’s Make</span>
          <br />
          Something Amazing Together!
        </p>
        <button
          onClick={scrollToTop}
          className="px-10 py-3 rounded-full border-2 border-[#E52222] text-[#E52222] tracking-wide bg-transparent hover:bg-[#E52222] hover:text-white transition font-bold"
        >
          Let's Connect
        </button>
      </div>
    </>
  );
};

export default Footer;
