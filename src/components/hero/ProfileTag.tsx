import Image from "next/image"
import { motion } from "motion/react"

const ProfileTag = () => {
  return (
    <div className="px-7 md:px-18 lg:px-30 mb-10 xl:px-36 ">
      <motion.div
      whileHover={{scale: 1.03}}
      whileTap={{scale: 0.97}}
      className="flex items-center md-contrast cursor-pointer dark:bg-slate-200/20 p-2 pr-4 rounded-full border border-zinc-700 dark:border-slate-200/20 dark:hover:border-blue-400 hover:border-primary transition-colors">
        <div className="size-8 mr-2 relative rounded-full overflow-hidden">
        <Image alt='Profile Picture' src='/images/profile.png' fill />
      </div>
      <p className="text-sm font-semibold">Cassius Samuel</p>
      </motion.div>
    </div>
  )
}

export default ProfileTag