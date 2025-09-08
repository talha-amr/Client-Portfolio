import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const spanClass = (span) => (span === 4 ? "col-span-4" : "col-span-2");

const projects = [
  { span: 4, items: [{ id: 1, src: "/image-1.png", name: "ABN Global", hasCaseStudy: false, link: "https://www.behance.net/gallery/232967507/ABN-Global-Dashboard-Design-(CaseStudy)-(COPY) " }] },
  { span: 2, items: [{ id: 2, src: "/image-grid-2.png", name: "Otomayt.ai", hasCaseStudy: false, link: "http://otomayt.ai" }] },
  { span: 2, items: [{ id: 3, src: "/image-grid-3.png", name: "Rizq Financial App", hasCaseStudy: false, link: "https://www.behance.net/gallery/232967157/Rizq-Financial-App-CaseStudy " }] },
  {
    span: 2,
    items: [
      { id: 4, src: "/image-grid-4.png", name: "ABurger", hasCaseStudy: false, link: "https://www.behance.net/gallery/223450313/ABurger-Website-Design " },
      { id: 7, src: "/image-grid-5.png", name: "RIZQ HRMS", hasCaseStudy: false, link: "https://www.behance.net/gallery/218161177/HRMS-Dashboard-Design " },
    ],
  },
  { span: 2, items: [{ id: 5, src: "/Work-video.mov", name: "RozeeGPT Seeker App", hasCaseStudy: false, link: "" }] },
  { span: 4, items: [{ id: 6, src: "/image-grid-7.png", name: "PRC Consulting", hasCaseStudy: false, link: "https://www.prcksa.com" }] },
  { span: 2, items: [{ id: 8, src: "/image-grid-8.png", name: "RIZQ Dashboard Redesign", hasCaseStudy: false, link: "https://www.behance.net/gallery/223883641/RIZQ-Redesign-Dashboard-UI " }] },
  { span: 4, items: [{ id: 9, src: "/image-grid-9.png", name: "Food App", hasCaseStudy: false, link: "https://www.behance.net/gallery/217913171/Food-App-Splash-Scree " }] },
  { span: 2, items: [{ id: 10, src: "/image-grid-10.png", name: "Lahori Burger", hasCaseStudy: false, link: "https://www.behance.net/gallery/223358887/Lahori-Burger-(New-Project-Coming-Soon) " }] },
];

const ProjectsGrid = () => {
  const navigate = useNavigate();
  const mobileContainerRef = useRef(null);

  const handleClick = (item) => {
    if (item.hasCaseStudy) {
      navigate("/caseStudy");
    } else {
      window.open(item.link, "_blank");
    }
  };

  // ✅ Add GSAP animation for mobile only
  useGSAP(() => {
    if (window.innerWidth < 768 && mobileContainerRef.current) {
      const cards = mobileContainerRef.current.querySelectorAll(".project-card");

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
    }
  }, []);

  return (
    <div className="w-full">
      {/* Desktop Header */}
      <p className="hidden md:block text-theme-red text-[3.5vw] py-10">SELECT WORK</p>

      {/* Desktop Grid */}
      <div className="hidden md:grid min-h-[90vh] grid-cols-8 gap-x-4 gap-y-18 w-full py-3">
        {projects.map((col, idx) => (
          <div
            key={idx}
            className={`${spanClass(col.span)} flex flex-col ${
              col.items.length > 1 ? "justify-between" : "gap-2"
            }`}
          >
            {col.items.map((item) => (
              <ProjectCard key={item.id} item={item} handleClick={handleClick} />
            ))}
          </div>
        ))}
      </div>

      {/* ----------------- Mobile Grid ----------------- */}
      <div ref={mobileContainerRef} className="flex flex-wrap md:hidden -mx-2">
        {projects.flatMap((col) => col.items).map((item, idx) => (
          <div key={item.id} className="project-card w-full px-2 mb-4">
            <div className="w-full overflow-hidden">
              {/* pass displayIndex for clean numbering */}
              <ProjectCard item={{ ...item, displayIndex: idx + 1 }} handleClick={handleClick} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ item, handleClick }) => {
  const containerRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    const container = containerRef.current;
    const button = buttonRef.current;

    if (!container || !button) return;

    const moveBtn = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(button, {
        x: x - button.offsetWidth / 2,
        y: y - button.offsetHeight / 2,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    container.addEventListener("mousemove", moveBtn);
    container.addEventListener("mouseleave", () => {
      gsap.to(button, { opacity: 0, duration: 0.3 });
    });
    container.addEventListener("mouseenter", () => {
      gsap.to(button, { opacity: 1, duration: 0.3 });
    });

    return () => {
      container.removeEventListener("mousemove", moveBtn);
    };
  }, []);

  const isVideo = item.src.endsWith(".mov");
  const isComingSoon = item.id === 5 || item.id === 7;

  // ✅ use displayIndex for mobile numbering if available
  const displayNumber = item.displayIndex || item.id;

  return (
    <div className="relative flex flex-col gap-[0.2px] group">
      {/* Flip Text */}
      <div className="relative overflow-hidden h-[1.5rem] md:h-[1.8vw]">
        <p className="absolute inset-0 text-black max-md:px-6 text-[0.65rem] md:text-[0.7vw] tracking-[0.15em] uppercase transition-transform duration-500 group-hover:-translate-y-full">
          {displayNumber} /{" "}
          {isComingSoon
            ? "Coming Soon"
            : item.hasCaseStudy
            ? "View Case Study"
            : "View Project"}
        </p>
        <p className="absolute inset-0 text-black text-[0.65rem] md:text-[0.7vw] tracking-[0.15em] uppercase translate-y-full transition-transform duration-500 group-hover:translate-y-0">
          {item.name}
        </p>
      </div>

      {/* Media Container */}
      <div
        ref={containerRef}
        className="max-md:h-[45vh] md:flex-1 overflow-hidden relative max-md:w-full"
      >
        {isVideo ? (
          <video
            src={item.src}
            className="w-full h-full object-cover object-center md:object-contain"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            src={item.src}
            alt={`project-${item.id}`}
            className="w-full h-full object-cover object-center md:object-contain"
          />
        )}

        {!isVideo && !isComingSoon && (
          <button
            ref={buttonRef}
            onClick={() => handleClick(item)}
            className="absolute top-0 left-0 px-4 py-2 rounded-full text-xs font-semibold text-white backdrop-blur-md bg-white/20 border border-white/30 shadow-md opacity-0 pointer-events-auto"
          >
            View
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectsGrid;
