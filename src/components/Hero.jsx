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
        scale:1.09,
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
    <section className="min-h-dvh w-screen bg-[#E52222] py-3" id='hero'>
      <div className="container mx-auto px-6 text-white">
        <div className="flex flex-col justify-start gap-15 leading-tight">
          <p className='text-white [font-size:clamp(3rem,18.99vw,18.9rem)] text-center pt-20 uppercase font-black tracking-tighter leading-none'>
            WELCOME
          </p>
          <p className='text-base font-bold max-w-90 leading-tight'>
            Hi Zubair S. here<br />
            Connecting Product Design × Design Systems × AI | Lead UX/UI Designer @Rozeegpt / Rozee.pk
          </p>
          <p className='self-end text-base font-bold max-w-90  anim leading-tight'>
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