import  ParticleBackground  from "./ParticleBackground";
import dp from "../assets/officialProfile.jpg";
import {HeroIntro} from "./HeroIntro"
import { LinkedinIcon } from "../icons/LinkedinIcon";
import { GithubIcon } from "../icons/GithubIcon";
import { LeetcodeIcon } from "../icons/LeetcodeIcon";

import { GfgIcon } from "../icons/GfgIcon";
import { ArrowDownIcon } from "../icons/ArrowDownIcon";
import { ArrowRightIcon } from "../icons/ArrowRightIcon";
import MouliResume from "../assets/MouliResume.pdf"




export const Home = () => {


    return (
    <>
     
        <ParticleBackground/>
        <div id = "home" className = "flex flex-col items-center justify-center text-slate-300 p-6  py-4  h-screen max-w-[50rem] font-sans mt-10 md:mt-4">
            
              <div className = "flex flex-col items-center gap-2 p-4">
                    <div>
                        <img src = {dp} className = "rounded-full h-30 border-3 border-slate-100"/> 
                    </div>
                    <div className = "text-center">
                        <HeroIntro/>
                    </div>
                
                  <div className = "flex items-center gap-6 p-4 font-sans">
                    <a href = "https://www.linkedin.com/in/muthyalaharimouli/" target = "_blank" className ="cursor-pointer hover:transition duration-100 hover:scale-125">
                        <LinkedinIcon />
                    </a>
                    <a href = "https://github.com/harimouli" target = '_blank' className = "cursor-pointer hover:transition duration-100 hover:scale-125">
                        <GithubIcon/>
                    </a>
                     <a href = "https://leetcode.com/u/MuthyalaHariMouli/" target ="_blank" className = "cursor-pointer hover:transition duration-100 hover:scale-125">
                        <LeetcodeIcon/>
                     </a>

                     <a href = "https://www.geeksforgeeks.org/user/harimoulic3kk/" target="_blank" className = "cursor-pointer hover:transition duration-100 hover:scale-125">
                        <GfgIcon/>
                     </a>
                        

                    </div>

                    <div className = "flex flex-col md:flex-row gap-6 p-6 justify-between font-sans" >
                        <a href = "#contact" className = "bg-white border-1 border-white py-2 p-1 rounded-2xl text-slate-900 font-medium flex items-center cursor-pointer hover:transition ease-out hover:scale-120 duration-300 hover:bg-transparent hover:text-indigo-100">
                            Connect Me Here <ArrowRightIcon/>
                        </a>
                    <a href={MouliResume} download={MouliResume} target="_blank" rel="noopener noreferrer">
                       <div  className = "bg-white border-1 justify-center border-white py-2 px-6 rounded-2xl flex items-center cursor-pointer font-medium text-slate-950 hover:transition ease-out hover:scale-120 duration-300 hover:bg-transparent hover:text-indigo-100" >
                          
                                Resume  {<ArrowDownIcon/>}
                       </div>
                    </a>
                    </div>  


                    
            </div>
        </div>
    </>
    )
}






