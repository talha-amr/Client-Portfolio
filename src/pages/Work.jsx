import React from 'react'
import Navbar from '../components/NavBar'
const Work = () => {
    return (
        <div>
            <Navbar activePage={"work"} />

            <div className="w-full px-6">
                <div className="mt-40"></div>
                <div className="flex flex-col relative items-center">

                    {/* Text + monkey together */}
                    <div className="relative flex justify-center items-center">
                        <p className="font-black text-theme-red text-[8.1vw] italic text-center leading-none tracking-tighter">
                            Every Pixel With Purpose
                        </p>

                        {/* Monkey overlaps slightly */}
                        <img
                            src="/Monkey-work1.png"
                            alt=""
                            className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[25vw] max-w-[300px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
