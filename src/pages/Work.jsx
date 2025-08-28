import React from 'react'
import Navbar from '../components/NavBar'
const Work = () => {
    return (
        <div className='min-h-dvh w-screen'>
            <Navbar activePage={"work"} />

            <div className="w-full px-6">
                <div className="mt-35"></div>
                <div className="w-full px-6">
                    <div className="mt-20">

                        {/* Small text row - positioned ABOVE main content */}


                        {/* Your existing main content - keep as is */}
                        <div className="relative flex flex-col items-center">
                            {/* Text */}
                            <p className="font-black text-red-600 text-[8.1vw] italic text-center leading-none tracking-tighter z-0 whitespace-nowrap">
                                Every Pixel With Purpose
                            </p>

                            <div className="flex justify-between items-center w-full text-red-600 text-[1.3vw] font-medium mb-8 absolute z-20"
                                 style={{ top: `calc(8.1vw + 21vw)` }}> {/* Scales with text size */}
                                <span className="flex-shrink-0">AVAILABLE FOR WORK</span>
                                <div className="flex items-center  gap-25 flex-shrink-0">
                                    <p>SCROLL TO VIEW MORE</p>
                                    <p>2025</p>
                                </div>
                            </div>
                            {/* Monkey overlapping text */}
                            <div className="relative w-full flex justify-center">
                                <img
                                    src="/Monkey-work1.png"
                                    alt="Monkey"
                                    className="w-[25vw] relative z-10"
                                    style={{
                                        marginTop: `calc(-2vw - 0.5rem)`,
                                    }}
                                />
                            </div>

                            {/* Image being held */}
                            <div className="relative w-full">
                                <img
                                    src="/Work-video-image.png"
                                    alt="Held Image"
                                    className="w-full relative z-0"
                                    style={{
                                        marginTop: `calc(-1.5vw - 0.25rem)`,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
