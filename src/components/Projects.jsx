export function Projects() {
  return (
    <section className="relative py-16 px-6 overflow-hidden" id="Projects">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          My Projects
        </h2>

        {/* Project Block */}
        <div className="relative flex flex-col lg:flex-row items-center gap-12">

          {/* Left Gradient Banner */}
          <div className="lg:w-1/2 transform -rotate-3 hover:rotate-0 transition duration-500 rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-tr from-text-primary cursor-pointer to-sky-900 w-full h-64 flex items-center justify-center text-white text-2xl font-bold ">
              <a href="bitehub.com" target="_blank">BiteHub</a>
              {/* BiteHub – Order. Enjoy. Repeat — a seamless food ordering experience. */}
            </div>
          </div>

          {/* Right Info Panel */}
          <div className="lg:w-1/2 flex flex-col gap-4">
            <h3 className="text-3xl font-bold text-white">BiteHub — Online Food Delivery Web Application</h3>
            <p className="text-gray-200">
              An interactive React.js Single Page Application (SPA) that allows users to seamlessly browse restaurants
               and explore categorized menus with dynamic filtering and real-time UI updates. Built with client-side 
                routing and REST API integration, the application demonstrates scalable component-based architecture,
               asynchronous data handling, and production deployment using Vite and GitHub Pages.
            </p>
            <p className="text-white">🔗<a href="" target="_blank"> Live Demo</a> | 💻 <a href="" target="_blank">GitHub Repository</a></p>
            {/* Tech Tags */}
            <div className="flex flex-wrap gap-3 mt-2">
              <span className="px-3 py-1 bg-pink-200/20 text-pink-300 rounded-full font-semibold shadow glow text-sm">React.js</span>
              <span className="px-3 py-1 bg-blue-200/20 text-blue-300 rounded-full font-semibold shadow glow text-sm">JavaScript (ES6+)</span>
              <span className="px-3 py-1 bg-green-200/20 text-green-300 rounded-full font-semibold shadow glow text-sm">React Router</span>
              <span className="px-3 py-1 bg-red-200/20 text-red-300 rounded-full font-semibold shadow glow text-sm">Vite</span>
              <span className="px-3 py-1 bg-purple-200/20 text-purple-300 rounded-full font-semibold shadow glow text-sm">Tailwind CSS</span>
            </div>
          </div>
        </div>

        {/* Another Project (Optional) */}
        <div className="relative flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="lg:w-1/2 transform rotate-3 hover:rotate-0 transition duration-500 rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-tr from-text-primary to-sky-900 w-full h-64 flex items-center justify-center text-white text-2xl font-bold cursor-pointer">
              Mankeshwari Agro
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col gap-4">
            <h3 className="text-3xl font-bold text-white">E-commerce Platform</h3>
            <p className="text-gray-200">
              A modern, responsive platform for fertilizers, organic inputs, and garden tools. Built from scratch with mobile-first design, seamless cart & QR payments, and a powerful admin panel.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <span className="px-3 py-1 bg-sky-200/20 text-sky-300 rounded-full font-semibold shadow glow text-sm">HTML</span>
              <span className="px-3 py-1 bg-purple-200/20 text-purple-300 rounded-full font-semibold shadow glow text-sm">CSS</span>
              <span className="px-3 py-1 bg-pink-200/20 text-pink-300 rounded-full font-semibold shadow glow text-sm">PHP</span>
              <span className="px-3 py-1 bg-purple-200/20 text-purple-300 rounded-full font-semibold shadow glow text-sm">MySQL</span>
              <span className="px-3 py-1 bg-blue-200/20 text-blue-300 rounded-full font-semibold shadow glow text-sm">JS</span>
            </div>
          </div>
        </div>

        <div className="flex  justify-center mb-1">
          <button className="bg-gradient-to-br from-text-secondary to-text-primary  text-lg text-white px-4 py-2 rounded-lg hover:bg-cyan-800">View More →</button>
        </div>
        <div className="h-[5px] w-full bg-gradient-to-r from-text-primary to-text-primary"></div>

      </div>

    </section>


  )
}