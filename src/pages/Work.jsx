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
            className="flex justify-between items-center w-full text-red-600 text-[0.9vw] font-medium mb-8 absolute z-20"
            style={{ top: `calc(8.1vw + 22vw)` }}
          >
            <span className="flex-shrink-0 font-regular">AVAILABLE FOR WORK</span>
            <div className="flex items-center gap-25 flex-shrink-0 font-regular">
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
      <div className="relative w-full">
        <img
          src="/Work-video-image.png"
          alt="Held Image"
          className="w-full relative z-10"
          style={{ marginTop: `calc(-1.0vw - 0.25rem)` }}
        />
      </div>

      {/* Projects grid inside container below held image */}
      <div className="w-full px-6 py-10">
        <ProjectsGrid />
      </div>

      <Footer />
    </div>
  );
};

export default Work;
