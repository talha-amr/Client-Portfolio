import React, { useRef } from "react";
import { CgArrowTopRight } from "react-icons/cg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollerMobile = () => {
  const containerRef = useRef(null);

  const projects = [
    { id: 1, title: "ABN GLOBAL", image: "/image-1.png", desc: "The ABN Agent Dashboard is an internal platform..." },
    { id: 2, title: "IMC HEALTH APP", image: "/image-2.png", desc: "Description for IMC HEALTH APP" },
    { id: 3, title: "RIZQ FINANCIAL APP", image: "/image-3.png", desc: "Description for Rizq Financial App" },
    { id: 4, title: "ASK TECHNOSE", image: "/image-4.png", desc: "Description for ASK TECHNOSE" },
    { id: 5, title: "BSM DEVELOPER", image: "/image-5.png", desc: "Description for BSM Developer" },
    { id: 6, title: "NEW METRO CITY", image: "/image-6.png", desc: "Description for New Metro City" },
  ];

  // useGSAP hook
  useGSAP(() => {
    const cards = containerRef.current.querySelectorAll(".project-card");

    cards.forEach((card) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top-=200 top" ,
        end: () => `+=${window.innerHeight * 1.5}`, // increase pin duration for slower scroll
        pin: true,
        pinSpacing: true,
        scrub: 1, // smooth scrubbing
        markers: false,
      });
    });
  }, []);

  return (
    <section className="w-screen">
      <div className="w-full px-6">
        <p className="text-theme-red font-black pt-15 text-4xl mb-8">Projects</p>
      </div>

      <div ref={containerRef} className="flex flex-col gap-16">
        {projects.map((project) => (
          <div key={project.id} className="relative w-full project-card">
            <img src={project.image} alt={project.title} className="w-full " />

            <div className="absolute bottom-0 h-[15%] w-full flex gap-2 items-center justify-center 
              bg-white/20 backdrop-blur-md border-t border-white/30">
              <p className="text-theme-red text-center font-semibold">{project.title}</p>
              <CgArrowTopRight color="#e52222" size={24} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScrollerMobile;
