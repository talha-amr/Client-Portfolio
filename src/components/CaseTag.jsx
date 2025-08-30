import React from "react";

const CaseTag = ({ title }) => {
  return (
    <span className="inline-block px-[1.1vw] py-[.7vw] border-1 border-[#e52222] text-[#e52222] font-regular rounded-full text-[1.2vw]">
      {title}
    </span>
  );
};

export default CaseTag;
