import { ProjectCard } from "./ProjectCard"


import { TypescriptIcon } from "../icons/TypescriptIcon"
import { NodejsIcon } from "../icons/NodejsIcon"
import { ReactjsIcon } from "../icons/ReactjsIcon"
import { HtmlIcon } from "../icons/HtmlIcon";
import { TailwindcssIcon } from "../icons/TailwindcssIcon";
import { ExpressIcon } from "../icons/ExpressIcon";
import { MongoDbIcon } from "../icons/MongoDbIcon";


export const ProjectSection = () => {
    return (
        <div id = "projects-section" className = "p-2">
                <div className = "flex items-center flex-col p-4">
                        <div className = "text-slate-300 text-2xl font-bold border border-slate-100 p-2 rounded-xl flex items-center justify-center">
                            My Work   
                        </div>

                </div>
            <div className = "flex flex-wrap items-center gap-6 p-4">
                     <ProjectCard  title= "Brainly" githubUrl="www.github.com" tools ={ [<TypescriptIcon/>, <NodejsIcon/>, <ReactjsIcon/>,  <HtmlIcon/>, <TailwindcssIcon/>, <ExpressIcon/>, <MongoDbIcon/>]} liveUrl = "www.github.com"/>
                     <ProjectCard  title= "Brainly" githubUrl="www.github.com" tools ={ [<TypescriptIcon/>, <NodejsIcon/>, <ReactjsIcon/>, <HtmlIcon/>, <TailwindcssIcon/>, <ExpressIcon/>, <MongoDbIcon/>]} liveUrl = "www.github.com"/>
                     <ProjectCard  title= "Brainly" githubUrl="www.github.com" tools ={ [<TypescriptIcon/>, <NodejsIcon/>, <ReactjsIcon/>, <HtmlIcon/>, <TailwindcssIcon/>, <ExpressIcon/>, <MongoDbIcon/>]} liveUrl = "www.github.com"/>
                     <ProjectCard  title= "Brainly" githubUrl="www.github.com" tools ={ [<TypescriptIcon/>, <NodejsIcon/>, <ReactjsIcon/>, <HtmlIcon/>, <TailwindcssIcon/>, <ExpressIcon/>, <MongoDbIcon/>]} liveUrl = "www.github.com"/>
            
            </div>
        </div>
    )
}