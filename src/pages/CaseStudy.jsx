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

      {/* Hero Title & Tags */}
      <div className="w-full px-6  py-20">
        <div className="space-y-8 mt-8">
          <p className="text-3xl md:text-4xl text-theme-red max-w-[80%] font-regular leading-tight">
            ABN Global: Redesigned for Agents – AI-Powered Student Profiles in Just One Minute
          </p>
          <div className="flex flex-wrap justify-start gap-3 items-center">
            <CaseTag title={"Lorem"} />
            <CaseTag title={"Ipsum"} />
            <CaseTag title={"hero"} />
            <CaseTag title={"section"} />
            <CaseTag title={"Lorem"} />
          </div>
        </div>
      </div>

      {/* Full-width image */}
      <div className="w-full">
        <img src="/image-1.png" alt="" className="w-full object-cover" />
      </div>

      {/* Project Overview */}
      <div className="w-full px-6  py-20">
        <div className="space-y-6">
          <p className="font-black text-theme-red text-4xl">Project Overview</p>
          <p className="text-theme-red text-2xl leading-none">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium explicabo voluptatum accusantium necessitatibus delectus illo. 
            Odit soluta cum qui dolor rem nobis deleniti consectetur minima adipisci quia, ab dolore. Sed, aliquid est tempore odit facere 
            quibusdam consequatur laudantium id autem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, architecto fuga ipsa 
            pariatur optio libero obcaecati consectetur nemo dicta! Iure? Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus 
            mollitia est laboriosam molestiae eveniet tenetur nobis! Ea sequi rerum fuga debitis nemo delectus modi voluptates enim necessitatibus 
            aspernatur cum aperiam odio officia ipsa ullam vero, hic, nihil, distinctio voluptatem. Quisquam deserunt iure voluptates minus sit 
            impedit consequatur eum officia provident!
          </p>
        </div>
      </div>

      {/* Process + Problems/Solutions + Footer */}
      <CaseStudyProcess />
      <ProblemsAndSolutions />
      <ScreenShots/>
      <NextProjectBtn/>
      <div className="w-full px-6">
      <Footer />
      </div>
    </section>
  )
}

export default CaseStudy
