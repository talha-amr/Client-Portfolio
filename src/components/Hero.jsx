import React, { useEffect } from 'react'
import gsap from 'gsap'
import { SplitText, ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {
    useEffect(() => {
        // Force refresh when component mounts
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
            console.log('ScrollTrigger refreshed for Hero component');
        }, 100);
        
        return () => clearTimeout(timer);
    }, []);

useGSAP(() => {
    let splits = [];
    let ctx = gsap.context(() => {
        const animElements = document.querySelectorAll(".anim");
        if (!animElements.length) return;

        animElements.forEach((el) => {
            const split = new SplitText(el, { type: "words chars" });
            splits.push(split);

            gsap.fromTo(
                split.chars,
                { opacity: 0.4 },
                {
                    opacity: 1,
                    scale: 1.09,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        end: "bottom 60%",
                        scrub: 1,
                    },
                    stagger: 0.06,
                }
            );
        });
    });

    return () => {
        ctx.revert();
        splits.forEach((s) => s.revert());
    };
}, []);

    return (
        <section className="min-h-dvh w-screen bg-[#E52222] py-[8vw]" id="hero">
            <div className="w-full mx-auto px-6 text-white">
                {/* Desktop Layout */}
                <div className="hidden md:flex flex-col justify-start gap-5 leading-none">
                    
                    <div className="flex items-center justify-start text-[20.4vw] text-start md:pt-2 lg:pt-5 uppercase font-black tracking-[-0.065em] leading-none text-white">
                        <span>WELC</span>
                        <div className="inline-block aspect-square w-[0.8em] -mx-[0.12em] flex-shrink-0 rounded-full bg-white overflow-hidden relative z-10 animate-float">
                            <img
                                src="/portfoliopic-zubair.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span>ME</span>
                    </div>

                    <p className="md:text-[1rem] lg:text-[2.1vw] font-bold max-w-[35%] text-start leading-tight">
                        <span className="italic">Hi Zubair S. here</span><br />
                        Connecting Product Design × Design Systems × AI | Lead UX/UI Designer @Rozeegpt / Rozee.pk
                    </p>
                    
                    <p className="self-end md:text-[1rem] lg:text-[2.1vw] mt-3 font-bold max-w-[44%] anim leading-tight mr-6">
                        I'm a UX/UI Product Designer and Design Consultant with 6 years of experience in crafting user-
                        <br />
                        centered digital products, and a total of 10 years in the design and creative industry.
                        Currently, I lead a design team where I focus on developing scalable and consistent design
                        systems that deliver seamless user experiences across both small and large-scale digital product
                    </p>
                </div>

                {/* Mobile Layout */}
                <div className="flex flex-col items-center justify-center gap-3 text-center md:hidden mt-15">
                    
                    {/* Image */}
                    <div className="w-40 h-40 rounded-full overflow-hidden ">
                        <img
                            src="/portfoliopic-zubair.jpg"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Intro Text */}
                    <p className="text-[1.1rem] font-bold text-center leading-tight max-w-[90%]">
                        <span className="italic">Hi Zubair S. here</span><br />
                        Connecting Product Design × Design Systems × AI  Lead UX/UI Designer @Rozeegpt / Rozee.pk
                    </p>

                    {/* Animated Experience Text */}
                    <p className="text-[1.1rem] font-medium max-w-[90%] anim mt-19 leading-tight text-center anim">
                        I'm a UX/UI Product Designer and Design Consultant with 6 years of experience in crafting
                        user-centered digital products, and a total of 10 years in the design and creative industry.
                        Currently, I lead a design team where I focus on developing scalable and consistent design
                        systems that deliver seamless user experiences across both small and large-scale digital product
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero
