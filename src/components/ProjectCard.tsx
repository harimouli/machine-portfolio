import type { ReactElement } from "react";

import { GithubIcon } from "../icons/GithubIcon";

import { LiveIcon } from "../icons/LiveIcon";


interface ProjectCardProps {
    projectImage:string
    title: string;
    githubUrl: string;
    liveUrl:string;
    tools?: ReactElement[]
}


export const ProjectCard = (props: ProjectCardProps) => {

    return (
        <div className = "flex-col items-center  h-72  w-64 rounded-md shadow-slate-300 shadow-md transition duration-300  ease-in-out border-t border-slate-300 hover:scale-105 hover:shadow-2xl">
                <div className= "h-40">
                    <img className = "h-full w-full rounded-md" src = {props.projectImage} alt = "project"/>
                </div>
                <div className = "p-4 h-72 w-64 text-[#9F9FA9]">
                        <div className = "flex items-center justify-between mt-2">
                            <div>
                                <a href = {props.githubUrl} target = "_blank">
                                        <GithubIcon/>
                                </a>
                            </div>
                            <div>
                          <h1 className = "text-[#F4F4F5] text-xl font-bold">
                             {props.title}
                          </h1>    
                        </div>
                            <div>
                                <a href = {props.liveUrl}>
                                     {<LiveIcon/>}
                                </a>
                            </div>
                        </div>

                        <div className = "flex mt-2 items-center">
                            {props.tools?.map((eachTool) => {
                                return eachTool
                                })}
                        </div>
                </div>

        </div>
    )
}