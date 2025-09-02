import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ activePage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (page) =>
    `text-[0.9vw] ${activePage === page ? " text-[#000000] font-bold" : ""}`;

  return (
    <>
      <nav
        className={`font-inter absolute top-0 py-[1.8vw] left-0 w-full z-50 ${
          activePage === "home"
            ? "bg-transparent text-white"
            : "bg-transparent text-[#000000]"
        }`}
      >
        <div className="w-full mx-auto px-6 flex items-center justify-between">
          {/* Brand + Nav links */}
          <div className="flex items-center space-x-[2.5vw] max-md:hidden">
            {/* Brand */}
            <Link
              to="/"
              className={`text-[1.7vw] font-black tracking-[-0.06em] italic ${
                activePage === "home" ? "text-white" : "text-[#000000]"
              }`}
            >
              ZB S.
            </Link>

            {/* Nav links */}
            <div className="flex items-center space-x-[1.8vw] font-regular">
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

          {/* Social links (desktop only) */}
          <div className="flex items-center space-x-[1.8vw] font-bold text-[0.8vw] max-md:hidden">
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

          {/* Mobile Brand + Hamburger */}
          <div className="flex items-center justify-between w-full md:hidden py-4">
            {/* Brand (mobile) */}
            <Link
              to="/"
              className={`text-[1.7rem] font-black tracking-[-0.06em] italic ${
                activePage === "home" ? "text-white" : "text-[#000000]"
              }`}
            >
              ZB S.
            </Link>

            {/* Hamburger */}
            <button onClick={() => setMenuOpen(true)}>
              <img src="/hamburger.png" alt="menu" className="w-9 h-9" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
{/* Mobile Fullscreen Menu */}
{menuOpen && (
  <div className="fixed inset-0 bg-black text-white font-bold z-[100] flex flex-col items-start justify-center space-y-8 text-[2.7rem] uppercase pl-5">
    {/* Close button with image */}
    <button
      onClick={() => setMenuOpen(false)}
      className="absolute top-6 right-6"
    >
      <img src="/MenuClose.png" alt="close" className="w-6 h-6" />
    </button>

    <Link to="/work" onClick={() => setMenuOpen(false)}>
      Work
    </Link>
    <Link to="/experience" onClick={() => setMenuOpen(false)}>
      Experience
    </Link>
    <a
      href="https://www.linkedin.com/in/zubair-s-a4889a103/"
      target="_blank"
      rel="noreferrer"
      onClick={() => setMenuOpen(false)}
    >
      LinkedIn
    </a>
    <a
      href="https://www.behance.net/bluecladesigne"
      target="_blank"
      rel="noreferrer"
      onClick={() => setMenuOpen(false)}
    >
      Behance
    </a>
  </div>
)}

    </>
  );
}
