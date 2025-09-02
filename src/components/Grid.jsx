import React from 'react'

const Grid = () => {
  return (
    <>
      <section className="min-h-screen bg-white" id="grid">
        <div className="w-full mx-auto px-6 text-[#E52222] relative">
          <div className="work-process">
            {/* Hero text - Mobile Version */}
            <div className="flex md:hidden h-auto py-12 flex-col items-center text-start ">
              <p className="font-black text-3xl leading-tight">
                Work Process<br />
                Every project is unique, so I adapt my approach instead of
                sticking to one fixed process.
              </p>
            </div>

            {/* Hero text - Desktop Version (unchanged) */}
            <div className="hidden md:flex h-[65vh] flex-row items-center border-b border-[#E52222]">
              <p className="font-black text-[3.5vw] max-w-[70%] leading-[3.2vw]">
                Work Process<br />
                Every project is unique, so I adapt my approach instead of
                sticking to one fixed process.
              </p>
              <div className="mr-5 animate-float hidden md:block">
                <img
                  src="/Ellipse-55.png"
                  alt="layer-blur"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Mobile Process Steps */}
            <div className="md:hidden px-0">
              <div className="py-8 border-b border-[#E52222]">
                <h3 className="font-black text-xl uppercase mb-4">
                  USER CENTRAL DESIGN (UCD)
                </h3>
                <p className="font-light text-base leading-relaxed">
                  When there's enough time and scope, I follow a complete UCD
                  process research, testing, and iteration.
                </p>
              </div>
              
              <div className="py-8 border-b border-[#E52222]">
                <h3 className="font-black text-xl uppercase mb-4">
                  Learn User Experience (UX)
                </h3>
                <p className="font-light text-base leading-relaxed">
                  For fast-moving projects, I use Lean UX to quickly test ideas
                  and refine them.
                </p>
              </div>
              
              <div className="py-8 ">
                <h3 className="font-black text-xl uppercase mb-4">
                  UI-First Approach
                </h3>
                <p className="font-light text-base leading-relaxed">
                  In tight deadlines, I rely on my experience to design the UI
                  directly, while keeping UX best practices in mind
                </p>
              </div>
            </div>

            {/* Desktop Grid section (unchanged) */}
            <div className="grid-container hidden md:block mobile-hide">
              <div className="grid-item">
                <h3 className="font-black text-[3.3vw] max-w-[80%] leading-[3.8vw] uppercase">
                  USER CENTRAL DESIGN (UCD)
                </h3>
              </div>
              <div className="grid-item border-s border-[#E52222] span-cols-2">
                <p className="font-light text-[2.3vw] leading-[2.4vw] max-w-[90%]">
                  When there's enough time and scope, I follow a complete UCD
                  process research, testing, and iteration.
                </p>
              </div>
              <div className="grid-item span-cols-2">
                <p className="font-light text-[2.3vw] leading-[2.4vw] max-w-[90%]">
                  For fast-moving projects, I use Lean UX to quickly test ideas
                  and refine them.
                </p>
              </div>
              <div className="grid-item border-s border-[#E52222]">
                <h3 className="font-black text-[3.3vw] max-w-[80%] leading-[3.8vw] uppercase">
                  Learn User Experience (UX)
                </h3>
              </div>
              <div className="grid-item">
                <h3 className="font-black text-[3.3vw] max-w-[80%] leading-[3.8vw] uppercase">
                  UI-First Approach
                </h3>
              </div>
              <div className="grid-item border-s border-[#E52222] span-cols-2">
                <p className="font-light text-[2.3vw] leading-[2.4vw] max-w-[90%]">
                  In tight deadlines, I rely on my experience to design the UI
                  directly, while keeping UX best practices in mind
                </p>
              </div>
            </div>

            {/* Mobile Marquee */}


            {/* Desktop Marquee (unchanged) */}
            <div className="hidden md:flex w-full overflow-hidden border-b border-[#E52222] h-[17vh] items-center marquee-wrapper">
              <div className="flex whitespace-nowrap marquee-container">
                {/* First set */}
                <span className="flex items-center text-[2.3vw]">
                  <span className="font-black text-[3vw] mx-[5vw] leading-none relative -top-[0.15rem]">
                    •
                  </span>
                  MVP for Startups
                  <span className="font-black text-[3vw] mx-[5vw] leading-none relative -top-[0.15rem]">
                    •
                  </span>
                  User Research
                  <span className="font-black text-[3vw] mx-[5vw] leading-none relative -top-[0.15rem]">
                    •
                  </span>
                  Data-Driven Design
                  <span className="font-black text-[3vw] mx-[5vw] leading-none relative -top-[0.15rem]">
                    •
                  </span>
                  Brand Audit UX/UI
                  <span className="font-black text-[3vw] mx-[5vw] leading-none relative -top-[0.15rem]">
                    •
                  </span>
                  Design System
                </span>

                {/* Second set for seamless loop */}
                <span className="flex items-center text-[2vw]">
                  <span className="font-black text-[3vw] mx-[5vw] leading-none relative -top-[0.15rem]">
                    •
                  </span>
                  MVP for Startups
                  <span className="font-black text-[3vw] mx-[5vw] leading-none relative -top-[0.15rem]">
                    •
                  </span>
                  User Research
                  <span className="font-black text-[3vw] mx-[5vw] leading-none relative -top-[0.15rem]">
                    •
                  </span>
                  Data-Driven Design
                  <span className="font-black text-[3vw] mx-[5vw] leading-none relative -top-[0.15rem]">
                    •
                  </span>
                  Brand Audit UX/UI
                  <span className="font-black text-[3vw] mx-[5vw] leading-none relative -top-[0.15rem]">
                    •
                  </span>
                  Design System
                </span>
              </div>
            </div>

      

            {/* Desktop Projects (unchanged) */}
            <div className="hidden md:flex h-[50vh] pt-15 justify-start items-center">
              <h1 className="font-black text-[3vw] max-w-[70%] leading-[3.2vw]">
                A selection of projects where I solved real problems and crafted
                user-friendly, impactful designs.
              </h1>
            </div>
          </div>
        </div>
                    <div className="md:hidden w-full overflow-hidden border-y border-[#E52222] h-20 flex items-center marquee-wrapper text-theme-red">
              <div className="flex whitespace-nowrap marquee-container">
                {/* First set */}
                <span className="flex items-center text-lg">
                  <span className="font-black text-xl mx-7 leading-none relative -top-0">
                    •
                  </span>
                  MVP for Startups
                  <span className="font-black text-xl mx-7 leading-none relative -top-0">
                    •
                  </span>
                  User Research
                  <span className="font-black text-xl mx-7 leading-none relative -top-0">
                    •
                  </span>
                  Data-Driven Design
                  <span className="font-black text-xl mx-7 leading-none relative -top-0">
                    •
                  </span>
                  Brand Audit UX/UI
                  <span className="font-black text-xl mx-7 leading-none relative -top-0">
                    •
                  </span>
                  Design System
                </span>

                {/* Second set for seamless loop */}
                <span className="flex items-center text-lg">
                  <span className="font-black text-xl mx-7 leading-none relative -top-0">
                    •
                  </span>
                  MVP for Startups
                  <span className="font-black text-xl mx-7 leading-none relative -top-0">
                    •
                  </span>
                  User Research
                  <span className="font-black text-xl mx-7 leading-none relative -top-0">
                    •
                  </span>
                  Data-Driven Design
                  <span className="font-black text-xl mx-7 leading-none relative -top-0">
                    •
                  </span>
                  Brand Audit UX/UI
                  <span className="font-black text-xl mx-7 leading-none relative -top-0">
                    •
                  </span>
                  Design System
                </span>
              </div>
            </div>
      </section>
    </>
  )
}

export default Grid