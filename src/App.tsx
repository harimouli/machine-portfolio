import { ProjectCard } from "./components/ProjectCard"
import { TypescriptIcon } from "./icons/TypescriptIcon"
import { NodejsIcon } from "./icons/NodejsIcon"
import { ReactjsIcon } from "./icons/ReactjsIcon"
import Rank from "./assets/Rank.jpg"
function App() {

  return (
    <div className = "h-screen w-screen p-8 bg-[#000000] top-0 gap-4" >
      <div className = "flex flex-wrap p-4 gap-4">
          <ProjectCard projectImage={Rank} title= "Brainly" githubUrl="www.github.com" tools ={ [<TypescriptIcon/>, <NodejsIcon/>, <ReactjsIcon/>]} liveUrl = "www.github.com"/>
          <ProjectCard projectImage={Rank} title= "Brainly" githubUrl="www.github.com" tools ={ [<TypescriptIcon/>, <NodejsIcon/>, <ReactjsIcon/>]} liveUrl = "www.github.com"/>
          <ProjectCard projectImage={Rank} title= "Brainly" githubUrl="www.github.com" tools ={ [<TypescriptIcon/>, <NodejsIcon/>, <ReactjsIcon/>]} liveUrl = "www.github.com"/>
      </div>
    </div>
  )
}

export default App
