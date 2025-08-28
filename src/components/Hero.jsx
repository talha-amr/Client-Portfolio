import React from 'react'
import gsap from 'gsap'
import { SplitText, ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {
    useGSAP(() => {
        // Make sure the element exists before creating SplitText
        const animElement = document.querySelector(".anim");
        if (!animElement) return;
        let split = new SplitText(".anim", { type: "words,chars" });

        gsap.fromTo(
            split.chars,
            {
                opacity: 0.4
            },
            {
                opacity: 1,
                scale: 1.09,
                duration: 1, // Add duration for smoother animation
                ease: "power2.out", // Add easing
                scrollTrigger: {
                    trigger: ".anim", // Use the actual animated element as trigger
                    start: "top 80%",
                    end: "bottom 60%",
                    scrub: 1, // Make scrub smoother with a value instead of true
                    // markers: true, // Uncomment this to debug scroll positions
                },
                stagger: 0.06,
            }
        );
        // Cleanup function
        return () => split.revert();
    }, []);

    return (
        <section className="min-h-dvh w-screen bg-[#E52222] py-30" id='hero'>
            <div className="w-full md:px-1 mx-auto lg:px-6 text-white">
                <div className="flex flex-col justify-start gap-5 leading-tight">
                
                    <div className='flex items-center justify-start text-[20.4vw]  text-start  md:pt-2 lg:pt-5 uppercase font-black tracking-[-0.065em] leading-none text-white'>
                        <span>WELC</span>
                        <div className='inline-block aspect-square w-[0.8em]  -mx-[0.12em] flex-shrink-0 rounded-full bg-white overflow-hidden relative z-10 animate-float'>
                            <img
                                src="/portfoliopic-zubair.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span>ME</span>
                    </div>

                    <p className='md:text-[1rem] lg:text-[1.5rem] font-bold max-w-120 text-start leading-tight '>
                       <span className='italic'> Hi Zubair S. here</span><br />
                        Connecting Product Design × Design Systems × AI | Lead UX/UI Designer @Rozeegpt / Rozee.pk
                    </p>
                    <p className='self-end md:text-[1rem] lg:text-[1.5rem] mt-3 font-bold max-w-[42%] anim leading-tight '>
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

export default Hero