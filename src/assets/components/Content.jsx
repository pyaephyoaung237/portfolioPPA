import React from 'react';
import gtoImage from '../gto.jpg'; // Ensure this path is correct based on your project structure
import ppaImage from '../ppa.jpeg';

const Content = () => {
    return (
        <section className=" min-h-screen  text-white flex items-center justify-center px-6  relative overflow-hidden" id="content">

            {/* Background Grid Accent (Subtle dark RPG texture feel) */}
            <div className="absolute inset-0 bg-[radial-gradient(#cca43b_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03] pointer-events-none"></div>

            {/* Main Flex/Grid Container: Stacks on mobile, splits side-by-side on desktop */}
            <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 z-10">

                {/* LEFT SIDE: Profile Avatar Frame (Light and Glow Effects Removed) */}
                <div className="flex-shrink-0">
                    <div className="relative">
                        {/* Main Ring Container */}
                        <div className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full p-[3px] bg-gradient-to-b from-[#cca43b] via-[#91712a] to-[#3a2c0a]">
                            {/* Inner Dark Rim */}
                            <div className="w-full h-full rounded-full p-[2px] bg-[#0d070e]">
                                {/* Image */}
                                <img
                                    src={ppaImage}
                                    alt="Pyae Phyo Aung Profile"
                                    className="w-full h-full object-cover rounded-full filter contrast-[1.05] brightness-[0.95]"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE: Text Details */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 max-w-xl">
                    
                    {/* Subtitle Accent */}
                    <div>
                        <p className="font-serif italic text-[#cca43b]/70 text-base md:text-lg tracking-wider">
                            - Welcome to my Portfolio -
                        </p>
                    </div>

                    {/* Main Header / Name */}
                    <div className="space-y-4 w-full flex flex-col items-center md:items-start">
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#cca43b] font-bold tracking-widest uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                            Pyae Phyo Aung
                        </h1>

                        {/* Elegant Gold Divider Line (Aligned to left on desktop) */}
                        <div className="w-4/5 md:w-full max-w-md h-[2px] bg-gradient-to-r from-transparent md:from-[#cca43b]/60 via-[#cca43b]/60 md:via-[#cca43b]/30 to-transparent md:to-transparent shadow-[0_1px_3px_rgba(204,164,59,0.3)]"></div>
                    </div>

                    {/* Dynamic Title with Simulated Text Cursor */}
                    <div className="flex items-center space-x-1">
                        <h2 className="text-[#a855f7] font-mono font-medium tracking-[0.2em] text-lg md:text-xl uppercase">
                            Full Stack Developer
                        </h2>
                        <span className="w-[2px] h-6 bg-[#a855f7] animate-pulse"></span>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed border-l-2 border-[#cca43b]/30 pl-4 py-1 italic">
                        Passionated about crafting clean, scalable architectures and creating immersive digital environments.
                    </p>

                </div>

            </div>
        </section>
    );
};

export default Content;