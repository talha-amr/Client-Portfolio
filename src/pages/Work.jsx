import React from 'react';
import Navbar from '../components/NavBar';
import ProjectsGrid from '../components/ProjectsGrid';
import Footer from '../components/Footer';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Work = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    // Start with monkey behind the image
    tl.set('#image', { zIndex: 5 })
      .from('#image', { yPercent: 100, duration: 0.6, ease: 'power2.out' })
      .set('#image', { zIndex: 50 });
  }, []);

  return (
    <div className="min-h-dvh w-screen bg-[#f9f9f9]">
      <Navbar activePage={"work"} />

      <div className="pt-35"></div>

      {/* Headline + absolute text + monkey inside container */}
      <div className="w-full px-6 relative">
        <div className="flex flex-col items-center relative">
          {/* Headline text */}
          <p className="font-black text-red-600 text-[8.1vw] italic text-center leading-none tracking-tighter z-0 whitespace-nowrap">
            Every Pixel With Purpose
          </p>

          {/* Small text row above main content */}
          <div
            className="flex justify-between items-center w-[70%] text-red-600 text-[0.9vw] font-light mb-8 absolute z-20 "
            style={{ top: `calc(8.1vw + 10vw)` }}
          >
            <span className="flex-shrink-0 ">AVAILABLE FOR WORK</span>
            <div className="flex items-center gap-25 flex-shrink-0 font-light">
              <p>SCROLL TO VIEW MORE</p>
              <p>2025</p>
            </div>
          </div>

          {/* Monkey overlapping text */}
          <div className="relative w-full flex justify-center">
            <img
              id='image'
              src="/Monkey-work1.png"
              alt="Monkey"
              className="w-[25vw] relative z-50"
              style={{ marginTop: `calc(-2.5vw - 0.5rem)` }}
            />
          </div>
        </div>
      </div>

      {/* Held image outside container */}
      <div className="relative w-full px-6">
        <video
          src="/Project-video.mp4"
          autoPlay
          loop
          muted
          preload="auto"
          alt="Video"
          className="w-full relative z-10 rounded-2xl shadow-md"
          style={{ marginTop: `calc(-1.05vw - 0.20rem)` }}
        />
      </div>

      {/* Projects grid inside container below held image */}
      <div className="w-full px-6 py-10">
        <ProjectsGrid />
        <Footer />
      </div>


    </div>
  );
};

export default Work;
