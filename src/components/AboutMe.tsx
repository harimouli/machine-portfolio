
import dp from "../assets/officialProfile.jpg";
import { aboutme } from "../utils/projects";
export const AboutMe = () => {

    return (

        <div id = "about-me" className = "flex flex-col text-slate-300 p-4 mt-10 py-4">
              <div className = "flex items-center flex-col p-4">
                        <div className = "text-white text-2xl font-bold  p-2 rounded-xl flex items-center justify-center underline">
                            About Me
                        </div>

                </div>
              <div className = "flex flex-col items-center md:flex-row p-4 gap-2 border-1 border-slate-300 rounded-2xl shadow-md shadow-slate-200">
                    <div>
                        <img src = {dp} className = "rounded-full h-60 border-2 border-slate-300"/> 
                    </div>
                    <div className = "pl-2 flex flex-col py-4">
        
                            <div className = "pb-2 text-2xl font-bold text-center md:text-start">

                                <h2>Hari Mouli Muthyala </h2>
                            </div>
                            <p className="text-slate-300 text-md leading-relaxed max-w-xl pb-2">
                                    {aboutme}
                                    <br />
                                        <span className="text-white font-semibold">~MouliTheMachine</span>
                            </p>


                    </div>


              </div>

        </div>
    )
}


