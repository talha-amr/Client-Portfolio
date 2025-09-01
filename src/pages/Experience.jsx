import React from 'react'
import Navbar from '../components/NavBar'
import Accordion from '../components/Accordion'
import Footer from '../components/Footer'

const Experience = () => {
    return (
        <section className='min-h-dvh w-screen'>
            <Navbar activePage={"experience"} />
            <div className="w-full px-6 mx-auto">
                <div className="flex flex-col w-full justify-start items-start py-[6vw] gap-0">
                    <p className='font-medium max-w-[40%] text-theme-red text-[0.9vw]'>In this role, I lead the design team and focus on creating user-centered and business-driven product experiences. My work involves conducting UX audits, building scalable design systems, collaborating with stakeholders, and ensuring design consistency across both small and large-scale digital products.</p>
                    <div className='w-[25%]  self-end flex flex-col gap-3'>
                        <img src="/portfoliopic-zubair.jpg" alt="" className='w-full h-full object-contain' />
                        <div className="flex items-center gap-2 self-end"><img src="/OnlineSymbol.png" alt="" className='w-[0.9vw]' /><p className='uppercase text-[#178243] text-[0.9vw]'>open to work</p></div>
                    </div>
                    <p className='text-theme-red uppercase text-[1.2vw] leading-none'>Currently, I’m working at Rozee.pk / RozeeGPT</p>
                    <p className='text-[8.1vw] font-black text-theme-red uppercase tracking-tight leading-none'>Lead UX/UI Designer</p>
                </div>
            </div>
                <Accordion />
            <div className="bg-black w-full min-h-[30vh] mt-[7vw] flex flex-col">
                {/* Top Partition */}
                <div className="flex flex-1 justify-center items-center border-b border-white/30">
                    <p className="w-full text-center font-bold text-white text-[1.5vw] leading-none">
                        I’ve been in various industries and domains. Working with design
                    </p>
                </div>

                {/* Bottom Partition */}
                <div className="flex flex-1 justify-center items-center">
                    <div className="w-full px-35">
                        <div className="w-full overflow-hidden h-full flex items-center marquee-wrapper text-white">
                            <div className="flex whitespace-nowrap marquee-container">
                                {/* First set */}
                                <span className="flex items-center text-[1.3vw]">
                                    <span className="font-black text-[2vw] mx-[3vw] leading-none relative -top-[0.15rem]">
                                        •
                                    </span>
                                    SaaS
                                    <span className="font-black text-[2vw] mx-[3vw] leading-none relative -top-[0.15rem]">
                                        •
                                    </span>
                                    HRMS
                                    <span className="font-black text-[2vw] mx-[3vw] leading-none relative -top-[0.15rem]">
                                        •
                                    </span>
                                    Job Search
                                    <span className="font-black text-[2vw] mx-[3vw] leading-none relative -top-[0.15rem]">
                                        •
                                    </span>
                                    B2B
                                    <span className="font-black text-[2vw] mx-[3vw] leading-none relative -top-[0.15rem]">
                                        •
                                    </span>
                                    FinTech
                                    <span className="font-black text-[2vw] mx-[3vw] leading-none relative -top-[0.15rem]">
                                        •
                                    </span>
                                    Dashboard
                                    <span className="font-black text-[2vw] mx-[3vw] leading-none relative -top-[0.15rem]">
                                        •
                                    </span>
                                    Health
                                </span>

                                {/* Second set for seamless loop */}
                                <span className="flex items-center text-[1.3vw]">
                                    <span className="font-black text-[2vw] mx-[3vw] leading-none relative -top-[0.15rem]">
                                        •
                                    </span>
                                    SaaS
                                    <span className="font-black text-[2vw] mx-[3vw] leading-none relative -top-[0.15rem]">
                                        •
                                    </span>
                                    HRMS
                                    <span className="font-black text-[2vw] mx-[3vw] leading-none relative -top-[0.15rem]">
                                        •
                                    </span>
                                    Job Search
                                    <span className="font-black text-[2vw] mx-[3vw] leading-none relative -top-[0.15rem]">
                                        •
                                    </span>
                                    B2B
                                    <span className="font-black text-[2vw] mx-[3vw] leading-none relative -top-[0.15rem]">
                                        •
                                    </span>
                                    FinTech
                                    <span className="font-black text-[2vw] mx-[3vw] leading-none relative -top-[0.15rem]">
                                        •
                                    </span>
                                    Dashboard
                                    <span className="font-black text-[2vw] mx-[3vw] leading-none relative -top-[0.15rem]">
                                        •
                                    </span>
                                    Health
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <Footer />
        </section>
    )
}

export default Experience
