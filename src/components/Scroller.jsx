import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Work = () => {
    const containerRef = useRef();
    const [activeIndex, setActiveIndex] = useState(0);
    const cardRefs = useRef([]);
    const btnRefs = useRef([]);

    const projects = [
        { id: 1, title: "ABN GLOBAL", image: "/image-1.png", desc: "The ABN Agent Dashboard is an internal platform..." },
        { id: 2, title: "IMC HEALTH APP", image: "/image-2.png", desc: "Description for IMC HEALTH APP" },
        { id: 3, title: "RIZQ FINANCIAL APP", image: "/image-3.png", desc: "Description for Rizq Financial App" },
        { id: 4, title: "ASK TECHNOSE", image: "/image-4.png", desc: "Description for ASK TECHNOSE" },
        { id: 5, title: "BSM DEVELOPER", image: "/image-5.png", desc: "Description for BSM Developer" },
        { id: 6, title: "NEW METRO CITY", image: "image-6.png", desc: "Description for New Metro City" },
    ];

    // GSAP animations for magnetic hover & sticky scroll
    useGSAP(() => {
        // ---- Magnetic Hover Effect ----
        cardRefs.current.forEach((card, i) => {
            const btn = btnRefs.current[i];
            if (!card || !btn) return;

            const move = (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                gsap.to(btn, {
                    x: x - rect.width / 2,
                    y: y - rect.height / 2,
                    duration: 0.3,
                    ease: "power3.out",
                });
            };

            card.addEventListener("mousemove", move);

            return () => card.removeEventListener("mousemove", move);
        });

        // ---- Sticky Scroll Animation (activeIndex update) ----
        const images = containerRef.current.querySelectorAll("img");
        let loadedCount = 0;

        const handleLoad = () => {
            loadedCount++;
            if (loadedCount === images.length) {
                // All images loaded → setup ScrollTrigger
                const ctx = gsap.context(() => {
                    const sections = gsap.utils.toArray(".project-card");

                    sections.forEach((section, i) => {
                        ScrollTrigger.create({
                            trigger: section,
                            start: "top 60%",
                            end: "bottom center",
                            onEnter: () => setActiveIndex(i),
                            onEnterBack: () => setActiveIndex(i),
                        });
                    });
                }, containerRef);

                return () => ctx.revert();
            }
        };

        images.forEach((img) => {
            if (img.complete) handleLoad();
            else {
                img.addEventListener("load", handleLoad);
                img.addEventListener("error", handleLoad);
            }
        });

        return () => {
            images.forEach((img) => {
                img.removeEventListener("load", handleLoad);
                img.removeEventListener("error", handleLoad);
            });
        };
    }, { scope: containerRef });

    return (
        <div className="min-h-screen bg-white" ref={containerRef}>
            <div className="w-full mx-auto px-6 relative">
                <div className="flex py-20">

                    {/* Left Side - Sticky Navigation */}
                    <div className="w-1/4 bg-white sticky top-0 h-screen flex flex-col justify-center items-start">
                        <div className="space-y-2 text-start">
                            {projects.map((project, index) => (
                                <div key={project.id} className="nav-item">
                                    <h2
                                        className={`text-[2.5vw] font-black transition-all duration-500 leading-tight
                      ${activeIndex === index
                          ? "text-[#E52222] scale-110 translate-x-5"
                          : "text-gray-400 scale-100 translate-x-0"}`}
                                    >
                                        {project.title}
                                    </h2>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Scrollable Content */}
                    <div className="w-3/4 flex flex-col items-end">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                ref={(el) => (cardRefs.current[index] = el)}
                                className={`project-card relative w-[90%] h-auto mb-10 group 
                  transform transition-all duration-800 ease-in-out overflow-hidden
                  ${activeIndex === index
                      ? "scale-103 -translate-x-8 z-10"
                      : "scale-100 translate-x-0 opacity-100"}`}
                            >
                                {/* Project Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-center"
                                />

                                {/* Glass Magnetic Button */}
                                <div
                                    ref={(el) => (btnRefs.current[index] = el)}
                                    className="absolute top-1/2 left-1/2 opacity-0 group-hover:opacity-100 
                    pointer-events-none transition-opacity duration-300"
                                    style={{ transform: "translate(-50%, -50%)" }}
                                >
                                    <button className="w-20 h-20 flex items-center justify-center rounded-full 
                    bg-white/20 backdrop-blur-md border border-white/40 text-white 
                    text-sm font-semibold shadow-lg">
                                        VIEW
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default Work;
