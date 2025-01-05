import { HERO_CONTENT } from "../constants";
import profileImage from "../assets/Olex_Profile_Dark.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-col lg:flex-row">
        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-10 lg:pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Olexandr Andriyenko
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Test Automation Engineer
            </motion.span>
            {/* Mobile Image */}
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={profileImage}
              alt="Profile Image"
              className="block lg:hidden w-3/4 mt-8 rounded-2xl"
              style={{
                maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 50%)",
                WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 50%)",
              }}
            />
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Desktop Image */}
        <div className="w-full lg:w-1/2 lg:p-8 hidden lg:flex">
          <div className="justify-center flex">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={profileImage}
              alt="Profile Image"
              className="w-full object-cover rounded-2xl"
              style={{
                width: "100%",
                height: "auto",
                maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 50%)",
                WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 1) 50%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
