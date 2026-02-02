import { techStack } from "@/constants/assets"
import { cn } from "@/utils/cn"
import Image from "next/image"

const TechStack = () => {
  return (
    <div className="my-20 flex flex-col gap-8 items-center">
      <div className="px-5 sm:px-10 md:px-18 lg:px-30">
        <h1 className="title">
          Build Tools
        </h1>
        <p className="title-string leading-relaxed">
          {"I build high-performance digital experiences using a modern stack of React, Node.js, and Framer Motion. By combining robust architecture with fluid animations, I ensure your website isn't just responsive—it’s unforgettable."}
        </p>
      </div>
      <div className="w-screen slider-container overflow-hidden border-y py-4 border-slate-200 dark:border-slate-800">
        <div className="slider flex w-max">
          {techStack.map((item) => {
            return <div key={item.id} className="ml-12 max-sm:ml-5 shrink-0 basis-50 max-md:basis-35 max-[576px]:basis-20 flex flex-col gap-y-4">
              <div className={cn("h-30 max-sm:h-18 w-full relative", item.label === "Express" && "dark:invert")}  >
                 <Image src={item.logo} alt={'stack image'} fill /> 
              </div>
              <span className="text-center">
                {item.label}
              </span>
            </div>
          })}
           {techStack.map((item) => {
            return <div key={item.id} className="ml-12 max-md:ml-5 shrink-0 basis-50 max-md:basis-35 max-[576px]:basis-20 flex flex-col gap-y-4">
              <div className={cn("h-30 max-sm:h-18 w-full relative", item.label === "Express" && "dark:invert")}  >
                 <Image src={item.logo} alt={'stack image'} fill /> 
              </div>
              <span className="text-center">
                {item.label}
              </span>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default TechStack