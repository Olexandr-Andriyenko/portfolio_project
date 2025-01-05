import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Technologies from "./components/Technologies"
import Tape from "./components/Tape"
import WorkExperience from "./components/WorkExperience"
import Tools from "./components/Tools"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 overflow-hidden">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>    
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
      </div>
    
      <div className="-mx-[calc((100vw-100%)/2)]">
        <Tape />
      </div>

      <div className="container mx-auto px-8">
        <Technologies />
        <WorkExperience />
        <Tools />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App;
