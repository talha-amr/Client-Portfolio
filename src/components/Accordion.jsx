import React, { useState } from "react";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

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
            className="w-full mx-auto border-b-2 border-[#E52222]"
          >
            {/* Header */}
            <button
              onClick={() =>
                setOpenIndex(isOpen ? null : index)
              }
              className="w-full text-left py-1 2xl:py-2 flex justify-between items-center focus:outline-none"
            >
              <div className="flex justify-between items-center w-full">
                <p
                  className="font-bold text-[2vw] text-[#E52222] transition-transform duration-300"
                >
                  {item.title}
                </p>
                <p className="font-thin text-[#E52222] text-[4vw]">
                  {isOpen ? "-" : "+"}
                </p>
              </div>
            </button>

            {/* Content */}
            <div
              className={`overflow-hidden transition-all duration-800 ease-none`}
              style={{ maxHeight: isOpen ? "70vh" : "0vh" }}
            >
              <div className="py-6 text-gray-700 text-[1.2vw]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-32 gap-y-6 w-full">
                  {item.content.map((text, idx) => (
                    <div
                      key={idx}
                      className="text-[1vw] text-[#E52222] text-start"
                    >
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
