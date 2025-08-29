import React from 'react'

const CaseStudyProcess = () => {
  return (
    <section className='min-h-dvh w-screen bg-[#141414]'>
        <div className="grid grid-cols-3">
            <div>
                <img src="/CaseStudyPfp.png" alt=""  className='w-full object-contain'/>
            </div>
            <div className='col-span-2 flex flex-col items-start justify-center '>
                <h1 className='text-theme-red text-2xl font-bold'>Design Process</h1>
                <h1 className='text-theme-red text-base max-w-[70%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic repudiandae ipsa nulla tenetur tempore deserunt id sint aperiam quis corporis corrupti soluta, eligendi, doloremque facilis possimus. Laudantium veniam facilis vero!</h1>
            </div>
        </div>
    </section>
  )
}

export default CaseStudyProcess
