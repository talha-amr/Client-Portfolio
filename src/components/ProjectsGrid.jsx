import React from "react";
import { useNavigate } from "react-router-dom";

// Helper so Tailwind doesn't purge dynamic col-span classes
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
  { span: 2, items: [{ id: 5, src: "/Work-video.mov", name: "RozeeGPT Seeker App", hasCaseStudy: false, link: "" }] },
  { span: 4, items: [{ id: 6, src: "/image-grid-7.png", name: "PRC Consultin", hasCaseStudy: false, link: "https://www.prcksa.com" }] },

  { span: 2, items: [{ id: 8, src: "/image-grid-8.png", name: "RIZQ Dashboard Redesign", hasCaseStudy: false, link: "" }] },
  { span: 4, items: [{ id: 9, src: "/image-grid-9.png", name: "Food App", hasCaseStudy: false, link: "" }] },
  { span: 2, items: [{ id: 10, src: "/image-grid-10.png", name: "Lahori Burger", hasCaseStudy: false, link: "" }] },
];

const ProjectsGrid = () => {
  const navigate = useNavigate();

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
            {col.items.map((item) => (
              <div key={item.id} className="relative flex flex-col gap-[0.2px] group">
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
                      className="w-full h-full object-contain"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img src={item.src} alt={`project-${item.id}`} className="w-full h-full object-contain" />
                  )}

                  {/* Glass Button (only visible on hover) */}
                  <button
                    onClick={() => handleClick(item)}
                    className="absolute bottom-3 right-3 px-4 py-2 rounded-full text-xs font-semibold 
                               text-white backdrop-blur-md bg-white/20 border border-white/30 shadow-md
                               opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out
                               hover:bg-white/30"
                  >
                    →
                  </button>
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
