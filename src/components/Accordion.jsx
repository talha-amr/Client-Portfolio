import React, { useState } from "react";

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="w-full border-b border-[#E52222]">
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full text-left py-6 flex justify-between items-center focus:outline-none"
      >
        <div className="container mx-auto md:px-1 lg:px-6 flex justify-between items-center">
          <span
            className={`font-bold text-2xl text-[#E52222] transition-transform duration-300 ${
              isOpen ? "scale-105 border-b-2 border-[#E52222]" : ""
            }`}
          >
            {title}
          </span>
          <span className="text-2xl text-[#E52222]">{isOpen ? "-" : "+"}</span>
        </div>
      </button>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out`}
        style={{ maxHeight: isOpen ? "400px" : "0px" }}
      >
        <div className="container mx-auto md:px-1 lg:px-6 py-6 text-gray-700 text-lg">
          {content}
        </div>
      </div>
    </div>
  );
};

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const defaultItems = [
    { title: "Product UX / UI Design", content: "Content for the first item" },
    { title: "Methods", content: "Content for the second item" },
    { title: "Development (Basic)", content: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nemo quos ex molestias et eos nostrum dolor harum cum iste maiores culpa minus delectus debitis quaerat error numquam, temporibus saepe?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eveniet quisquam harum, exercitationem neque omnis alias assumenda, quia quas corrupti atque. Nihil, ullam corrupti." },
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
