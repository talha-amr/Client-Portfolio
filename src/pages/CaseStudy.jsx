import React from 'react'
import Navbar from '../components/NavBar'
import CaseTag from '../components/CaseTag'
import Footer from '../components/Footer'
import CaseStudyProcess from '../components/CaseStudyProcess'

const CaseStudy = () => {
    return (
       <section className='min-h-dvh w-screen bg-[#f9f9f9]' id='CaseStudy'>
  <Navbar activePage={"caseStudy"} />

  <div className="w-full px-6">
    <div className="py-20"></div>
    <div className="space-y-8">
      <p className='text-4xl text-theme-red max-w-[70%]'>
        ABN Global: Redesigned for Agents – AI-Powered Student Profiles in Just One Minute
      </p>
      <div className="flex justify-center gap-3 items-center ">
        <CaseTag title={"Lorem"} />
        <CaseTag title={"Ipsum"} />
        <CaseTag title={"hero"} />
        <CaseTag title={"section"} />
        <CaseTag title={"Lorem"} />
      </div>
    </div>
  </div>

  {/* Full-width image */}
  <div className="w-full mt-14">
    <img src="/image-1.png" alt="" className='w-full object-cover' />
  </div>
  <div className="w-full px-6 py-30">
    <div className="space-y-5">
    <p className='font-bold text-theme-red text-3xl mt-10'>Project Overview</p>
    <p className='text-theme-red text-xl'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium explicabo voluptatum accusantium necessitatibus delectus illo. Odit soluta cum qui dolor rem nobis deleniti consectetur minima adipisci quia, ab dolore. Sed, aliquid est tempore odit facere quibusdam consequatur laudantium id autem.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, architecto fuga ipsa pariatur optio libero obcaecati consectetur nemo dicta! Iure?Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus mollitia est laboriosam molestiae eveniet tenetur nobis! Ea sequi rerum fuga debitis nemo delectus modi voluptates enim necessitatibus aspernatur cum aperiam odio officia ipsa ullam vero, hic, nihil, distinctio voluptatem. Quisquam deserunt iure voluptates minus sit impedit consequatur eum officia provident!</p>
    </div>
  </div>
  <CaseStudyProcess/>
  <Footer/>
</section>
    )
}

export default CaseStudy
