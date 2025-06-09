
import { ConnectMeIcon } from "../icons/ConnectMeIcon"
import { GithubIcon } from "../icons/GithubIcon"
import { LinkedinIcon } from "../icons/LinkedinIcon"
import { MailIcon } from "../icons/MailIcon"
import { PhoneIcon } from "../icons/PhoneIcon"
export const Footer = () => {
    
    return (
        <div className = "bg-[#181717] w-screen p-4 flex flex-col items-center justify-center overflow-x-hidden">
                
            <div className = "flex flex-col items-center">
                    <div className = "flex items-center">
                        {<ConnectMeIcon/>}
                      <h3 className="pl-2 text-lg font-semibold text-slate-300 underline ">  Connect with Me</h3>

                    </div>
                <div className = "p-4 flex gap-6 items-center" >
                   
                       <a href = "https://github.com/harimouli" target="_blank">
                            <GithubIcon/>
                       </a>
                       <a href = "" target="_blank">
                            <LinkedinIcon/>
                       </a>
                        <a  className = "cursor-pointer" onClick={() => { window.location.href = "mailto:harimoulimuthyala@gmail.com"; }}>
                                <MailIcon/>
                        </a>
                        <a href = "tel:8639272752">
                            <PhoneIcon/>

                        </a>

                    </div>
                </div>

                
                 <p className = "text-slate-300">©  {new Date().getFullYear()} Hari Mouli Muthyala. All rights reserved.</p>
              

        </div>
    )
}


