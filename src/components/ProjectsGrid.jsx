import React from "react";
import { useNavigate } from "react-router-dom";

// Helper so Tailwind doesn't purge dynamic col-span classes
const spanClass = (span) => (span === 4 ? "col-span-4" : "col-span-2");

const projects = [
  // Row 1 → 4 | 2 | 2
  { span: 4, items: [{ id: 1, src: "/image-1.png",   name: "ABN Global",     hasCaseStudy: true  }] },
  { span: 2, items: [{ id: 2, src: "/image-grid-2.png", name: "PixelCraft",    hasCaseStudy: false }] },
  { span: 2, items: [{ id: 3, src: "/image-grid-3.png", name: "Skyline UI",    hasCaseStudy: false }] },

  // Row 2 → 2 (stacked) | 2 | 4
  {
    span: 2,
    items: [
      { id: 4, src: "/image-grid-4.png", name: "FlowBank", hasCaseStudy: false },
      { id: 7, src: "/image-grid-5.png", name: "NextPay",  hasCaseStudy: false }, // forced ID = 7
    ],
  },
  { span: 2, items: [{ id: 5, src: "/Work-video.mov", name: "NeuroTech",     hasCaseStudy: false }] },
  { span: 4, items: [{ id: 6, src: "/image-grid-7.png", name: "WaveMedia",     hasCaseStudy: true  }] },

  // Row 3 → 2 | 4 | 2  (IDs 8, 9, 10)
  { span: 2, items: [{ id: 8,  src: "/image-grid-8.png",  name: "OrbitPay",      hasCaseStudy: false }] },
  { span: 4, items: [{ id: 9,  src: "/image-grid-9.png",  name: "EcoBuild",      hasCaseStudy: true  }] },
  { span: 2, items: [{ id: 10, src: "/image-grid-10.png", name: "Zenith Health", hasCaseStudy: false }] },
];

const ProjectsGrid = () => {
  const navigate = useNavigate();

  const handleClick = (id, hasCaseStudy) => {
    // keep your current behavior: only open case study for id 1
    if (id === 1 && hasCaseStudy) navigate("/caseStudy");
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
              <div key={item.id} className="flex flex-col gap-[0.2px] group">
                {/* Flip Text (default -> view..., hover -> project name) */}
                <div className="relative h-6 overflow-hidden">
                  <p className="absolute inset-0 text-black text-[0.7vw] tracking-[0.15em] uppercase transition-transform duration-500 group-hover:-translate-y-6">
                    {item.id} / {item.hasCaseStudy ? "View Case Study" : "View Project"}
                  </p>
                  <p className="absolute inset-0 text-black text-[0.7vw] tracking-[0.15em] uppercase translate-y-6 transition-transform duration-500 group-hover:translate-y-0">
                    {item.name}
                  </p>
                </div>

                {/* Media wrapper keeps heights stable */}
                <div className="flex-1 overflow-hidden">
                  {item.src.endsWith(".mov") ? (
                    <video
                      src={item.src}
                      className="w-full h-full object-contain cursor-pointer"
                      autoPlay
                      loop
                      muted
                      playsInline
                      onClick={() => handleClick(item.id, item.hasCaseStudy)}
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={`project-${item.id}`}
                      className="w-full h-full object-contain cursor-pointer"
                      onClick={() => handleClick(item.id, item.hasCaseStudy)}
                    />
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
