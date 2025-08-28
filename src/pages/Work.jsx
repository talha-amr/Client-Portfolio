import React from 'react';
import Navbar from '../components/NavBar';
import ProjectsGrid from '../components/ProjectsGrid';
import Footer from '../components/Footer';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Work = () => {
    useGSAP(()=>{
        gsap.from('#image',{
            yPercent:50,
            duration:0.9,
            ease:'none'
        })
    },[])
  return (
    <div className="min-h-dvh w-screen bg-[#f9f9f9]">
      <Navbar activePage={"work"} />

      <div className="w-full px-6">
        <div className="pt-35"></div>

        {/* Main content */}
        <div className="relative flex flex-col items-center">
          {/* Headline text */}
          <p className="font-black text-red-600 text-[8.1vw] italic text-center leading-none tracking-tighter z-0 whitespace-nowrap">
            Every Pixel With Purpose
          </p>

          {/* Small text row above main content */}
          <div
            className="flex justify-between items-center w-full text-red-600 text-[0.9vw] font-medium mb-8 absolute z-20"
            style={{ top: `calc(8.1vw + 22.5vw)` }} // scales with headline size
          >
            <span className="flex-shrink-0">AVAILABLE FOR WORK</span>
            <div className="flex items-center gap-25 flex-shrink-0">
              <p>SCROLL TO VIEW MORE</p>
              <p>2025</p>
            </div>
          </div>

          {/* Monkey overlapping text */}
          <div className="relative w-full flex justify-center" >
            <img
              src="/Monkey-work1.png"
              alt="Monkey"
              className="w-[25vw] relative z-10"
              style={{ marginTop: `calc(-2vw - 0.5rem)` }}
            />
          </div>

          {/* Image being held */}
          <div className="relative w-full" id='image'>
            <img
              src="/Work-video-image.png"
              alt="Held Image"
              className="w-full relative z-0"
              style={{ marginTop: `calc(-1.0vw - 0.25rem)` }}
            />
          </div>
        </div>

        {/* Projects grid */}
        <div className="py-10">
          <ProjectsGrid />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Work;
