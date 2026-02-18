import { motion, AnimatePresence } from "framer-motion"

export const MobileNav = ({ menuOpen }) => {
    return (
        <AnimatePresence mode="wait">
            {
                menuOpen && (
                    <motion.div initial={{ opacity: 0, y:-100 }} animate={{ opacity: 1, y:0 }} exit={{ opacity: 0, y:-50 }}
                        className="absolute top-16 left-0 w-full min-h-64 bg-indigo-700 z-20 flex items-center">
                        <ul className="text-white text-xl flex flex-col gap-y-3">
                            <li><a href="" className="px-5 font-semibold">About</a></li>
                            <li><a href="" className="px-5 font-semibold">Experience</a></li>
                            <li><a href="" className="px-5 font-semibold">Projects</a></li>
                            <li><a href="" className="px-5 font-semibold">Certifications</a></li>
                            <li><a href="" className="px-5 font-semibold">Contact</a></li>
                             <li className="px-5">
                            <button className="bg-gray-900 text-white px-3 py-1 rounded-lg hover:bg-cyan-800">Resume</button>
                           </li>
                        </ul>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}