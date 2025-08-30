import React from 'react'
import Navbar from '../components/NavBar'
import CaseTag from '../components/CaseTag'
import Footer from '../components/Footer'
import CaseStudyProcess from '../components/CaseStudyProcess'
import ProblemsAndSolutions from '../components/ProblemsAndSolutions'
import ScreenShots from '../components/ScreenShots'
import NextProjectBtn from '../components/NextProjectBtn'

const CaseStudy = () => {
  return (
    <section className="min-h-dvh w-screen bg-[#f9f9f9]" id="CaseStudy">
      <Navbar activePage={"caseStudy"} />

      {/* Spacer after navbar */}
      <div className="py-[4vw]"></div>

      {/* Hero Title & Tags */}
      <div className="w-full px-6 mb-[6vw]">
        <div className="space-y-[3vw]">
          <p className="text-3xl md:text-[3vw] text-theme-red max-w-[80%] font-regular leading-none">
            ABN Global: Redesigned for Agents – AI-Powered Student Profiles in Just One Minute
          </p>
          <div className="flex flex-wrap gap-3">
            <CaseTag title={"Idea to Product"} />
            <CaseTag title={"Idea to Product"} />
            <CaseTag title={"MVP Launch Strategy"} />
            <CaseTag title={"UI/UX Design"} />
            <CaseTag title={"Dashboard"} />
            <CaseTag title={"Product Enhancements"} />
            <CaseTag title={"Full ownership"} />
            <CaseTag title={"UCD"} />
          </div>
        </div>
      </div>

      {/* Full-width image */}
      <div className="w-full mb-[6vw]">
        <img src="/image-1.png" alt="" className="w-full object-cover" />
      </div>

      {/* Project Overview */}
      <div className="w-full px-6 mb-[6vw]">
        <div className="space-y-[2.5vw]">
          <p className="font-bold text-theme-red text-[3.7vw]">Project Overview</p>
          <p className="text-theme-red text-[2vw] font-light leading-snug">
            The ABN Agent Dashboard is an internal platform used by ABN Global’s field agents to manage clients, tasks, and reporting.
            While it played a critical role in day-to-day operations, the dashboard had become outdated and inefficient, leading to
            frustration among agents and reduced productivity.<br /><br />

            My responsibility was to redesign the dashboard end-to-end within a 20-day timeline, ensuring a balance between user-centered
            research and a fast-track execution approach. This included conducting user interviews, auditing the existing product, aligning
            with stakeholders, and creating a modern UI system with AI-powered features.<br /><br />

            The redesigned dashboard not only improved visual consistency and usability, but also laid the foundation for AI-driven automation,
            helping agents work faster and smarter.
          </p>
        </div>
      </div>

      {/* Process + Problems/Solutions + Footer */}
      <div className="space-y-[8vw]">
        <CaseStudyProcess />
        <ProblemsAndSolutions />
        <ScreenShots />
      </div>
         <NextProjectBtn />
         <div className="w-full px-6 mt-[8vw]">
        <Footer />
        </div>
    </section>
  )
}

export default CaseStudy
