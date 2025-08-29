import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CaseStudyLayout = () => {
  const processSteps = [
    {
      title: "Understand the Users",
      items: [
        "Quick discovery sessions with stakeholders & agents",
        "Collected pain points (manual work, outdated visuals, poor flows)",
        "Defined primary goals: faster workflows, modern system, easy adoption",
      ],
    },
    {
      title: "Define the Problem",
      items: [
        "Converted findings into clear problem statements",
        "Prioritized issues (automation, consistency, agent usability)",
        "Created quick personas and user journey sketches",
      ],
    },
    {
      title: "Ideate & Sketch",
      items: [
        "Conducted fast brainstorming & sketching workshops",
        "Explored multiple solution approaches in short design sprints",
        "Explored multiple solution approaches in short design sprints",
      ],
    },
    {
      title: "Prototype",
      items: ["Built rapid wireframes and clickable prototypes"],
    },
    {
      title: "Test and Refine",
      items: ["Built rapid wireframes and clickable prototypes"],
    },
    {
      title: "Deliver",
      items: ["Built rapid wireframes and clickable prototypes"],
    },
  ];

  const monkeyRef = useRef(null);

  // GSAP + ScrollTrigger: toggle action version
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#process-steps-container",
        start: "top top",
        end: "bottom bottom",
        toggleActions: "play none none reverse", // play on enter, reverse on leave back
        pin: monkeyRef.current,
        pinSpacing: false,
      },
    });

    tl.fromTo(
      monkeyRef.current,
      { x: "-120%", opacity: 0 },
      { x: "0%", opacity: 1, ease: "power3.out", duration: 0.6 }
    );

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <div className="bg-[#141414] text-white min-h-screen">
      <div className="grid grid-cols-3">
        {/* First row special layout */}
        <div className="col-span-1 relative">
          <img
            src="/CaseStudyPfp.png"
            alt="Profile Case Study"
            className="w-full h-full object-cover sticky top-0"
          />
        </div>
        <div className="col-span-2 flex flex-col justify-center px-16 py-20 bg-[#141414] border-l border-[#7b7b7b]/20">
          <h1 className="text-4xl font-bold text-[#e62222] mb-6">Design Process</h1>
          <p className="text-[#7b7b7b] leading-relaxed text-lg max-w-2xl">
            Our design process followed a structured approach — starting from
            understanding user needs, defining the key problems, ideating with
            rapid sketches, and finally building interactive prototypes. Each step
            was focused on balancing usability, efficiency, and scalability while
            keeping agents' workflows at the center.
          </p>
        </div>

        {/* Right side: process steps */}
        <div className="col-span-3 grid grid-cols-3 relative" id="process-steps-container">
          {/* LEFT column (spacing) - monkey will be positioned here absolutely */}
          <div className="col-span-1 relative">
            <img
              ref={monkeyRef}
              src="/PoppingMonkey.png"
              alt="Popping Monkey"
              className="absolute top-24 left-0 w-[220px] z-50 pointer-events-none"
              style={{ transform: "translateX(-120%)", opacity: 0 }}
            />
          </div>

          <div className="col-span-2 flex flex-col">
            {processSteps.map((step, index) => {
              const isRed = index === 1;

              return (
                <div
                  key={index}
                  className={`min-h-[50vh] flex flex-col justify-center px-16 py-12 
                    border-[#7b7b7b]/20 
                    ${index === 0 ? "" : "border-t"} `}
                >
                  <h2
                    className={`text-3xl font-bold mb-8 ${
                      isRed ? "text-[#e62222]" : "text-[#7b7b7b]"
                    }`}
                  >
                    {step.title}
                  </h2>
                  <ul className="space-y-4">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className={`mr-3 ${isRed ? "text-[#e62222]" : "text-[#7b7b7b]"}`}>
                          •
                        </span>
                        <span className={`leading-relaxed ${isRed ? "text-[#e62222]" : "text-[#7b7b7b]"}`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyLayout;
