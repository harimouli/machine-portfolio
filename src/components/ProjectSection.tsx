import { ProjectCard } from "./ProjectCard"

import { projects, type ProjectProps } from "../utils/projects";




export const ProjectSection = () => {
    return (
        <div  id = "projects" className = "p-2 mt-10">
                <div className = "flex items-center flex-col p-4">
                        <div className = "text-slate-300 text-2xl font-bold  p-2 rounded-xl flex items-center justify-center underline">
                            My Work   
                        </div>

                </div>
            <div className = "flex flex-wrap items-center gap-6 p-4">
                {
                    projects.map((eachProject: ProjectProps) => (
                        <ProjectCard
                            key={eachProject.title}
                            title={eachProject.title}
                            description={eachProject.description}
                            tools={eachProject.tools}
                            liveUrl={eachProject.liveUrl}
                            githubUrl={eachProject.githubUrl}
                        />
                    ))
                }
            
            </div>
        </div>
    )
}