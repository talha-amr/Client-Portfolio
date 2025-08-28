import React, { useState } from "react";

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="w-full mx-auto border-b-2 border-[#E52222]">
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full text-left py-3 flex justify-between items-center focus:outline-none"
      >
        <div className="flex justify-between items-center w-full">
          <span
            className={`font-bold text-2xl text-[#E52222] transition-transform duration-300 
              `}
          >
            {title}
          </span>
          <span className="text-5xl font-thin text-[#E52222]">{isOpen ? "-" : "+"}</span>
        </div>
      </button>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-800 ease-none`}
        style={{ maxHeight: isOpen ? "600px" : "0px" }}
      >
        <div className="py-6 text-gray-700 text-lg">
          {/* ✅ Grid Layout for Content */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-32 gap-y-6  w-full">
  {content.map((text, idx) => (
    <div
      key={idx}
      className="text-base text-[#E52222] text-start"
    >
      {text}
    </div>
  ))}
</div>
        </div>
      </div>
    </div>
  );
};

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const defaultItems = [
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
        "Product Thinking & UX Audits"
      ],
    },
    {
      title: "Methods",
      content: [
        "Design Thinking",
        "User-Centered Design (UCD)",
        "Usability Testing & A/B Testing",
        "Information Architecture Structuring",
        "Accessibility & Inclusive Design"
      ],
    },
    {
      title: "Development (Basic)",
      content: [
        "HTML",
        "CSS",
        "JavaScript (Basic)"
      ],
    },
  ];

  const accordionItems = items || defaultItems;

  return (
    <div className="w-full mt-2">
      {accordionItems.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
