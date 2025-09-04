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

      <div className="pt-[10vw] max-md:py-10"></div>

      {/* Headline + absolute text + monkey inside container */}
      <div className="w-full px-6 relative">
        <div className="md:flex flex-col items-center relative hidden">
          {/* Headline text */}
          <p className="font-black text-red-600 text-[7.1vw] uppercase text-center leading-none tracking-tighter z-0 whitespace-nowrap">
            Every Pixel With Purpose
          </p>

          {/* Small text row above main content */}
              <div
            className="flex justify-between items-center w-[55%] text-red-600 text-[0.9vw] font-light mb-8 absolute z-20"
            style={{ top: `calc(8.1vw + 10vw)` }}
          >
            <div className="flex items-center gap-3"><img src="/OnlineSymbol.png" alt="" className='w-[15px]'/><p className='uppercase text-[#178243]'>open to work</p></div>
            <p className="flex-shrink-0">SCROLL TO VIEW MORE</p>
          </div>

          {/* Monkey overlapping text */}
          <div className="relative w-full flex justify-center">
            <img
              id='image'
              src="/Monkey-work1.png"
              alt="Monkey"
              className="w-[25vw] relative z-50"
            />
          </div>
        </div>
      </div>

      {/* Held image outside container */}
      <div className="relative hidden md:block">
        <video
          src="/Project-video.mp4"
          autoPlay
          loop
          muted
          preload="auto"
          alt="Video"
          className="w-full relative z-10 "
          style={{ marginTop: `calc(-1.05vw - 0.20rem)` }}
        />
      </div>
<div className="w-full px-6">
<div className="flex md:hidden flex-col items-start  relative w-full pt-5">
  {/* Headline */}
    {/* Monkey image above "EVERY" */}
  <div className="w-[10rem] h-auto  flex justify-center z-50">
    <img
      src="/Monkey-work1.png"
      alt="Monkey"
      className="w-full h-auto"
    />
  </div>
  <p className="font-black text-red-600 text-[3.5rem] -mt-2.5 uppercase text-start leading-[0.8] ">
    EVERY <br/> PIXEL WITH PURPOSE
  </p>
  <p className="mt-4 text-lg font-light text-red-600 leading-none">
    SCROLL TO VIEW MORE
  </p>


</div>

 
</div>
      {/* Projects grid inside container below held image */}
      <div className="w-full max-md:px-0 px-6 py-10">
        <ProjectsGrid />
        <Footer />
      </div>


    </div>
  );
};

export default Work;
