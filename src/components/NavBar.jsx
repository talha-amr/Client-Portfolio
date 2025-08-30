import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ activePage }) {
  // helper function to set link style
  const linkClass = (page) =>
    `text-[1vw] ${activePage === page ? " text-[#E52222] font-bold" : ""}`;

  return (
    <nav
      className={`font-inter absolute top-0 py-[2vw] left-0 w-full z-50 ${
        activePage === "home"
          ? "bg-transparent text-white"
          : "bg-transparent text-[#E52222]"
      }`}
    >
      <div className="w-full mx-auto px-6 flex items-center justify-between">
        {/* Brand + Nav links */}
        <div className="flex items-center space-x-[3vw]">
          {/* Brand */}
          <Link
            to="/"
            className={`text-[2vw] font-black tracking-[-0.06em] italic ${
              activePage === "home" ? "text-white" : "text-[#E52222]"
            }`}
          >
            ZB S.
          </Link>

          {/* Nav links */}
          <div className=" flex items-center space-x-[2vw] font-regular">
            <Link to="/work" className="group">
              <div className="relative overflow-hidden flex items-center">
                <p
                  className={`block transition-transform duration-500 group-hover:-translate-y-full ${linkClass(
                    "work"
                  )}`}
                >
                  Work
                </p>
                <p
                  className={`absolute top-0 left-0 transition-transform duration-500 translate-y-full group-hover:translate-y-0 ${linkClass(
                    "work"
                  )}`}
                >
                  Work
                </p>
              </div>
            </Link>
            <Link to="/experience" className="group">
              <div className="relative overflow-hidden flex items-center">
                <p
                  className={`block transition-transform duration-500 group-hover:-translate-y-full ${linkClass(
                    "experience"
                  )}`}
                >
                  Experience
                </p>
                <p
                  className={`absolute top-0 left-0 transition-transform duration-500 translate-y-full group-hover:translate-y-0 ${linkClass(
                    "experience"
                  )}`}
                >
                  Experience
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Social links */}
        <div className="flex items-center space-x-[2vw] font-bold text-[0.9vw]">
          <a
            href="https://www.linkedin.com/in/zubair-s-a4889a103/"
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <div className="relative overflow-hidden">
              <p className="block transition-transform duration-500 group-hover:-translate-y-full">
                LinkedIn
              </p>
              <p className="absolute top-0 left-0 transition-transform duration-500 translate-y-full group-hover:translate-y-0">
                LinkedIn
              </p>
            </div>
          </a>
          <a
            href="https://www.behance.net/bluecladesigne"
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <div className="relative overflow-hidden">
              <p className="block transition-transform duration-500 group-hover:-translate-y-full">
                Behance
              </p>
              <p className="absolute top-0 left-0 transition-transform duration-500 translate-y-full group-hover:translate-y-0">
                Behance
              </p>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
}
