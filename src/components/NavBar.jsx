import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="font-inter absolute top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-7 flex items-center justify-between text-white">
        
        {/* Brand + Nav links */}
        <div className="flex items-center space-x-12">
          {/* Brand */}
          <div className="text-2xl font-black tracking-tight italic">
            ZB S.
          </div>

          {/* Nav links */}
          <div className="hidden md:flex text-xs items-center space-x-8 font-regular">
            <Link to="/casestudies" className="nav-hover-btn">
              Case Studies
            </Link>
            <Link to="/experience" className="nav-hover-btn">
              Experience
            </Link>
            <Link to="/contact" className="nav-hover-btn">
              Contact us
            </Link>
          </div>
        </div>

        {/* Social links */}
        <div className="flex items-center text-xs space-x-6 font-bold">
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
