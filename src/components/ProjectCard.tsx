
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

import {useRef} from "react"
import { JavascriptIcon } from "../icons/JavascriptIcon";
import { CssIcon } from "../icons/CssIcon";


const iconMap: Record<string, React.ReactElement> = {
  "TypeScript": <TypescriptIcon />,
  "Node.js": <NodejsIcon />,
  "React": <ReactjsIcon />,
  "HTML": <HtmlIcon />,
  "TailwindCSS": <TailwindcssIcon />,
  "Express": <ExpressIcon />,
  "MongoDB": <MongoDbIcon/>,
  "JavaScript": <JavascriptIcon/>,
  "CSS": <CssIcon/>
};

export const ProjectCard = (props: ProjectProps) => {
    const cardRef = useRef<HTMLDivElement>(null);



   /* const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x: number = e.clientX - rect.left;
        const y: number = e.clientY - rect.top;

        const centerX: number = rect.width / 2;
        const centerY: number = rect.height / 2;

        const rotateX: number = ((y - centerY) / centerY) * 30;
        const rotateY: number = ((x - centerX) / centerX) * -30;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }

    const resetTransform = () => {
        if (cardRef.current) {
            cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
        }
    }; */
    return (
        <div   ref = {cardRef} className = "flex-col items-center  h-64  w-64 rounded-md shadow-slate-300 shadow-md transition duration-300  ease-in-out border-t border-slate-300 hover:scale-100 hover:shadow-lg font-sans">
    
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