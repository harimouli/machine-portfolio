import { ProjectSection } from "./components/ProjectSection";
import { Navbar } from "./components/Navbar";
import { AboutMe } from "./components/AboutMe";
import { Footer } from "./components/Footer";



function App() {

  return (
    <>
    <div className = "relative z-10 flex flex-col items-center min-h-screen w-screen p-4 overflow-hidden bg-[#000000]" >
          
          <div className = "flex justify-center">   
            <Navbar />
          </div>
     
          <AboutMe/>
          <ProjectSection/>
    </div>
     <Footer/>
  </>
  )
}

export default App
