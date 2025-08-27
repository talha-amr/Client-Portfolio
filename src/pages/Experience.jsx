import React from 'react'
import Navbar from '../components/NavBar'
import Accordion from '../components/Accordion'

const Experience = () => {
    return (
        <section className='min-h-dvh w-screen'>
            <Navbar activePage={"experience"} />

            <div className="flex justify-start items-center mt-35 pb-10 border-b-1 border-[#e52222]">
                <div className="container px-6 mx-auto">
                    <div className='text-[#e52222] max-w-[70%] space-y-6 '>
                        <p className='text-3xl font-bold leading-tight'>Currently, I’m working at Rozee.pk / RozeeGPT as a Product UX/UI Designer (Team Lead).</p>
                        <p className='text-2xl font-regular leading-tight'>In this role, I lead the design team and focus on creating user-centered and business-driven product experiences. My work involves conducting UX audits, building scalable design systems, collaborating with stakeholders, and ensuring design consistency across both small and large-scale digital products.</p>
                    </div>
                </div>
            </div>
            <Accordion title="nothing" content="nothing" />
            <div className="container px-6 mx-auto">
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

                <div className="flex justify-between items-center h-[30vh] text-[#E52222] py-40">
                    <p className="text-3xl font-bold"> <span className="font-black">Let’s Make</span><br />
                        Something Amazing Together!</p>
                    <p className='text-base mt-3 font-regular max-w-[40%] anim leading-tight me-8'>
                        I'm a UX/UI Product Designer and Design Consultant with 6 years of experience in crafting user-
                        <br />
                        centered digital products, and a total of 10 years in the design and creative industry.
                        Currently, I lead a design team where I focus on developing scalable and consistent design
                        systems that deliver seamless user experiences across both small and large-scale digital product
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Experience
