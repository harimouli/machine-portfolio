
import { GithubIcon } from "../icons/GithubIcon"
import { LinkedinIcon } from "../icons/LinkedinIcon"
export const Footer = () => {
    
    return (
        <div className = "bg-[#1f1e1e] w-screen p-8">
                <div className = "p-8">
                    <div className = "p-4">
                       <a href = "https://github.com/harimouli" target="_blank">
                            <GithubIcon/>
                       </a>
                       <a href = "" target="_blank">
                            <LinkedinIcon/>
                       </a>
                        <a href = "" target= "_blank">

                        </a>
                        
                    </div>

                </div>

        </div>
    )
}