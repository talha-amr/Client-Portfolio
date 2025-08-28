import React from 'react'
import Navbar from '../components/NavBar'
import Accordion from '../components/Accordion'
import Footer from '../components/Footer'

const Experience = () => {
    return (
        <section className='min-h-dvh w-screen'>
            <Navbar activePage={"experience"} />
<div className="w-full px-6 mx-auto">
            <div className="flex justify-start items-center mt-35 pb-10 border-b-1 border-[#e52222]">
                
                    <div className='text-[#e52222] max-w-[70%] space-y-6 '>
                        <p className='text-3xl font-bold leading-tight'>Currently, I’m working at Rozee.pk / RozeeGPT as a Product UX/UI Designer (Team Lead).</p>
                        <p className='text-2xl font-regular leading-tight'>In this role, I lead the design team and focus on creating user-centered and business-driven product experiences. My work involves conducting UX audits, building scalable design systems, collaborating with stakeholders, and ensuring design consistency across both small and large-scale digital products.</p>
                </div>
            </div>
            <Accordion title="nothing" content="nothing" />
                <div className="grid grid-cols-3 gap-8 w-full border-b border-[#E52222] pt-50 pb-17 ">
                    {/* Contact Column */}
                    <div>
                        <h3 className="text-[#E52222] text-2xl pb-2 border-b border-[#E52222] mb-4">
                            CONTACT
                        </h3>
                        <ul className="space-y-2 text-lg text-[#E52222]">
                            <li>
                                <a href="#" className="inline-block link-hover-btn border-b border-transparent hover:border-[#E52222]">
                                    LINKEDIN
                                </a>
                            </li>
                            <li>
                                <a href="#" className="inline-block link-hover-btn border-b border-transparent hover:border-[#E52222]">
                                    BEHANCE
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Pages Column */}
                    <div className="col-span-2">
                        <h3 className="text-[#E52222] text-2xl pb-2 border-b border-[#E52222] mb-4">
                            PAGES
                        </h3>

                        <ul className="space-y-2 text-[#E52222] text-lg">
                            <li className="flex justify-between items-center">
                                <a href="#" className="inline-block link-hover-btn border-b border-transparent hover:border-[#E52222]">
                                    HOME
                                </a>
                                <a
                                    href="/"
                                    onClick={(e) => {
                                        e.preventDefault(); // prevent default jump
                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                    }}
                                    className="text-sm inline-block link-hover-btn border-b border-transparent hover:border-[#E52222]"
                                >
                                    BACK TO TOP ↑
                                </a>
                            </li>
                            <li>
                                <a href="#" className="inline-block link-hover-btn border-b border-transparent hover:border-[#E52222]">
                                    CASESTUDIES
                                </a>
                            </li>
                            <li>
                                <a href="#" className="inline-block link-hover-btn border-b border-transparent hover:border-[#E52222]">
                                    EXPERIENCE
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <Footer/>
            </div>
        </section>
    )
}

export default Experience
