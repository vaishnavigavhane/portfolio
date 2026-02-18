export function Experience() {
    return (
        <section className="relative py-24 px-6 overflow-hidden" id="experience">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">

                {/* Left Badge / Role Circle */}
                <div className="lg:w-1/3 flex justify-center lg:justify-start relative">
                    <div className="w-[280px] h-[280px] rounded-[18px] 
            bg-gradient-to-br from-text-primary to-sky-950 
            shadow-[0_12px_40px_rgba(15,20,36,0.6)] 
            flex items-center justify-center 
            text-white font-bold text-[28px] 
            animate-float ">
                        Frontend
                    </div>
                </div>
                {/* Right Details */}
                <div className="lg:w-2/3 flex flex-col gap-6">

                    {/* Company & Duration */}
                    <div className="flex flex-col">
                        <p className="text-gray-300 tracking-wider">Front-End Developer | 2023 – 2025</p>
                        <h3 className="text-4xl font-bold text-white">Earthcon Infotech</h3>
                    </div>
                    {/* Description */}
                    <p className="text-gray-300">
                       Over 2.5 years at Earthcon Infotech, I worked on a wide variety of projects, from static and dynamic 
                       websites to real estate CRMs, admin panels, and e-commerce platforms. I developed high-performance
                        web applications using PHP, MySQL, HTML, CSS, and JavaScript, combining responsive front-end design 
                        with database-driven backend functionality. I led a 3-member 
                       development team, managing timelines, maintaining coding standards, and mentoring colleagues.
                    </p>
                    <p className="text-gray-300">
                        Key achievements include building a real estate CRM with automated lead management,
                         designing responsive e-commerce platforms with QR-code payments that increased mobile 
                         conversions by 25%, and creating custom CMS solutions that reduced content update times by 60%.
                          I also optimized existing CRM systems,
                         enhanced UI/UX, and integrated dynamic content and forms to boost user engagement.
                    </p>
                    {/* Skill/Neon Tags */}
                    <div className="flex flex-wrap gap-4 mt-4">
                        <span className="px-4 py-2 bg-pink-500/20 text-pink-400 rounded-full font-semibold shadow-lg ">Responsive Design</span>
                        <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full font-semibold shadow-lg ">UI/UX</span>
                        <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full font-semibold shadow-lg ">Backend Integration</span>
                        <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full font-semibold shadow-lg ">Cross-Browser Compatibility</span>
                    </div>
                    {/* Animated Accent Line */}
                    <div className="relative mt-6 h-1 bg-gradient-to-r from-text-primary to-text-primary rounded-full animate-pulse"></div>
                </div>

            </div>
        </section>
    )
}
