import { ProjectCard } from "./ProjectCard"

import { projects, type ProjectProps } from "../utils/projects";




export const ProjectSection = () => {
    return (
        <div  id = "projects" className = "transition-transform ease-out duration-300 will-change-transform mt-10 flex flex-col items-center overflow-x-hidden font-sans md:mb-8">
                <div className = "flex items-center p-4">
                        <div className = "text-white text-2xl font-bold  p-2 rounded-xl flex items-center justify-center underline">
                            My Work   
                        </div>

                </div>
            <div className = "flex flex-wrap justify-center items-center gap-8 p-8">
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