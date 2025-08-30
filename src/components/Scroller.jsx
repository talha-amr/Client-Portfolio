import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const spanClass = (span) => (span === 4 ? "col-span-4" : "col-span-2");

const projects = [
  { span: 4, items: [{ id: 1, src: "/image-1.png", name: "ABN Global", hasCaseStudy: true, link: "" }] },
  { span: 2, items: [{ id: 2, src: "/image-grid-2.png", name: "Otomayt.ai", hasCaseStudy: false, link: "http://otomayt.ai" }] },
  { span: 2, items: [{ id: 3, src: "/image-grid-3.png", name: "Rizq Financial App", hasCaseStudy: true, link: "" }] },
  {
    span: 2,
    items: [
      { id: 4, src: "/image-grid-4.png", name: "ABurger", hasCaseStudy: false, link: "" },
      { id: 7, src: "/image-grid-5.png", name: "RIZQ HRMS", hasCaseStudy: false, link: "" },
    ],
  },
  { span: 2, items: [{ id: 5, src: "/Work-video.mov", name: "RozeeGPT Seeker App", hasCaseStudy: false }] },
  { span: 4, items: [{ id: 6, src: "/image-grid-7.png", name: "PRC Consultin", hasCaseStudy: false, link: "https://www.prcksa.com" }] },
  { span: 2, items: [{ id: 8, src: "/image-grid-8.png", name: "RIZQ Dashboard Redesign", hasCaseStudy: false, link: "" }] },
  { span: 4, items: [{ id: 9, src: "/image-grid-9.png", name: "Food App", hasCaseStudy: false }] },
  { span: 2, items: [{ id: 10, src: "/image-grid-10.png", name: "Lahori Burger", hasCaseStudy: false }] },
];

const ProjectsGrid = () => {
  const navigate = useNavigate();
  const cardRefs = useRef([]);
  const btnRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      const btn = btnRefs.current[i];
      if (!card || !btn) return;

      const move = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.to(btn, {
          x: x - rect.width / 2,
          y: y - rect.height / 2,
          duration: 0.3,
          ease: "power3.out",
        });
      };

      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.3, ease: "power3.out" });
      });

      return () => card.removeEventListener("mousemove", move);
    });
  }, []);

  const handleClick = (item) => {
    if (item.hasCaseStudy) {
      navigate("/caseStudy");
    } else if (item.link) {
      window.open(item.link, "_blank");
    } else {
      window.open("https://www.behance.net/bluecladesigne", "_blank");
    }
  };

  return (
    <div className="w-full">
      <p className="text-theme-red text-4xl py-10">SELECT WORK</p>

      <div className="grid min-h-[90vh] grid-cols-8 gap-x-4 gap-y-18 w-full py-3">
        {projects.map((col, idx) => (
          <div
            key={idx}
            className={`${spanClass(col.span)} flex flex-col ${
              col.items.length > 1 ? "justify-between" : "gap-2"
            }`}
          >
            {col.items.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => (cardRefs.current[item.id] = el)}
                className="relative flex flex-col gap-[0.2px] group"
              >
                {/* Flip Text */}
                <div className="relative h-6 overflow-hidden">
                  <p className="absolute inset-0 text-black text-[0.7vw] tracking-[0.15em] uppercase transition-transform duration-500 group-hover:-translate-y-6">
                    {item.id} / {item.hasCaseStudy ? "View Case Study" : "View Project"}
                  </p>
                  <p className="absolute inset-0 text-black text-[0.7vw] tracking-[0.15em] uppercase translate-y-6 transition-transform duration-500 group-hover:translate-y-0">
                    {item.name}
                  </p>
                </div>

                {/* Media */}
                <div className="flex-1 overflow-hidden relative">
                  {item.src.endsWith(".mov") ? (
                    <video
                      src={item.src}
                      className="w-full h-full object-contain cursor-pointer"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <>
                      <img
                        src={item.src}
                        alt={`project-${item.id}`}
                        className="w-full h-full object-contain cursor-pointer"
                      />
                      {/* Glass Magnetic Button */}
                      <div
                        ref={(el) => (btnRefs.current[item.id] = el)}
                        className="absolute top-1/2 left-1/2 opacity-0 group-hover:opacity-100 
                          pointer-events-none transition-opacity duration-300"
                        style={{ transform: "translate(-50%, -50%)" }}
                      >
                        <button
                          onClick={() => handleClick(item)}
                          className="w-16 h-16 flex items-center justify-center rounded-full 
                          bg-white/20 backdrop-blur-md border border-white/40 text-white 
                          text-xs font-semibold shadow-lg"
                        >
                          VIEW
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsGrid;
