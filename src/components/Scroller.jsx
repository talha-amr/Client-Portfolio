import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
    const containerRef = useRef();
    const [activeIndex, setActiveIndex] = useState(0);
    const cardRefs = useRef([]);
    const btnRefs = useRef([]);

    // GSAP Magnetic Hover Effect
    useGSAP(() => {
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

            return () => {
                card.removeEventListener("mousemove", move);
            };
        });
    }, { scope: containerRef });

    const projects = [
        {
            id: 1,
            title: "ABN GLOBAL",
            image: "/image-1.png",
            desc: "The ABN Agent Dashboard is an internal platform used by ABN Global’s field agents to manage clients, tasks, and reporting. While it played a critical role in day-to-day operations, the dashboard had become outdated and inefficient..."
        },
        { id: 2, title: "IMC HEALTH APP", image: "/image-2.png", desc: "Description for IMC HEALTH APP" },
        { id: 3, title: "RIZQ FINANCIAL APP", image: "/image-3.png", desc: "Description for Rizq Financial App" },
        { id: 4, title: "ASK TECHNOSE", image: "", desc: "Description for ASK TECHNOSE" },
        { id: 5, title: "BSM DEVELOPER", image: "", desc: "Description for BSM Developer" },
        { id: 6, title: "NEW METRO CITY", image: "", desc: "Description for New Metro City" },
    ];

    // ScrollTrigger to update active project index
    useGSAP(() => {
        const sections = gsap.utils.toArray(".project-card");

        sections.forEach((section, i) => {
            ScrollTrigger.create({
                trigger: section,
                start: "top+=35% center",
                end: "bottom center",
                onEnter: () => setActiveIndex(i),
                onEnterBack: () => setActiveIndex(i),
            });
        });
    }, { scope: containerRef });

    return (
        <div className="min-h-screen bg-[#f9f9f9]" ref={containerRef}>
            <div className="w-full mx-auto md:px-1 lg:px-6 relative">
                <div className="flex py-20">

                    {/* Left Side - Sticky Navigation */}
                    <div className="w-1/4 bg-[#f9f9f9] sticky top-0 h-screen flex flex-col justify-center items-start">
                        <div className="space-y-2 text-start">
                            {projects.map((project, index) => (
                                <div key={project.id} className="nav-item">
                                    <h2
                                        className={`text-3xl font-black  transition-all duration-500 leading-tight
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
                                        : "scale-100 translate-x-0 opacity-70"}`}
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

                {/* Footer Section */}
                <div className="grid grid-cols-3 gap-8 w-full border-b border-[#E52222] pt-12 pb-17">

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-[#E52222] text-2xl pb-2 border-b border-[#E52222] mb-4">
                            CONTACT
                        </h3>
                        <ul className="space-y-2 text-lg text-[#E52222]">
                            <li>
                                <a href="#" className="inline-block link-hover-btn border-b border-transparent hover:border-[#E52222]">
                                    LINKEDIN
                                </a>
                            </li>
                            <li>
                                <a href="#" className="inline-block link-hover-btn border-b border-transparent hover:border-[#E52222]">
                                    BEHANCE
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Pages Column */}
                    <div className="col-span-2">
                        <h3 className="text-[#E52222] text-2xl pb-2 border-b border-[#E52222] mb-4">
                            PAGES
                        </h3>
                        <ul className="space-y-2 text-[#E52222] text-lg">
                            <li className="flex justify-between items-center">
                                <a href="#" className="inline-block link-hover-btn border-b border-transparent hover:border-[#E52222]">
                                    HOME
                                </a>
                                <a
                                    href="/"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                    }}
                                    className="text-sm inline-block link-hover-btn border-b border-transparent hover:border-[#E52222]"
                                >
                                    BACK TO TOP ↑
                                </a>
                            </li>
                            <li>
                                <a href="#" className="inline-block link-hover-btn border-b border-transparent hover:border-[#E52222]">
                                    CASESTUDIES
                                </a>
                            </li>
                            <li>
                                <a href="#" className="inline-block link-hover-btn border-b border-transparent hover:border-[#E52222]">
                                    EXPERIENCE
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Closing Section */}
                   <Footer/>                 
            </div>
        </div>
    );
};

export default Work;
