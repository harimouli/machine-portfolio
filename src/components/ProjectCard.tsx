
import { GithubIcon } from "../icons/GithubIcon";

import { LiveIcon } from "../icons/LiveIcon";

import { TypescriptIcon } from "../icons/TypescriptIcon"
import { NodejsIcon } from "../icons/NodejsIcon"
import { ReactjsIcon } from "../icons/ReactjsIcon"
import { HtmlIcon } from "../icons/HtmlIcon";
import { TailwindcssIcon } from "../icons/TailwindcssIcon";
import { ExpressIcon } from "../icons/ExpressIcon";
import { MongoDbIcon } from "../icons/MongoDbIcon";

import { type ProjectProps } from "../utils/projects";



const iconMap: Record<string, React.ReactElement> = {
  "TypeScript": <TypescriptIcon />,
  "Node.js": <NodejsIcon />,
  "React": <ReactjsIcon />,
  "HTML": <HtmlIcon />,
  "TailwindCSS": <TailwindcssIcon />,
  "Express": <ExpressIcon />,
  "MongoDB": <MongoDbIcon/>
};

export const ProjectCard = (props: ProjectProps) => {

    return (
        <div className = "flex-col items-center   w-64 rounded-md shadow-slate-300 shadow-md transition duration-300  ease-in-out border-t border-slate-300 hover:scale-100 hover:shadow-lg font-sans">
    
                <div className = "p-3 h-fit  w-64 text-[#9F9FA9]">
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
                      <div className = "flex flex-wrap text-slate-300 text-sm pt-2">
                            {props.description}
                       </div>
                        <div className = "flex flex-wrap gap-1 mt-2 items-center w-full">
                            {props.tools?.map(tool => (
                                <span key={tool}>
                                    {iconMap[tool] || tool}
                                </span>
                                ))}
                        </div>
                </div>

        </div>
    )
}