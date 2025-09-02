import React, { useRef } from "react";
import { CgArrowTopRight } from "react-icons/cg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollerMobile = () => {
    const containerRef = useRef(null);
    const headerRef = useRef(null);
    
    const projects = [
        { id: 1, title: "ABN GLOBAL", image: "/image-1.png" },
        { id: 2, title: "IMC HEALTH APP", image: "/image-2.png" },
        { id: 3, title: "RIZQ FINANCIAL APP", image: "/image-3.png" },
        { id: 4, title: "ASK TECHNOSE", image: "/image-4.png" },
        { id: 5, title: "BSM DEVELOPER", image: "/image-5.png" },
        { id: 6, title: "NEW METRO CITY", image: "/image-6.png" },
    ];

useGSAP(() => {
    // Make header sticky during card animations
    gsap.set(headerRef.current, {
        position: "sticky",
        top: "60px",
        zIndex: 100,
        backgroundColor: "transparent",
    });

    const cards = containerRef.current.querySelectorAll(".project-card");

    cards.forEach((card, index) => {
        // Sticky positioning for each card
        gsap.set(card, { 
            position: "sticky",
            top: `${80 + index * 20}px`,
            zIndex: index + 1
        });

        // Scale animation for cards
        gsap.to(card, {
            scale: 0.95 - index * 0.02,
            ease: "none",
            scrollTrigger: {
                trigger: card,
                start: "top 40%",
                end: "top 20%",
                scrub: 0.5,
                markers: false,
            }
        });
    });

    // Fade out header when last card finishes its animation
    const lastCard = cards[cards.length - 1];
    gsap.to(headerRef.current, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
            trigger: lastCard,
            start: "top 20%", // matches end of last card’s scale animation
            end: "top 0%",    // fade out as last card reaches top
            scrub: 1,         // smooth fade
            markers: false,
        }
    });
}, []);


    return (
        <section className="w-screen">
            {/* Sticky header */}
            <div ref={headerRef} className="px-6 py-4">
                <p className="text-theme-red font-black text-4xl">Projects</p>
            </div>
            
            {/* Container for sticky cards */}
            <div 
                ref={containerRef} 
                className="flex flex-col"
                style={{ paddingBottom: `40vh` }} // Adjust scroll space
            >
                {projects.map((project, index) => (
                    <div 
                        key={project.id} 
                        className="project-card relative w-full h-screen flex items-center justify-center"
                    >
                        <div className="relative w-full ">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full shadow-lg " 
                            />
                            <div className="absolute bottom-0 h-[15%] w-full flex gap-2 items-center justify-center
                                bg-white/20 backdrop-blur-md border-t border-white/30 ">
                                <p className="text-theme-red text-center font-semibold">{project.title}</p>
                                <CgArrowTopRight color="#e52222" size={24} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ScrollerMobile;