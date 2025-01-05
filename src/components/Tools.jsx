import htmlLogo from "../assets/logos/html_logo.svg"
import cssLogo from "../assets/logos/css_logo.svg"
import reactLogo from "../assets/logos/react_logo.svg"
import mongoDbLogo from "../assets/logos/mongoDb_logo.svg"
import expressLogo from "../assets/logos/express_logo.png"
import nodejsLogo from "../assets/logos/nodejs_logo.svg"
import playwrightLogo from "../assets/logos/playwright_logo.svg"
import seleniumLogo from "../assets/logos/selenium_logo.svg"
import webdriverioLogo from "../assets/logos/webdriverio_logo.png"
import bitbucketLogo from "../assets/logos/bitbucket_logo.svg"
import dockerLogo from "../assets/logos/docker_logo.svg"
import gitlabLogo from "../assets/logos/gitlab_logo.svg"
import awsLogo from "../assets/logos/aws_logo.svg"
import wordpressLogo from "../assets/logos/wordpress_logo.svg"
import numpyLogo from "../assets/logos/numpy_logo.svg"
import pandasLogo from "../assets/logos/pandas_logo.svg"
import matplotlibLogo from "../assets/logos/matplotlib_logo.svg"
import postmanLogo from "../assets/logos/postman_logo.svg"
import { motion } from "motion/react"

const iconVariants = (duration) => ({
    initial: {y: -6},
    animate: {
        y: [6, -6],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        },
    },
})

const Tools = () => {
  return (
    <div className="relative border-b border-neutral-900 pb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mt-10">
                    <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
                        <div>
                            <motion.h2 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} viewport={{ once: true, margin: "-100px" }} transition={{duration: 0.5}} className='text-center text-4xl'>My Journey</motion.h2>
                            <motion.p whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} viewport={{ once: true, margin: "-100px" }} transition={{duration: 0.5}} className='my-2 max-w-xl pt-6 text-justify lg:text-left'>
                            I began my path in tech by diving into test automation, focusing on Selenium and Playwright to ensure robust, end-to-end quality. Over time, I expanded my skill set to include web development with the MERN stack (MongoDB, Express.js, React, Node.js). By combining these two domains, I can create high-performing applications while maintaining thorough, automated test coverage.<br /><br />
                            In the box you’ll find a curated list of the technologies, I’ve used in professional settings. Each tool and framework represents hands-on experience gained through real-world projects, demonstrating both my breadth of expertise and my adaptability in ever-evolving tech landscapes.
                            </motion.p>
                            
                        </div>
                        <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: 100}} viewport={{ once: true, margin: "-100px" }} transition={{duration: 0.5}} className='border border-purple-800 rounded-lg md:p-7 py-7  flex flex-col gap-8 items-center shadow-md shadow-slate-600'>
                            <h3 className='text-2xl text-slate-400'>Skills & Expertise</h3>
                            <div className='flex items-center justify-center flex-wrap gap-3'>
                                <motion.div 
                                variants={iconVariants(2.5)}
                                initial="initial"
                                animate="animate"
                                className='border border-purple-800 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-sm shadow-slate-600'>
                                    <img src={htmlLogo} alt="" className='w-10' />
                                    <span className='font-semibold'>HTML</span>
                                </motion.div>
                                <motion.div 
                                variants={iconVariants(4.5)}
                                initial="initial"
                                animate="animate"
                                className='border border-purple-800 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-sm shadow-slate-600'>
                                    <img src={cssLogo} alt="" className='w-8' />
                                    <span className='font-semibold'>CSS</span>
                                </motion.div>
                                <motion.div 
                                    variants={iconVariants(6.5)}
                                    initial="initial"
                                    animate="animate"
                                    className='border border-purple-800 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-sm shadow-slate-600'>
                                    <img src={reactLogo} alt="" className='w-10' />
                                    <span className='font-semibold'>React</span>
                                </motion.div>
                                <motion.div 
                                    variants={iconVariants(3.5)}
                                    initial="initial"
                                    animate="animate"
                                    className='border border-purple-800 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-sm shadow-slate-600'>
                                    <img src={mongoDbLogo} alt="" className='w-8 rounded-full' />
                                    <span className='font-semibold'>MongoDB</span>
                                </motion.div>
                                <motion.div 
                                    variants={iconVariants(7.5)}
                                    initial="initial"
                                    animate="animate"
                                    className='border border-purple-800 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-sm shadow-slate-600'>
                                    <img src={expressLogo} alt="" className='w-8' />
                                    <span className='font-semibold'>Express.js</span>
                                </motion.div>
                                <motion.div 
                                    variants={iconVariants(2.5)}
                                    initial="initial"
                                    animate="animate"
                                    className='border border-purple-800 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-sm shadow-slate-600'>
                                    <img src={nodejsLogo} alt="" className='w-8 rounded-full' />
                                    <span className='font-semibold'>Node.js</span>
                                </motion.div>
                                <motion.div 
                                    variants={iconVariants(4.7)}
                                    initial="initial"
                                    animate="animate"
                                    className='border border-purple-800 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-sm shadow-slate-600'>
                                    <img src={playwrightLogo} alt="" className='w-10' />
                                    <span className='font-semibold'>Playwright</span>
                                </motion.div>
                                <motion.div 
                                    variants={iconVariants(4.2)}
                                    initial="initial"
                                    animate="animate"
                                    className='border border-purple-800 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-sm shadow-slate-600'>
                                    <img src={seleniumLogo} alt="" className='w-10' />
                                    <span className='font-semibold'>Selenium</span>
                                </motion.div>
                                <motion.div 
                                    variants={iconVariants(3.3)}
                                    initial="initial"
                                    animate="animate"
                                    className='border border-purple-800 flex items-center  w-max px-2 py-1 rounded-lg shadow-sm shadow-slate-600'>
                                    <img src={webdriverioLogo} alt="" className='w-10' />
                                    <span className='font-semibold'>WebdriverIO</span>
                                </motion.div>
                                <motion.div 
                                    variants={iconVariants(5.7)}
                                    initial="initial"
                                    animate="animate"
                                    className='border border-purple-800 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-sm shadow-slate-600'>
                                    <img src={bitbucketLogo} alt="" className='w-10' />
                                    <span className='font-semibold'>Bitbucket</span>
                                </motion.div>
                                <motion.div 
                                    variants={iconVariants(4.3)}
                                    initial="initial"
                                    animate="animate"
                                    className='border border-purple-800 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-sm shadow-slate-600'>
                                    <img src={dockerLogo} alt="" className='w-9' />
                                    <span className='font-semibold'>Docker</span>
                                </motion.div>
                                <motion.div 
                                    variants={iconVariants(5.2)}
                                    initial="initial"
                                    animate="animate"
                                    className='border border-purple-800 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-sm shadow-slate-600'>
                                    <img src={gitlabLogo} alt="" className='w-9' />
                                    <span className='font-semibold'>GitLab</span>
                                </motion.div>
                                <motion.div 
                                    variants={iconVariants(2.5)}
                                    initial="initial"
                                    animate="animate"
                                    className='border border-purple-800 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-sm shadow-slate-600'>
                                    <img src={awsLogo} alt="" className='w-9' />
                                    <span className='font-semibold'>AWS</span>
                                </motion.div>
                                <motion.div 
                                    variants={iconVariants(7.5)}
                                    initial="initial"
                                    animate="animate"
                                    className='border border-purple-800 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-sm shadow-slate-600'>
                                    <img src={wordpressLogo} alt="" className='w-9' />
                                    <span className='font-semibold'>Wordpress</span>
                                </motion.div>
                                <motion.div 
                                    variants={iconVariants(5.1)}
                                    initial="initial"
                                    animate="animate"
                                    className='border border-purple-800 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-sm shadow-slate-600'>
                                    <img src={numpyLogo} alt="" className='w-9' />
                                    <span className='font-semibold'>Numpy</span>
                                </motion.div>
                                <motion.div 
                                    variants={iconVariants(2.5)}
                                    initial="initial"
                                    animate="animate"
                                    className='border border-purple-800 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-sm shadow-slate-600'>
                                    <img src={pandasLogo} alt="" className='w-9' />
                                    <span className='font-semibold'>Pandas</span>
                                </motion.div>
                                <motion.div 
                                    variants={iconVariants(4.8)}
                                    initial="initial"
                                    animate="animate"
                                    className='border border-purple-800 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-sm shadow-slate-600'>
                                    <img src={matplotlibLogo} alt="" className='w-9' />
                                    <span className='font-semibold'>Matplotlib</span>
                                </motion.div>
                                <motion.div 
                                    variants={iconVariants(6.2)}
                                    initial="initial"
                                    animate="animate"
                                    className='border border-purple-800 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-sm shadow-slate-600'>
                                    <img src={postmanLogo} alt="" className='w-9' />
                                    <span className='font-semibold'>Postman</span>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Tools
