import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-8 w-full border-b border-[#E52222] pt-[6vh] pb-[4vh]">
        {/* Contact Column */}
        <div>
          <h3 className="text-[#E52222] text-[3vh] pb-[1.2vh] border-b border-[#E52222] mb-[2.5vh]">
            CONTACT
          </h3>
          <ul className="space-y-[1.2vh] text-[2.4vh] text-[#E52222]">
            <li className="group relative overflow-hidden w-fit">
              <a
                href="https://www.linkedin.com/in/zubair-s-a4889a103/"
                target="_blank"
                className="block transition-transform duration-500 group-hover:-translate-y-full"
              >
                LINKEDIN
              </a>
              <a
              target="_blank"
                href="https://www.linkedin.com/in/zubair-s-a4889a103/"
                className="absolute top-0 left-0 transition-transform duration-500 translate-y-full group-hover:translate-y-0"
              >
                LINKEDIN
              </a>
            </li>
            <li className="group relative overflow-hidden w-fit">
              <a
                href="https://www.behance.net/bluecladesigne"
                target="_blank"
                className="block transition-transform duration-500 group-hover:-translate-y-full"
              >
                BEHANCE
              </a>
              <a
                href="https://www.behance.net/bluecladesigne"
                target="_blank"
                className="absolute top-0 left-0 transition-transform duration-500 translate-y-full group-hover:translate-y-0"
              >
                BEHANCE
              </a>
            </li>
          </ul>
        </div>

        {/* Pages Column */}
        <div className="col-span-2">
          <h3 className="text-[#E52222] text-[3vh] pb-[1.2vh] border-b border-[#E52222] mb-[2.5vh]">
            PAGES
          </h3>

          <ul className="space-y-[1.2vh] text-[#E52222] text-[2.4vh]">
            <li className="flex justify-between items-center">
              <Link to="/" className="group relative overflow-hidden w-fit">
                <p className="block transition-transform duration-500 group-hover:-translate-y-full">
                  HOME
                </p>
                <p className="absolute top-0 left-0 transition-transform duration-500 translate-y-full group-hover:translate-y-0">
                  HOME
                </p>
              </Link>
              <Link
                to="/"
                className="group relative overflow-hidden w-fit text-[2vh]"
              >
                <p className="block transition-transform duration-500 group-hover:-translate-y-full">
                  BACK TO TOP ↑
                </p>
                <p className="absolute top-0 left-0 transition-transform duration-500 translate-y-full group-hover:translate-y-0">
                  BACK TO TOP ↑
                </p>
              </Link>
            </li>

            {/* Work */}
            <li>
              <Link to="/work" className="group w-fit">
                <span className="relative block overflow-hidden h-[2.8vh] leading-[2.8vh]">
                  <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                    WORK
                  </span>
                  <span className="absolute inset-0 transition-transform duration-500 translate-y-full group-hover:translate-y-0">
                    WORK
                  </span>
                </span>
              </Link>
            </li>

            {/* Experience */}
            <li>
              <Link to="/experience" className="group w-fit">
                <span className="relative block overflow-hidden h-[2.8vh] leading-[2.8vh]">
                  <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                    EXPERIENCE
                  </span>
                  <span className="absolute inset-0 transition-transform duration-500 translate-y-full group-hover:translate-y-0">
                    EXPERIENCE
                  </span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col justify-center items-center h-[35vh] gap-[3vh] text-theme-red py-[5vh]">
        <p className="text-[3.8vh] font-bold text-center leading-tight">
          <span className="font-black">Let’s Make</span>
          <br />
          Something Amazing Together!
        </p>
        <button className="px-[5vh] py-[1.6vh] rounded-full border-2 border-[#E52222] text-[2.5vh] text-[#E52222] tracking-wide bg-transparent hover:bg-[#E52222] hover:text-white transition font-bold">
          Let's Connect
        </button>
      </div>
    </>
  );
};

export default Footer;
