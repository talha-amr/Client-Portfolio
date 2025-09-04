import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MenuIcon from "./MenuIcon";
import CloseIcon from "./CloseIcon";

export default function Navbar({ activePage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const tl = useRef(null);

  const linkClass = (page) =>
    `text-[0.9vw] ${activePage === page ? " text-[#000000] font-bold" : ""}`;

  // Setup GSAP animation
  useGSAP(() => {
    if (menuRef.current) {
      tl.current = gsap.timeline({ paused: true })
        .fromTo(
          menuRef.current,
          { x: "100%" },
          { x: "0%", duration: 0.6, ease: "power3.out" }
        )
        .fromTo(
          menuRef.current.querySelectorAll("a"),
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: "power2.out" },
          "-=0.3"
        );
    }
  }, []);

  // Play or reverse animation based on menuOpen
  useEffect(() => {
    if (tl.current) {
      if (menuOpen) {
        tl.current.play();
      } else {
        tl.current.reverse();
      }
    }
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`font-inter absolute top-0 py-[1.8vw] left-0 w-full z-50 ${activePage === "home"
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
              className={`text-[1.7vw] font-black tracking-[-0.06em] italic ${activePage === "home" ? "text-white" : "text-[#000000]"
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
          <div className="flex items-center justify-between w-full md:hidden py-4 ">
            {/* Brand (mobile) */}
            <Link
              to="/"
              className={`text-[2.2rem] font-black tracking-[-0.06em] italic ${activePage === "home" ? "text-white" : "text-theme-red"
                }`}
            >
              ZB S.
            </Link>

            {/* Hamburger */}
            {/* Hamburger */}
            <button onClick={() => setMenuOpen(true)}>
              <MenuIcon size={45} color={activePage === "home" ? "#ffffff" : "#e52222"} />
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <div
        ref={menuRef}
        className="fixed inset-0 bg-[#242424] text-white font-bold z-[100] translate-x-full"
      >
        {/* Container same as navbar */}
        <div className="w-full mx-auto px-6 h-full flex flex-col">
          {/* Top bar with Logo + Close */}
          <div className="flex justify-between items-center w-full py-6">
            {/* Logo on left */}
            <Link
              to="/"
              className="text-[2.2rem] font-black tracking-[-0.06em] italic text-white"
              onClick={() => setMenuOpen(false)}
            >
              ZB S.
            </Link>

            {/* Close button on right */}
            <button onClick={() => setMenuOpen(false)}>
              <CloseIcon size={45} color="#ffffff" />
            </button>

          </div>

          {/* Menu links */}
          <div className="flex flex-col items-start justify-center flex-grow space-y-8 text-[2rem] uppercase">
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
        </div>
      </div>
    </>
  );
}
