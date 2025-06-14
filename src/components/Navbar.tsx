import { NavButton } from "./NavButton";

import {navbuttonitems} from "../utils/navbuttonitems";

export const Navbar = () => {
    return (
            <nav className = "flex justify-center bg-black fixed top-0 left-0 w-screen h-16 z-50">
            <div className = "flex justify-center items-center gap-4 border bg-black opacity-100 border-slate-200 p-2  fixed rounded-xl shadow-slate-300 shadow-md top-2 font-sans"> 
                { navbuttonitems.map((eachBtn, index)=> (
                        <NavButton key = {index} text= {eachBtn} />
                    ))
                }
            </div>
            </nav>
    )
}