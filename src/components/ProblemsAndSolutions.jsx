import React from "react";

const ProblemsAndSolutions = () => {
  const problems = [
    {
      title: "Outdated visuals, no design system, poor consistency",
      impact:
        "Agents got confused, workflows became slower, and overall trust in the system was low.",
    },
    {
      title: "Existing flows were basic but poor UI made them harder",
      impact:
        "Even simple tasks felt complicated, causing frustration and low adoption.",
    },
    {
      title: "No automation in processes",
      impact:
        "Agents repeated manual work → loss of time, efficiency, and motivation.",
    },
    {
      title: "No clear error handling or feedback",
      impact:
        "Users didn't know what went wrong, leading to confusion, delays, and mistakes.",
    },
    {
      title: "Overloaded screens with too many actions",
      impact:
        "Agents felt overwhelmed and made errors → slower decision-making, dissatisfaction.",
    },
  ];

  const solutions = [
    "Built a fresh, modern UI backed by a design system → improved clarity & confidence.",
    "Simplified flows with clear layouts, intuitive navigation, guided steps → easier and faster usage.",
    "Introduced automation (bulk upload, AI-assisted profile creation, smart suggestions) → reduced repetitive work, boosted productivity.",
    "Added real-time feedback, error states, and confirmations → smoother, reliable experience.",
    "Designed minimal, focused screens showing only key actions → reduced clutter, improved focus.",
  ];

  return (
    <section className="w-full px-6 py-20">
      {/* Headings */}
      <div className="grid grid-cols-2 mb-6">
        <h2 className="flex items-center gap-4 pr-6">
          <img src="ProblemVector.png" alt="" className="w-[2vw] h-[2vw]" />
          <p className="text-theme-red font-bold text-[2vw]">
            Problems & Impact
          </p>
        </h2>
        <h2 className="flex items-center gap-4 pl-6">
          <img src="SolutionVectorr.png" alt="" className="w-[2vw] h-[2vw]" />
          <p className="text-[#07682f] font-bold text-[2vw]">Solutions</p>
        </h2>
      </div>

      {/* Rows with equal heights */}
      <div className="grid grid-cols-2 divide-x divide-black/30">
        {problems.map((problem, index) => (
          <React.Fragment key={index}>
            {/* Problem cell */}
            <div
              className={`flex flex-col justify-center pr-6 py-8 border-b border-black/30 ${
                index === problems.length - 1 ? "border-b-0" : ""
              }`}
            >
              <h3 className="text-red-600 font-semibold mb-3 text-[1.3vw]">
                {problem.title}
              </h3>
              <p className="text-red-600 text-[1.1vw] leading-snug">
                <span className="font-semibold">Impact:</span> {problem.impact}
              </p>
            </div>

            {/* Solution cell */}
            <div
              className={`flex flex-col justify-center pl-6 py-8 border-b border-black/30 ${
                index === problems.length - 1 ? "border-b-0" : ""
              }`}
            >
              <p className="text-[#07682f] text-[1.2vw] font-semibold leading-snug">
                {solutions[index]}
              </p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default ProblemsAndSolutions;
