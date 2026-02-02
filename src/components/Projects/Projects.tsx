import { projects } from "@/constants/assets"
import ProjectCard from "./ProjectCard"

const Projects = () => {
  return (
    <div className="flex my-12 flex-col px-5 sm:px-12 md:px-18 lg:px-26 xl:px-35 items-center">
      <h1 className="title ">
        Portfolio Projects
      </h1>
      <p className="title-string">Projects that reflect my approach to problem-solving and design</p>
      <div className="grid w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 px-2.5">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects