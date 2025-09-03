import React from 'react'
import Navbar from '../components/NavBar'
import Accordion from '../components/Accordion'
import Footer from '../components/Footer'

const Experience = () => {
    return (
        <section className="min-h-dvh w-screen">
            <Navbar activePage={"experience"} />

            {/* Container for all except Accordion + Marquee */}
            <div className="w-full px-6">
                {/* Top Section */}
                <div className="py-[6vw] max-md:py-25">
                    <div className="flex flex-col max-md:gap-8 w-full justify-start items-start gap-0">
                        <p className="font-medium max-w-[27%] max-md:max-w-[70%] text-theme-red text-[0.9vw] max-md:text-[0.9rem] leading-tight">
                            In this role, I lead the design team and focus on creating user-centered and business-driven product experiences. My work involves conducting UX audits, building scalable design systems, collaborating with stakeholders, and ensuring design consistency across both small and large-scale digital products.
                        </p>

                        <div className="w-[25%] max-md:w-[60%] self-end max-md:self-start flex flex-col gap-3">
                            <img
                                src="/portfoliopic-zubair.jpg"
                                alt=""
                                className="w-full h-full object-contain"
                            />
                            <div className="hidden md:flex items-center gap-2 self-end max-md:self-start ">
                                <img
                                    src="/OnlineSymbol.png"
                                    alt=""
                                    className="w-[0.9vw] max-md:w-[1rem]"
                                />
                                <p className="uppercase text-[#178243] text-[0.9vw] max-md:text-[0.9rem] ">
                                    open to work
                                </p>
                            </div>
                        </div>

                        <div>
                            <p className="text-theme-red uppercase text-[1.2vw] max-md:text-[1rem] max-md:font-bold leading-none">
                                Currently, I’m working at Rozee.pk / RozeeGPT
                            </p>

                            <p className="text-[8.1vw] max-md:text-[3.7rem] max-md:mt-1 font-black text-theme-red uppercase tracking-tight leading-none">
                                Lead UX/UI Designer
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Accordion */}
            <div className="py-[6vw] max-md:pb-12">
                <Accordion />
            </div>

            {/* Marquee */}
            <div className="py-[6vw] max-md:pb-12">
                <div className="bg-black w-full min-h-[30vh] max-md:min-h-[9rem] flex flex-col">
                    {/* Top Partition */}
                    <div className="container w-full px-6 flex flex-1 justify-center items-center border-b border-white/30">
                        <p className="w-full text-center font-bold text-white text-[1.5vw] max-md:text-[1rem] leading-none">
                            I’ve been in various industries and domains. Working with design
                        </p>
                    </div>

                    {/* Bottom Partition */}
                    <div className="flex flex-1 justify-center items-center">
                        <div className="w-full px-35 max-md:px-4">
                            <div className="w-full overflow-hidden h-full flex items-center marquee-wrapper text-white">
                                <div className="flex whitespace-nowrap marquee-container">
                                    {/* First set */}
                                    <span className="flex items-center text-[1.3vw] max-md:text-[1rem]">
                                        <span className="font-black text-[2vw] max-md:text-[1.5rem] mx-[3vw] max-md:mx-[1rem] leading-none relative -top-[0.15rem]">
                                            •
                                        </span>
                                        SaaS
                                        <span className="font-black text-[2vw] max-md:text-[1.5rem] mx-[3vw] max-md:mx-[1rem] leading-none relative -top-[0.15rem]">
                                            •
                                        </span>
                                        HRMS
                                        <span className="font-black text-[2vw] max-md:text-[1.5rem] mx-[3vw] max-md:mx-[1rem] leading-none relative -top-[0.15rem]">
                                            •
                                        </span>
                                        Job Search
                                        <span className="font-black text-[2vw] max-md:text-[1.5rem] mx-[3vw] max-md:mx-[1rem] leading-none relative -top-[0.15rem]">
                                            •
                                        </span>
                                        B2B
                                        <span className="font-black text-[2vw] max-md:text-[1.5rem] mx-[3vw] max-md:mx-[1rem] leading-none relative -top-[0.15rem]">
                                            •
                                        </span>
                                        FinTech
                                        <span className="font-black text-[2vw] max-md:text-[1.5rem] mx-[3vw] max-md:mx-[1rem] leading-none relative -top-[0.15rem]">
                                            •
                                        </span>
                                        Dashboard
                                        <span className="font-black text-[2vw] max-md:text-[1.5rem] mx-[3vw] max-md:mx-[1rem] leading-none relative -top-[0.15rem]">
                                            •
                                        </span>
                                        Health
                                    </span>

                                    {/* Second set */}
                                    <span className="flex items-center text-[1.3vw] max-md:text-[1rem]">
                                        <span className="font-black text-[2vw] max-md:text-[1.5rem] mx-[3vw] max-md:mx-[1rem] leading-none relative -top-[0.15rem]">
                                            •
                                        </span>
                                        SaaS
                                        <span className="font-black text-[2vw] max-md:text-[1.5rem] mx-[3vw] max-md:mx-[1rem] leading-none relative -top-[0.15rem]">
                                            •
                                        </span>
                                        HRMS
                                        <span className="font-black text-[2vw] max-md:text-[1.5rem] mx-[3vw] max-md:mx-[1rem] leading-none relative -top-[0.15rem]">
                                            •
                                        </span>
                                        Job Search
                                        <span className="font-black text-[2vw] max-md:text-[1.5rem] mx-[3vw] max-md:mx-[1rem] leading-none relative -top-[0.15rem]">
                                            •
                                        </span>
                                        B2B
                                        <span className="font-black text-[2vw] max-md:text-[1.5rem] mx-[3vw] max-md:mx-[1rem] leading-none relative -top-[0.15rem]">
                                            •
                                        </span>
                                        FinTech
                                        <span className="font-black text-[2vw] max-md:text-[1.5rem] mx-[3vw] max-md:mx-[1rem] leading-none relative -top-[0.15rem]">
                                            •
                                        </span>
                                        Dashboard
                                        <span className="font-black text-[2vw] max-md:text-[1.5rem] mx-[3vw] max-md:mx-[1rem] leading-none relative -top-[0.15rem]">
                                            •
                                        </span>
                                        Health
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="py-[6vw] max-md:pb-12 w-full px-6">
                <Footer />
            </div>
        </section>
    )
}

export default Experience
