import React from 'react'
import Navbar from '../components/NavBar'
import Accordion from '../components/Accordion'
import Footer from '../components/Footer'

const Experience = () => {
    return (
        <section className='min-h-dvh w-screen'>
            <Navbar activePage={"experience"} />
<div className="w-full px-6 mx-auto">
            <div className="flex justify-start items-center py-[7.8vw] pb-10 border-b-2 border-[#e52222]">
                
                    <div className='text-[#e52222] max-w-[70%] space-y-6 '>
                        <p className='text-[2.4vw] font-bold leading-none'>Currently, I’m working at Rozee.pk / RozeeGPT as a Product UX/UI Designer (Team Lead).</p>
                        <p className='text-[1.8vw] font-regular leading-none'>In this role, I lead the design team and focus on creating user-centered and business-driven product experiences. My work involves conducting UX audits, building scalable design systems, collaborating with stakeholders, and ensuring design consistency across both small and large-scale digital products.</p>
                </div>
            </div>
            <Accordion />
                
                <Footer/>
            </div>
        </section>
    )
}

export default Experience
