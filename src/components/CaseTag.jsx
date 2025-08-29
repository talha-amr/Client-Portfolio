import React from "react";

const CaseTag = ({ title }) => {
  return (
    <span className="inline-block px-4 py-1 border-1 border-[#e52222] text-[#e52222] font-semibold rounded-full text-sm">
      {title}
    </span>
  );
};

export default CaseTag;
