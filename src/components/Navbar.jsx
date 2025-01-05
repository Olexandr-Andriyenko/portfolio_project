import logo from "../assets/this_olexandr_logo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="lg:mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20 sm:w-20 md:w-32 lg:w-40" src={logo}/>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://de.linkedin.com/in/olexandr-andriyenko-4a14551b3" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Olexandr-Andriyenko" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.youtube.com/@this.olexandr-z3v" target="_blank">
          <FaYoutube />
        </a>
      </div>

    </nav>
  )
}

export default Navbar
