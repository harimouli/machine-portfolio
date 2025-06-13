import { ProjectSection } from "./components/ProjectSection";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import ContactMeForm from "./components/ContactMeForm"
import { Skils } from "./components/Skils";
import { AboutMe } from "./components/AboutMe";



function App() {

  return (
    <>
       <Navbar />
    <div className = "relative z-10  flex flex-col items-center min-h-screen w-screen p-8 soverflow-hidden bg-[#000000] font-sans" >
          <Home/>
          <ProjectSection/>
          <AboutMe/>
           <Skils/>
          <ContactMeForm/>
    </div>
  </>
  )
}

export default App
