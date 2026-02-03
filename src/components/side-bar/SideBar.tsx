// components/Navbar.tsx
'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useSidebarStore } from '@/store/useSidebarStore'
import { ChevronsLeft, SidebarClose } from 'lucide-react'
import { cn } from '@/utils/cn'
import ThemeToggle from '@/contexts/use-theme'
import { useTheme } from 'next-themes'
import { navLinks } from '@/constants/assets'
import { useEffect, useRef, useState } from 'react'

const SideBar = () => {
  const { theme } = useTheme()
  const { isOpen, close } = useSidebarStore();
  const sidebarRef = useRef<HTMLElement>(null)
  
  // Fix: Use useMediaQuery hook properly
  const [sm, setSm] = useState(false);

useEffect(() => {
    const mediaQuery: MediaQueryList = window.matchMedia('(max-width: 640px)');
    setSm(mediaQuery.matches);

    const handleMediaQueryChange = (e: MediaQueryListEvent): void => setSm(e.matches);
    
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "fixed inset-0 z-50 w-screen max-w-screen backdrop-blur-[3px] bg-black/20 transition-[width_colors]"
          )}
          onClick={() => close()}
        >
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            ref={sidebarRef}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside sidebar
            className={cn(
              "dark:bg-zinc-900 py-8 bg-zinc-100 fixed dark:dark-gradient right-0 transition-colors duration-400 pb-20 top-0 rounded-l-2xl z-50 h-screen",
              sm ? "w-68" : "w-85" // Use Tailwind classes or explicit values
            )}
          >
            <span 
              className="absolute top-4 right-6 btn-ghost dark:text-amber-200 group cursor-pointer"
              onClick={() => close()}
            >
              <SidebarClose className='rotate-180'/>
              <span className='absolute whitespace-nowrap text-xs p-1 px-2 bg-slate-300 rounded-lg right-full top-1/2 -translate-y-1/2 text-black dark:text-white  dark:bg-blue-950/40 -translate-x-2 origin-right scale-0 transition-transform group-hover:scale-100 duration-400'>Close sidebar</span>
            </span>
            
            <nav className={cn("pt-16 h-full flex flex-col pb-8", sm ? 'px-6' : 'px-10')}>
              <menu className="flex flex-col gap-y-8">
                {navLinks.map((link, index) => {
                  return (
                    <li
                      key={index}
                      className="group cursor-pointer text-slate-900 text-lg relative bg-slate-300 dark:bg-blue-950/40 hover:bg-blue-200 dark:text-slate-50 dark:hover:bg-slate-600 p-2 px-4 rounded-xl transition-colors"
                    >
                      <a href={`#${link.toLowerCase()}`} onClick={() => close()}>
                        {link}
                      </a>
                    </li>
                  )
                })}
              </menu>
              
              <div className="flex items-center gap-3 mt-auto">
                <button className="p-2 rounded-full bg-blue-500/50 dark:bg-slate-900">
                  <ThemeToggle />
                </button>
                <label className="text-slate-950 font-medium text-lg dark:text-slate-100">
                  {`Toggle ${theme === "dark" ? "light" : "dark"} theme`}
                </label>
              </div>
            </nav>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SideBar