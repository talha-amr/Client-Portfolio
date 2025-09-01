import React, { useState, useRef } from "react";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

   const items = [
    {
      title: "Product UX / UI Design",
      content: [
        "User Research & Personas",
        "Wireframing & Prototyping",
        "Journey Mapping & Flows",
        "High-Fidelity UI Design",
        "Design Systems (Creation & Management)",
        "Usability Testing & Iteration",
        "Accessibility Design (WCAG)",
        "Mobile & Web App Interfaces",
        "Product Thinking & UX Audits",
      ],
    },
    {
      title: "Methods",
      content: [
        "Design Thinking",
        "User-Centered Design (UCD)",
        "Usability Testing & A/B Testing",
        "Information Architecture Structuring",
        "Accessibility & Inclusive Design",
      ],
    },
    {
      title: "Development (Basic)",
      content: ["HTML", "CSS", "JavaScript (Basic)"],
    },
  ];

  return (
    <div className="w-full mt-2">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`w-full border-[#E52222] 
              ${index === 0 ? "border-t-2 border-b-2" : "border-b-2"}`}
          >
            {/* Inner padded wrapper */}
            <div className="w-full px-6">
              {/* Header */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full text-left flex justify-between items-center focus:outline-none"
              >
                <div className="flex justify-between items-center w-full">
                  <p className="font-bold text-[1.75vw] text-[#E52222]">
                    {item.title}
                  </p>
                  <p className="font-thin text-[#E52222] text-[4vw]">
                    {isOpen ? "-" : "+"}
                  </p>
                </div>
              </button>

              {/* Content wrapper with measured height */}
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  maxHeight: isOpen
                    ? `${contentRefs.current[index]?.scrollHeight || 0}px`
                    : "0px",
                  paddingTop: isOpen ? "1.5rem" : "0rem",
                  paddingBottom: isOpen ? "1.5rem" : "0rem",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className="text-gray-700 text-[1.5vw]">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-x-32 gap-y-6 w-full">
                    {item.content.map((text, idx) => (
                      <div
                        key={idx}
                        className="text-[1.2vw] text-[#E52222] text-start"
                      >
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
