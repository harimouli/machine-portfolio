import { ProjectSection } from "./components/ProjectSection"
import { Navbar } from "./components/Navbar"
function App() {

  return (
    <div className = "flex flex-col items-center min-h-screen w-screen p-8 bg-[#000000]" >
          <div className = "flex justify-center">   
            <Navbar />
          </div>
      <div  className = "flex flex-col items-center p-8 ">

          <ProjectSection/>
          <ProjectSection/>
          <ProjectSection/>


      </div>
    </div>
  )
}

export default App
