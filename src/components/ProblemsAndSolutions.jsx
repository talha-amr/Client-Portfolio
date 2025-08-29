import React from "react";

const ProblemsAndSolutions = () => {
  const problems = [
    {
      title: "Outdated visuals, no design system, poor consistency",
      impact: "Agents got confused, workflows became slower, and overall trust in the system was low."
    },
    {
      title: "Existing flows were basic but poor UI made them harder",
      impact: "Even simple tasks felt complicated, causing frustration and low adoption."
    },
    {
      title: "No automation in processes",
      impact: "Agents repeated manual work → loss of time, efficiency, and motivation."
    },
    {
      title: "No clear error handling or feedback",
      impact: "Users didn't know what went wrong, leading to confusion, delays, and mistakes."
    },
    {
      title: "Overloaded screens with too many actions",
      impact: "Agents felt overwhelmed and made errors → slower decision-making, dissatisfaction."
    }
  ];

  const solutions = [
    "Built a fresh, modern UI backed by a design system → improved clarity & confidence.",
    "Simplified flows with clear layouts, intuitive navigation, guided steps → easier and faster usage.",
    "Introduced automation (bulk upload, AI-assisted profile creation, smart suggestions) → reduced repetitive work, boosted productivity.",
    "Added real-time feedback, error states, and confirmations → smoother, reliable experience.",
    "Designed minimal, focused screens showing only key actions → reduced clutter, improved focus."
  ];

  return (
    <section className="w-full px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-start">

        {/* Left Column - Problems */}
        <div className="border-r border-black/30 flex flex-col">
          <h2 className="flex items-center justify-start mb-4 pr-6 gap-4">
            <img src="ProblemVector.png" alt="" className="w-5 h-5"/>
            <p className="text-theme-red font-bold text-xl  ">Problems & Impact</p>
          </h2>
          <div className="flex-1">
            {problems.map((problem, index) => (
              <div
                key={index}
                className={`min-h-[120px] w-full ${
                  index !== problems.length - 1 ? "border-b border-black/30" : ""
                }`}
              >
                <div className="py-4 pr-6">
                  <h3 className="text-red-600 font-semibold mb-2">{problem.title}</h3>
                  <p className="text-red-600 text-base">
                    <span className="font-semibold">Impact:</span> {problem.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Solutions */}
        <div className="flex flex-col">
          <h2 className="flex items-center justify-start mb-4 ml-5 gap-4">
            <img src="SolutionVectorr.png" alt="" className="w-5 h-5"/>
            <p className="text-[#07682f] font-bold text-xl  ">Problems & Impact</p>
          </h2>
          <div className="flex-1">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`min-h-[120px] w-full ${
                  index !== solutions.length - 1 ? "border-b border-black/30" : ""
                }`}
              >
                <div className="py-4 pl-6">
                  <p className="text-[#07682f] text-base font-bold">{solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemsAndSolutions;
