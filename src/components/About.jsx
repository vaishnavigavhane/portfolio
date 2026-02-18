export function About() {
    return (
        <section className="py-20 px-6 text-white" id="About">
            <div className="container flex flex-col lg:flex-row items-center gap-20">

             
                <div className="lg:w-1/2">
                    <h2 className="text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-gray-50 mb-4">
                     I’m a Front-End Developer focused on building responsive, user-friendly, and 
                     high-performance web interfaces. I combine strong front-end expertise with a 
                     solid understanding of backend fundamentals to deliver solutions that are visually
                      engaging and technically robust.
                    </p>
                    <p className="text-gray-50 mb-6">
                      Passionate about writing clean, maintainable code, I aim to craft digital experiences
                       that seamlessly blend functionality, design, and user experience.
                    </p>
                   <div className="flex flex-wrap gap-3">
                        <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">React</span>
                        <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full">JavaScript</span>
                        <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full">HTML</span>
                        <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full">CSS</span>
                        <span className="px-4 py-2 bg-slate-100 text-slate-800 rounded-full">Tailwind CSS</span>
                        <span className="px-4 py-2 bg-red-100 text-red-800 rounded-full">Bootstrap</span>
                        <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full">PHP</span>
                        <span className="px-4 py-2 bg-violet-100 text-violet-800 rounded-full">Laravel</span>
                        <span className="px-4 py-2 bg-rose-100 text-rose-800 rounded-full">MySQL</span>
                        <span className="px-4 py-2 bg-teal-100 text-teal-800 rounded-full">Canva</span>
                    </div>
                </div>

              
                <div className="lg:w-1/2 flex flex-col gap-6">   
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="p-4 bg-white shadow-lg rounded-lg text-center">
                            <h3 className="text-2xl font-bold text-gray-800">2.5+</h3>
                            <p className="text-gray-800 text-sm">Years Experience</p>
                        </div>
                        <div className="p-4 bg-white shadow-lg rounded-lg text-center">
                            <h3 className="text-2xl font-bold text-gray-800">20+</h3>
                            <p className="text-gray-800 text-sm">Projects Completed</p>
                        </div>
                    </div>

                  
                    <div className=" w-full h-48 bg-gradient-to-r from-sky-700 to-sky-950 rounded-lg shadow-lg flex flex-col items-center justify-center text-white font-bold text-xl">
        <p>💼 Open to Frontend Developer Roles</p>
        <p>📍 Remote / On-site (Immediate Joiner) </p>
      </div>
            </div>
            </div>
        </section>

    )
}