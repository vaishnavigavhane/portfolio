import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MobileNav } from "./MobileNav";

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
                <nav>
                    <div className="container flex justify-between items-center py-6">
                        <div className="logo text-white text-3xl font-bold">VG</div>
                        <div className="navlinks hidden md:block">
                           <ul className="flex items-center gap-3 text-gray-400 text-lg">
                            <li><a href="#About" className="inline-block py-1 px-2 hover:font-semibold hover:text-sky-600">About</a></li>
                            <li><a href="#experience" className="inline-block py-1 px-2 hover:font-semibold hover:text-sky-600">Experience</a></li>
                            {/* <li><a href="" className="inline-block py-1 px-2 hover:font-semibold hover:text-sky-600">Skills</a></li> */}
                            <li><a href="#Projects" className="inline-block py-1 px-2 hover:font-semibold hover:text-sky-600">Projects</a></li>
                            {/* <li><a href="" className="inline-block py-1 px-2 hover:font-semibold hover:text-sky-600">Certifications</a></li> */}
                            <li><a href="#Contact" className="inline-block py-1 px-2 hover:font-semibold hover:text-sky-600">Contact</a></li>
                           <li className="ml-12">
                            <button className="bg-gradient-to-br from-text-primary to-text-primary  text-white px-4 py-2 rounded-lg hover:bg-cyan-800">Resume</button>
                           </li>
                           </ul>
                        </div>  
                        {/* <div className="md:hidden">
                            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-800">Resume</button>
                        </div> */}
                        <div className="md:hidden" onClick={()=> setMenuOpen(!menuOpen)}>
                            <GiHamburgerMenu className="text-white text-2xl"/>
                        </div>
                    </div>
                </nav>
               <MobileNav menuOpen={menuOpen}/>
        </>
    )
}