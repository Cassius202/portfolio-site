import { Project } from "@/constants/interface";
import Image from "next/image";
import { motion } from "framer-motion"; // Changed to standard framer-motion
import { ExternalLink } from "lucide-react";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="group h-112 w-full flex flex-col overflow-hidden rounded-xl bg-white dark:bg-zinc-900 border border-slate-300 dark:border-zinc-800 shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Container */}
      <motion.div
        className="relative h-3/5 w-full overflow-hidden bg-slate-100 dark:bg-zinc-800"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={project.image}
          fill
          alt={project.name}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Tech Stack Icons */}
        <div className="absolute bottom-3 left-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.icons.map((icon, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="w-8 h-8 bg-white dark:bg-zinc-900 rounded-full p-1.5 shadow-md flex items-center justify-center"
            >
              <Image 
                src={icon} 
                alt="tech icon" 
                width={20} 
                height={20} 
                className="object-contain" 
              />
            </motion.div>
          ))}
        </div>

        {/* View Project Button (Floating) */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-full shadow-lg"
          >
            <ExternalLink size={18} />
          </motion.div>
        </a>
      </motion.div>

      {/* Content */}
      <div className="flex flex-col justify-between h-2/5 p-5 bg-gradient-to-b from-white to-slate-50 dark:from-zinc-900 dark:to-zinc-900/50">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.name}
            </h4>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
              {project.stack}
            </span>
          </div>
          <p className="text-sm text-slate-600 dark:text-zinc-400 line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Bottom Action */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:gap-3 transition-all group/link"
        >
          View Project
          <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;