import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const Grid = () => {

    return (
        <>
            <section className="min-h-screen bg-[#F9F9F9] " id="grid">
                <div className="container mx-auto md:px:1 lg:px-6  text-[#E52222] relative">
                    <div className="work-process   ">
                        <div className="flex h-[65vh] flex-row items-center border-b-1 border-[#E52222]">
                            <p className="font-black text-2xl sm:text-3xl md:text-[38px] max-w-[70%] leading-none">
                                Work Process<br />
                                Every project is unique, so I adapt my approach instead of sticking to one fixed process.
                            </p>
                            <div className="ml-2 animate-float">
                                <img
                                    src="/Ellipse-55.png"
                                    alt="layer-blur"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                        <div className="grid-container ">
                            <div className="grid-item">
                                <h3 className='text-4xl font-black max-w-[80%]'>USER CENTERAL DESIGN (UCD)</h3>

                            </div>
                            <div className="grid-item border-s-1 border-[#E52222]  span-cols-2">
                                <p className='text-[1.5rem] leading-7 font-light max-w-[90%]'>When there's enough time and scope, I follow a complete UCD
                                    process research, testing, and iteration.</p>
                            </div>
                            <div className="grid-item   span-cols-2">
                                <p className='text-[1.5rem] leading-7 font-light max-w-[90%]'>For fast-moving projects, I use Lean UX to quickly test ideas and refine them.</p>
                            </div>
                            <div className="grid-item border-s-1 border-[#E52222]">
                                <h3 className='text-4xl font-black max-w-[80%]'>Learn User Experience (UX)</h3>
                            </div>
                            <div className="grid-item">
                                <h3 className='text-4xl font-black max-w-[80%]'>UI-First Approach</h3>

                            </div>
                            <div className="grid-item border-s-1 border-[#E52222]  span-cols-2">
                                <p className='text-[1.5rem]  leading-7 font-light max-w-[90%]'>In tight deadlines, I rely on my experience to design the UI directly, while keeping UX best practices in mind</p>
                            </div>
                        </div>
                        
                        {/* Updated Marquee Section - Only this part is modified */}
                        <div className="w-full overflow-hidden border-b border-[#E52222] h-20 flex items-center marquee-wrapper">
                            <div className="flex whitespace-nowrap marquee-container">
                                {/* First set */}
                                <span className="mr-25 text-lg">
                                    <span className="font-black text-2xl mr-2">•</span>MVP for Startups
                                </span>
                                <span className="mr-25 text-lg">
                                    <span className="font-black text-2xl mr-2">•</span>User Research
                                </span>
                                <span className="mr-25 text-lg">
                                    <span className="font-black text-2xl mr-2">•</span>Data-Driven Design
                                </span>
                                <span className="mr-25 text-lg">
                                    <span className="font-black text-2xl mr-2">•</span>Brand Audit UX/UI
                                </span>
                                <span className="mr-25 text-lg">
                                    <span className="font-black text-2xl mr-2">•</span>Design System
                                </span>
                                {/* Second set for seamless loop */}
                                <span className="mr-25 text-lg">
                                    <span className="font-black text-2xl mr-2">•</span>MVP for Startups
                                </span>
                                <span className="mr-25 text-lg">
                                    <span className="font-black text-2xl mr-2">•</span>User Research
                                </span>
                                <span className="mr-25 text-lg">
                                    <span className="font-black text-2xl mr-2">•</span>Data-Driven Design
                                </span>
                                <span className="mr-25 text-lg">
                                    <span className="font-black text-2xl mr-2">•</span>Brand Audit UX/UI
                                </span>
                                <span className="mr-25 text-lg">
                                    <span className="font-black text-2xl mr-2">•</span>Design System
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Grid