import React from 'react'

const Grid = () => {
  return (
    <>
      <section className="min-h-screen bg-white" id="grid">
        <div className="w-full mx-auto md:px:1 lg:px-6 text-[#E52222] relative">
          <div className="work-process">
            {/* Hero text */}
            <div className="flex h-[65vh] flex-row items-center border-b border-[#E52222]">
              <p className="font-black text-[3vw] max-w-[70%] leading-[3.2vw]">
                Work Process<br />
                Every project is unique, so I adapt my approach instead of
                sticking to one fixed process.
              </p>
              <div className="ml-2 animate-float">
                <img
                  src="/Ellipse-55.png"
                  alt="layer-blur"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Grid section */}
            <div className="grid-container">
              <div className="grid-item">
                <h3 className="font-black text-[3vw] max-w-[80%] leading-[3.8vw]">
                  USER CENTERAL DESIGN (UCD)
                </h3>
              </div>
              <div className="grid-item border-s border-[#E52222] span-cols-2">
                <p className="font-light text-[2vw] leading-[2.4vw] max-w-[90%]">
                  When there's enough time and scope, I follow a complete UCD
                  process research, testing, and iteration.
                </p>
              </div>
              <div className="grid-item span-cols-2">
                <p className="font-light text-[2vw] leading-[2.4vw] max-w-[90%]">
                  For fast-moving projects, I use Lean UX to quickly test ideas
                  and refine them.
                </p>
              </div>
              <div className="grid-item border-s border-[#E52222]">
                <h3 className="font-black text-[3vw] max-w-[80%] leading-[3.8vw]">
                  Learn User Experience (UX)
                </h3>
              </div>
              <div className="grid-item">
                <h3 className="font-black text-[3vw] max-w-[80%] leading-[3.8vw]">
                  UI-First Approach
                </h3>
              </div>
              <div className="grid-item border-s border-[#E52222] span-cols-2">
                <p className="font-light text-[2vw] leading-[2.4vw] max-w-[90%]">
                  In tight deadlines, I rely on my experience to design the UI
                  directly, while keeping UX best practices in mind
                </p>
              </div>
            </div>

            {/* Marquee */}
            <div className="w-full overflow-hidden border-b border-[#E52222] h-[17vh] flex items-center marquee-wrapper">
              <div className="flex whitespace-nowrap marquee-container">
                {/* First set */}
                <span className="flex items-center text-[2vw]">
                  <span className="font-black text-[3vw] mx-[3vw] leading-none relative -top-[0.15rem]">
                    •
                  </span>
                  MVP for Startups
                  <span className="font-black text-[3vw] mx-[3vw] leading-none relative -top-[0.15rem]">
                    •
                  </span>
                  User Research
                  <span className="font-black text-[3vw] mx-[3vw] leading-none relative -top-[0.15rem]">
                    •
                  </span>
                  Data-Driven Design
                  <span className="font-black text-[3vw] mx-[3vw] leading-none relative -top-[0.15rem]">
                    •
                  </span>
                  Brand Audit UX/UI
                  <span className="font-black text-[3vw] mx-[3vw] leading-none relative -top-[0.15rem]">
                    •
                  </span>
                  Design System
                </span>

                {/* Second set for seamless loop */}
                <span className="flex items-center text-[2vw]">
                  <span className="font-black text-[3vw] mx-[3vw] leading-none relative -top-[0.15rem]">
                    •
                  </span>
                  MVP for Startups
                  <span className="font-black text-[3vw] mx-[3vw] leading-none relative -top-[0.15rem]">
                    •
                  </span>
                  User Research
                  <span className="font-black text-[3vw] mx-[3vw] leading-none relative -top-[0.15rem]">
                    •
                  </span>
                  Data-Driven Design
                  <span className="font-black text-[3vw] mx-[3vw] leading-none relative -top-[0.15rem]">
                    •
                  </span>
                  Brand Audit UX/UI
                  <span className="font-black text-[3vw] mx-[3vw] leading-none relative -top-[0.15rem]">
                    •
                  </span>
                  Design System
                </span>
              </div>
            </div>

            {/* Projects */}
            <div className="flex h-[50vh] pt-15 justify-start items-center">
              <h1 className="font-black text-[3vw] max-w-[70%] leading-[3.2vw]">
                A selection of projects where I solved real problems and crafted
                user-friendly, impactful designs.
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Grid
