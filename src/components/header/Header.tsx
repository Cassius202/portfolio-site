'use client'

import Image from "next/image"
import Navigation from "./Navigation"
import ContactButton from "./ContactButton"
import ThemeToggle from "@/contexts/use-theme"
import SideBarIcon from "../side-bar/SideBarIcon"
import { useEffect, useState } from "react"
import { cn } from "@/utils/cn"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={cn("fixed z-40 w-full flex justify-between items-center h-14 bg-transparent dark:bg-slate-950  border-b border-blue-500/30 px-5 md:px-14 lg:px-24", isScrolled && 'shadow-md backdrop-blur backdrop-grayscale-75 dark:bg-slate-900/20')}>
     <div className="flex items-center gap-2">
       <div className="logo size-7 overflow-hidden relative">
        <Image alt='logo' src={'/logos/logo-dark.svg'} fill className="hidden dark:block object-contain" />
        <Image alt='logo' src={'/logos/logo-light.svg'} fill className="dark:hidden object-contain" />
      </div>
      <h4 className="font-medium text-lg">
        Cassius.dev
      </h4>
     </div>

     <Navigation />
     {/* third section  */}
     <div className="flex items-center gap-4">
        <ThemeToggle />
        <ContactButton />
        <SideBarIcon />
     </div>
    </header>
  )
}

export default Header