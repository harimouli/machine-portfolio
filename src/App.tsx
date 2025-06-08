import { ProjectSection } from "./components/ProjectSection";
import { Navbar } from "./components/Navbar";
import { AboutMe } from "./components/AboutMe";
import { Footer } from "./components/Footer";

function App() {

  return (
    <>
    <div className = "flex overflow-x-hidden flex-col items-center min-h-screen w-screen p-10 bg-[#000000]" >
          <div className = "flex justify-center">   
            <Navbar />
          </div>
      <div  className = "flex flex-col items-center p-8 ">
          <AboutMe/>
          <ProjectSection/>
      </div>

    </div>
    <Footer/>
  </>
  )
}

export default App
