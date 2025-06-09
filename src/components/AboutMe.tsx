import  ParticleBackground  from "./ParticleBackground";
import dp from "../assets/officialProfile.jpg";
import {HeroIntro} from "./HeroIntro"
import { LinkedinIcon } from "../icons/LinkedinIcon";
import { GithubIcon } from "../icons/GithubIcon";


import leetcode from "../assets/leetcode.svg"
export const AboutMe = () => {


    return (
    <>
        <ParticleBackground/>
        <div id = "Home" className = "flex flex-col items-center justify-center text-slate-300 p-4  py-4  h-screen max-w-[50rem]">
            
              <div className = "flex flex-col items-center gap-2 p-4">
                    <div>
                        <img src = {dp} className = "rounded-full h-30 border-3 border-slate-100"/> 
                    </div>
                    <div className = "text-center">
                        <HeroIntro/>
                    </div>
                  <div className = "flex items-center gap-4">
                    <a href = "https://www.linkedin.com/in/muthyalaharimouli/" target = "_blank" className ="cursor-pointer">
                        <LinkedinIcon />
                    </a>
                    <a href = "https://github.com/harimouli" target = '_blank' className = "cursor-pointer">
                        <GithubIcon/>
                    </a>
                     <a href = "https://leetcode.com/u/MuthyalaHariMouli/" target ="_blank" className = "cursor-pointer">
                        <img  src = {leetcode} alt = "codeImg"/>

                     </a>


                        

                    </div>
            </div>
        </div>
    </>
    )
}


