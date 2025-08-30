import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    ],
  },
  {
    title: "Prototype",
    items: ["Built rapid wireframes and clickable prototypes"],
  },
  {
    title: "Test & Refine",
    items: [
      "Shared prototype with selected agents & managers",
      "Gathered instant feedback via quick usability checks",
    ],
  },
  {
    title: "Deliver",
    items: [
      "Iterated small fixes immediately due to time limits",
      "Handoff with clean documentation & assets to developers",
    ],
  },
];

const CaseStudyLayout = () => {
  const monkeyRef = useRef(null);
  const stepsRef = useRef([]);
  const [activeStep, setActiveStep] = useState(null);
  const introRef = useRef(null);

  // GSAP + ScrollTrigger: monkey animation
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#process-steps-container",
        start: "-5% top",
        end: "bottom 75%",
        toggleActions: "play none none reverse",
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

  // ScrollTrigger for active steps including intro
  useEffect(() => {
    if (introRef.current) {
      ScrollTrigger.create({
        trigger: introRef.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveStep(-1),
        onEnterBack: () => setActiveStep(-1),
      });
    }

    stepsRef.current.forEach((stepEl, index) => {
      ScrollTrigger.create({
        trigger: stepEl,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveStep(index),
        onEnterBack: () => setActiveStep(index),
      });
    });

    ScrollTrigger.refresh();
    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  return (
    <div className="bg-[#141414] text-white min-h-screen grid grid-cols-3 auto-rows-min">
      {/* Left: Profile Image */}
      <div className="col-span-1 row-span-2 relative">
        <img
          src="/CaseStudyPfp.png"
          alt="Profile Case Study"
          className="w-full h-full object-contain sticky top-0"
        />
      </div>

      {/* Intro Section */}
      <div
        ref={introRef}
        className="col-span-2 row-span-2 flex flex-col justify-center px-16 py-32 border-l border-[#7b7b7b]/20"
      >
        <h1
          className={`text-[3.85vw] font-bold mb-8 leading-none ${
            activeStep === -1 ? "text-[#e62222]" : "text-[#7b7b7b]"
          }`}
        >
          Design Process
        </h1>
        <p
          className={`text-[2vw] leading-tight text-[#7b7b7b] max-w-[80%] ${
            activeStep === -1 ? "text-[#e62222]" : "text-[#7b7b7b]"
          }`}
        >
          Our design process followed a structured approach — starting from
          understanding user needs, defining the key problems, ideating with
          rapid sketches, and finally building interactive prototypes. Each step
          was focused on balancing usability, efficiency, and scalability while
          keeping agents' workflows at the center.
        </p>
      </div>

      {/* Monkey */}
      <div className="col-span-1 relative">
        <img
          ref={monkeyRef}
          src="/PoppingMonkey.png"
          alt="Popping Monkey"
          className="absolute top-0 left-0 w-[220px] z-50 pointer-events-none"
          style={{ transform: "translateX(-120%)", opacity: 0 }}
        />
      </div>

      {/* Steps */}
      <div
        className="col-span-2 flex flex-col border-l border-[#7b7b7b]/20"
        id="process-steps-container"
      >
        {processSteps.map((step, index) => (
          <div
            key={index}
            ref={(el) => (stepsRef.current[index] = el)}
            className="min-h-[30vh] flex flex-col justify-center px-16 py-12 border-t border-[#7b7b7b]/20"
          >
            <h2
              className={`text-[3vw] font-bold mb-4 ${
                activeStep === index ? "text-[#e62222]" : "text-[#7b7b7b]"
              }`}
            >
              {step.title}
            </h2>
                      <ul className="space-y-3">
            {step.items.map((item, i) => (
              <li
                key={i}
                className={`flex items-center ${
                  activeStep === index ? "text-[#e62222]" : "text-[#7b7b7b]"
                }`}
              >
                {/* Bigger bullet with fixed width for alignment */}
                <span className="mr-4 text-[2vw] leading-none w-[2vw] flex justify-center">
                  •
                </span>
                <span className="leading-none text-[1.5vw] max-w-[70ch]">{item}</span>
              </li>
            ))}
          </ul>

          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudyLayout;
