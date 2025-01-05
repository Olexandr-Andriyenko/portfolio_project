import aboutImg from "../assets/me_with_laptop.png"
import { ABOUT_TEXT_1 } from "../constants"
import { ABOUT_TEXT_2 } from "../constants"
import { motion } from "motion/react"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2 
            whileInView={{opacity: 1, y: 0}} 
            initial={{opacity: 0, y: -100}} 
            transition={{duration: 0.5}} 
            viewport={{ once: true, margin: "-100px" }}
            className="my-20 text-center text-4xl">
                About<span className="text-neutral-500"> Me</span>
        </motion.h2>
        <div className="flex flex-wrap">
            <motion.div 
                whileInView={{opacity: 1, x: 0}} 
                initial={{opacity: 0, x: -100}} 
                transition={{duration: 0.5}} 
                viewport={{ once: true, margin: "-100px" }}
                className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img 
                    className="rounded-2xl" 
                    src={aboutImg} 
                    alt="About Me Image"
                    style={{
                        width: "80%",
                        height: "auto",
                        maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 15%)',
                        WebkitMaskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 15%)',
                      }}
                    />
                </div>
            </motion.div>
            <motion.div 
                whileInView={{opacity: 1, x: 0}} 
                initial={{opacity: 0, x: 100}} 
                viewport={{ once: true, margin: "-100px" }}
                transition={{duration: 0.5}} 
                className="w-full lg:w-1/2">
                    <div className="flex flex-col gap-4 justify-center lg:justify-start">
                        <p className="my-2 max-w-xl pt-6 text-justify lg:text-left">{ABOUT_TEXT_1}</p>
                        <p className="max-w-xl text-justify lg:text-left">{ABOUT_TEXT_2}</p>
                    </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About
