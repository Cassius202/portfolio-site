"use client";

import Background from "./Background";
import HeroAnimation from "./HeroAnimation";
import ProfileTag from "./ProfileTag";
import EmailMe from "./EmailMe";
import ParticlesComponent from "@/app/reviews/Particles";

import { useState, useEffect } from "react";
import { cn } from "@/utils/cn";

const Hero = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleParticleHide = () => {
      setScrolled(window.scrollY > window.innerHeight / 2);
    }
    window.addEventListener('scroll', handleParticleHide);

    return () => window.removeEventListener("scroll", handleParticleHide)
  },[])

  return (
    <section id='home' className="relative min-h-screen w-full h-max overflow-hidden">
      <Background />
      {/* main content  */}
      <span className={cn("opacity-0 dark:opacity-50 pointer-events-none -z-20 overflow-hidden", scrolled && 'hidden')}>
        <ParticlesComponent id="hero-particle" />
      </span> 
      <div className="relative z-40 lg:grid grid-cols-[70%_28%] items-center max-w-full pt-28 xl:px-20 xl:pb-10">
        
        <div className="w-full relative z-10 flex flex-col items-center lg:items-start mb-5"
        >
          <ProfileTag />
          {/* Hero Content */}

          <div className="px-7 sm:px-14 md:px-18 lg:px-30 xl:px-36">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold sm:leading-16 lg:leading-18 lg:text-left">
              Building Digital{" "}
              <span className="bg-linear-to-r from-primary dark:from-blue-500 to-purple-800 dark:to-purple-400 bg-clip-text text-transparent">
                Experiences
              </span>
            </h1>
            <p className="subtitle mt-4 lg:text-left md:text-xl lg:text-2xl lg:mt-6 leading-loose ">
              {`Transforming complex business goals into seamless digital solutions. I build the web presence your brand deserves. Ready to start your project? Let's connect!`}
            </p>
            <EmailMe />
          </div>
        </div>

        <HeroAnimation />
      </div>
    </section>
  );
};

export default Hero;
