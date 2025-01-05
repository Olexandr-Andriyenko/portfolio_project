import { PROJECTS } from "../constants"
import { motion } from "motion/react"

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} viewport={{ once: true, margin: "-100px" }} transition={{duration: 0.5}} className="my-20 text-center text-4xl">My Last <span className="text-neutral-500">Projects</span></motion.h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 9, x: -100}} viewport={{ once: true, margin: "-100px" }} transition={{duration: 0.5}} className="w-full lg:w-1/5 justify-center flex">
                            <img 
                            src={project.image} 
                            width={250} 
                            height={250} 
                            alt={project.title}
                            className="mb-6 rounded shadow-md shadow-slate-600">
                            </img>
                        </motion.div>
                        <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: 100}} viewport={{ once: true, margin: "-100px" }} transition={{duration: 0.5}} className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">
                                {project.title}
                            </h6>
                            <p className="mb-4 text-neutral-400 text-justify lg:text-left">
                                {project.description}
                            </p>
                            {project.technologies.map((technology, index) => (
                                <span key={index} className="mr-2 rounded bg-neutral-900 px-2 whitespace-nowrap py-1 text-sm font-medium text-purple-900">
                                    {technology}
                                </span>
                            ))}
                            <div className="flex justify-start mt-8">
                                <a href="https://github.com/Olexandr-Andriyenko/react-python-project" target="_blank">
                                    <button className="inline-flex items-center gap-2 border border-white bg-white hover:bg-gray-200 text-gray-900 h-12 px-6 rounded-xl">
                                        <span>Show Project</span>
                                    </button>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default Projects
