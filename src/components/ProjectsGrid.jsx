import React from "react";
import { useNavigate } from "react-router-dom";

const projects = [
  // row 1 → col-4 | col-2 | col-2 (two stacked images)
  { span: 4, items: [{ id: 1, src: "/image-1.png", name: "ABN Global", hasCaseStudy: true }] },
  { span: 2, items: [{ id: 2, src: "/image-grid-2.png", name: "PixelCraft", hasCaseStudy: false }] },
  { span: 2, items: [{ id: 3, src: "/image-grid-3.png", name: "Skyline UI", hasCaseStudy: false }] },

  // row 2 → col-2 (stacked) | col-2 | col-4
  {
    span: 2,
    items: [
      { id: 4, src: "/image-grid-4.png", name: "FlowBank", hasCaseStudy: false },
      { id: 7, src: "/image-grid-5.png", name: "NextPay", hasCaseStudy: false }, // force ID 7
    ],
  },
  { span: 2, items: [{ id: 5, src: "/image-grid-6.png", name: "NeuroTech", hasCaseStudy: false }] },
  { span: 4, items: [{ id: 6, src: "/image-grid-7.png", name: "WaveMedia", hasCaseStudy: true }] },

  // row 3 → col-2 | col-4 | col-2
  { span: 2, items: [{ id: 8, src: "/image-grid-8.png", name: "OrbitPay", hasCaseStudy: false }] },
  { span: 4, items: [{ id: 9, src: "/image-grid-9.png", name: "EcoBuild", hasCaseStudy: true }] },
  { span: 2, items: [{ id: 10, src: "/image-grid-10.png", name: "Zenith Health", hasCaseStudy: false }] },
];

const ProjectsGrid = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    if (id === 1) navigate("/caseStudy");
  };

  return (
    <div className="w-full">
      <p className="text-theme-red text-4xl py-10">SELECT WORK</p>

      <div className="grid min-h-[90vh] grid-cols-8 gap-x-4 gap-y-18 w-full py-3">
        {projects.map((p, idx) => (
          <div
            key={idx}
            className={`col-span-${p.span} flex flex-col ${
              p.items.length > 1 ? "justify-between" : "gap-2"
            }`}
          >
            {p.items.map((item) => (
              <div key={item.id} className="flex flex-col gap-2 group cursor-pointer">
                {/* Flip Text */}
                <div className="relative h-6 overflow-hidden">
                  <p className="absolute inset-0 text-black text-xs tracking-[0.15em] transition-transform duration-500 group-hover:-translate-y-6">
                    {item.id} / {item.hasCaseStudy ? "View Case Study" : "View Project"}
                  </p>
                  <p className="absolute inset-0 text-black text-xs tracking-[0.15em] translate-y-6 transition-transform duration-500 group-hover:translate-y-0">
                    {item.name}
                  </p>
                </div>

                {/* Image */}
                <img
                  src={item.src}
                  alt={`project-${item.id}`}
                  className="w-full object-contain"
                  onClick={() => handleClick(item.id)}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsGrid;
