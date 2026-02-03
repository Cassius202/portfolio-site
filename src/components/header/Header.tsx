'use client'

import Image from "next/image"
import Navigation from "./Navigation"
import ContactButton from "./ContactButton"
import ThemeToggle from "@/contexts/use-theme"
import SideBarIcon from "../side-bar/SideBarIcon"
import { useState } from "react"
import { cn } from "@/utils/cn"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // useScroll is a Framer Motion hook that tracks scroll progress
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // 1. Determine if we are at the top for styling (isScrolled)
    setIsScrolled(latest > 20);

    // 2. Headroom Logic: 
    // Show if scrolling up OR at the very top.
    // Hide if scrolling down AND we've scrolled past the header height.
    if (latest > previous && latest > 150) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      animate={isVisible ? "visible" : "hidden"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 left-0 z-40 w-full flex justify-between items-center h-16 transition-colors duration-300 px-5 md:px-14 lg:px-24 border-b",
        isScrolled 
          ? "bg-white/70 dark:bg-slate-950/70 backdrop-blur-md border-blue-500/20 shadow-sm" 
          : "bg-transparent border-transparent",
        "transform-gpu"
      )}
    >
      <div className="flex items-center gap-2">
        <div className="logo size-7 overflow-hidden relative">
          <Image alt='logo' src={'/logos/logo-dark.svg'} fill className="hidden dark:block object-contain" />
          <Image alt='logo' src={'/logos/logo-light.svg'} fill className="dark:hidden object-contain" />
        </div>
        <h4 className="font-semibold text-lg tracking-tight">
          Cassius.dev
        </h4>
      </div>

      <Navigation />

      <div className="flex items-center gap-4">
        <div className="max-sm:hidden">
          <ThemeToggle />
        </div>
        <ContactButton />
        <SideBarIcon />
      </div>
    </motion.header>
  )
}

export default Header