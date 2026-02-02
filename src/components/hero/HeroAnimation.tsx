'use client'

import { Lightbulb, Code2, Rocket } from "lucide-react";
import { motion } from "motion/react";

const boxStyle = 'box z-20 relative dark:bg-zinc-800 bg-gray-100 size-30 rounded-xl border border-gray-100 dark:border-zinc-800 transition-all duration-200 flex flex-col items-center justify-center group hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1';

const strokeStyle = 'w-18 opacity-50 lg:rotate-90 text-purple-500'

const HeroAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: .6 }}
      viewport={{once: true}}
      className='flex flex-col h-full w-full items-center lg:scale-125'
    >
      <div className="flex max-sm:scale-80 transition-transform items-center max-lg:mt-10 relative justify-center lg:flex-col lg:gap-y-8 py-7 w-full max-w-fit mx-auto">
        
        {/* Moving Dots */}
        <div className="moving-dot absolute size-1.5 bg-blue-500 rounded-full top-[13%] left-1/2 -translate-x-1/2" />
        <div className="moving-dot two absolute size-1.5 bg-purple-500 rounded-full top-[13%] max-lg:left-[15%] lg:left-1/2 -translate-x-1/2" />

        {/* Box 1: Concept/Ideas */}
        <div className={boxStyle}>
          <div className='bg-blue-100/20 rounded-lg text-blue-600 dark:text-blue-300 border relative dark:border-blue-500/20 border-blue-500/30 mb-1.5 p-3.5'>
            <Lightbulb size={26} />
            <Lightbulb className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-md opacity-50" size={26} />
          </div>
          <span className="text-sm opacity-70 font-medium">Ideas</span>
        </div>

        <hr className={strokeStyle} />

        {/* Box 2: Development/Code */}
        <div className={boxStyle}>
          <div className='bg-purple-100/20 rounded-lg text-purple-600 dark:text-purple-300 border relative dark:border-purple-500/20 border-purple-500/30 mb-1.5 p-3.5'>
            <Code2 size={26} />
            <Code2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-md opacity-50" size={26} />
          </div>
          <span className="text-sm opacity-70 font-medium">Code</span>
        </div>

        <hr className={strokeStyle} />

        {/* Box 3: Deployment/Launch */}
        <div className={`${boxStyle} orange`}>
          <div className='bg-orange-100/20 rounded-lg text-orange-600 dark:text-orange-300 border relative dark:border-orange-500/20 border-orange-500/30 mb-1.5 p-3.5'>
            <Rocket size={26} />
            <Rocket className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-md opacity-50" size={26} />
          </div>
          <span className="text-sm opacity-70 font-medium">Launch</span>
        </div>

      </div>
    </motion.div>
  );
};

export default HeroAnimation;