import { useState } from "react"
import { EXPERIENCES } from "../constants"
import { motion } from "motion/react"

const WorkExperience = () => {
  const [showAll, setShowAll] = useState(false)
  const INITIAL_COUNT = 3

  const displayedExperiences = showAll
    ? EXPERIENCES
    : EXPERIENCES.slice(0, INITIAL_COUNT)

  const toggleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll)
  }

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
        whileInView={{opacity: 1, y: 0}} 
        initial={{opacity: 0, y: -100}} 
        viewport={{ once: true, margin: "-100px" }}
        transition={{duration: 0.5}} 
        className="my-20 text-center text-4xl">Work 
        <span className="text-neutral-500"> Experience</span>
      </motion.h2>
      <div>
        {displayedExperiences.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: -100}}
              viewport={{ once: true, margin: "-100px" }}
              transition={{duration: 0.5}}
              className="w-full lg:w-1/4">
                <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: 100}}
            viewport={{ once: true, margin: "-100px" }}
            transition={{duration: 0.5}}
            className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400 text-justify lg:text-left">{experience.description}</p>
              {experience.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="mr-2 mt-4 inline-block whitespace-nowrap rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      {EXPERIENCES.length > INITIAL_COUNT && (
        <motion.div whileInView={{opacity: 1, y: 0}} initial={{opacity:0, y: 100}} viewport={{ once: true, margin: "-100px" }} transition={{duration: 0.5}} className="flex justify-center mt-12">
          <button
            onClick={toggleShowAll}
            className="inline-flex items-center gap-2 border border-white bg-white hover:bg-gray-200 text-gray-900 h-12 px-6 rounded-xl"
          >
            <span className="font-semibold">{showAll ? "Show Less" : "Load More "}</span>
          </button>
        </motion.div>
      )}
    </div>
  )
}

export default WorkExperience
