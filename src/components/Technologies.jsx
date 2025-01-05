import { SiTypescript } from "react-icons/si"
import { IoLogoJavascript } from "react-icons/io5";
import pythonLogo from "../assets/logos/python_logo.svg"
import { motion } from "motion/react"

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        },
    },
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            viewport={{ once: true, margin: "-100px" }}
            transition={{duration: 0.5}}
            className="my-20 text-center text-4xl">My <span className="text-neutral-500"> Main</span> Languages</motion.h2>
        <motion.div
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        viewport={{ once: true, margin: "-100px" }}
        transition={{duration: 0.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTypescript className="text-7xl text-typeScriptLogoColor"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(4.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <img src={pythonLogo} alt="Python Logo" className="w-20" />
            </motion.div>
            <motion.div 
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <IoLogoJavascript className="text-7xl text-javascriptLogoColor"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies
