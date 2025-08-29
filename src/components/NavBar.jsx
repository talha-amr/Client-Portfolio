import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ activePage }) {
  // helper function to set link style
  const linkClass = (page) =>
    `nav-hover-btn text-sm 2xl:text-lg ${
      activePage === page ? " text-[#E52222]" : ""
    }`;

  return (
    <nav
      className={`font-inter absolute top-0 py-7 left-0 w-full z-50 ${
        activePage === "home"
          ? "bg-transparent text-white"
          : "bg-transparent text-[#E52222] "
      }`}
    >
      <div className="w-full mx-auto px-6 flex items-center justify-between">
        {/* Brand + Nav links */}
        <div className="flex items-center space-x-12">
          {/* Brand */}
          <Link
            to="/"
            className={`text-2xl 2xl:text-4xl font-black tracking-[-0.06em] italic ${
              activePage === "home" ? "text-white" : "text-[#E52222]"
            }`}
          >
            ZB S.
          </Link>

          {/* Nav links */}
          <div className="hidden md:flex items-center space-x-8 font-regular">
            <Link to="/work" className={linkClass("work")}>
              Work
            </Link>
            <Link to="/experience" className={linkClass("experience")}>
              Experience
            </Link>
          </div>
        </div>

        {/* Social links */}
        <div className="flex items-center space-x-6 font-bold text-sm 2xl:text-lg">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="nav-hover-btn"
          >
            LinkedIn
          </a>
          <a
            href="https://www.behance.net"
            target="_blank"
            rel="noreferrer"
            className="nav-hover-btn"
          >
            Behance
          </a>
        </div>
      </div>
    </nav>
  );
}
