import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollerMobile = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);

    const projects = [
        { id: 1, title: "ABN GLOBAL", image: "/image-1.png", desc: "The ABN Agent Dashboard is an internal platform..." ,link:"https://www.behance.net/gallery/232967507/ABN-Global-Dashboard-Design-(CaseStudy)-(COPY) "},
        { id: 2, title: "IMC HEALTH APP", image: "/image-2.png", desc: "Description for IMC HEALTH APP" ,link:"https://www.behance.net/gallery/232967369/CaseStudy-IMC-Health-App-(COPY) "},
        { id: 3, title: "RIZQ FINANCIAL APP", image: "/image-3.png", desc: "Description for Rizq Financial App",link:"https://www.behance.net/gallery/232967157/Rizq-Financial-App-CaseStudy " },
        { id: 4, title: "ASK TECHNOSE", image: "/image-4.png", desc: "Description for ASK TECHNOSE",link:"https://www.behance.net/gallery/232967255/Redesign-Ask-Technos " },
        { id: 5, title: "BSM DEVELOPER", image: "/image-5.png", desc: "Description for BSM Developer",link:"https://www.bsmdevelopers.com/ " },
        { id: 6, title: "NEW METRO CITY", image: "image-6.png", desc: "Description for New Metro City",link:"https://www.newmetrocity.com.pk/ " },
    ];

  useGSAP(() => {
    // Sticky header
    gsap.set(headerRef.current, {
      position: "sticky",
      top: "0px",
      zIndex: 100,
      backgroundColor: "white",
    });

    const cards = containerRef.current.querySelectorAll(".project-card");

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { y: 100, opacity: 0.7, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
            markers: false,
          },
        }
      );
    });
  }, []);

  return (
<section className="w-full pt-4">
  {/* Sticky header */}
  <div ref={headerRef} className="px-6 py-3 bg-white">
    <p className="text-theme-red font-black text-4xl">Projects</p>
  </div>

  {/* Project list */}
  <div ref={containerRef} className="w-full space-y-10">
    {projects.map((project, idx) => (
      <a
        key={project.id}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block project-card w-full"
      >
        {/* Project label */}
        <div className="px-6 mb-2">
          <p className="text-black text-[0.65rem] tracking-[0.15em] uppercase">
            {idx + 1} / View Project / {project.title}
          </p>
        </div>

        {/* Project image */}
        <div className="relative w-full">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto shadow-lg"
          />
        </div>
      </a>
    ))}
  </div>
</section>

  );
};

export default ScrollerMobile;
