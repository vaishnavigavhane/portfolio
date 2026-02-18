export function Footer() {
  return (
    <footer className="relative bg-gray-900 py-8 px-6 text-gray-400 overflow-hidden">
      
      <div className="container flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Name & Tagline */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-white relative inline-block">
            Vaishnavi Gavhane
          </h3>
          <p className="mt-2 text-gray-400">Frontend Developer | React & Tailwind CSS</p>
        </div>

        {/* Minimal copyright */}
        <div className="text-center md:text-right text-gray-500 text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>

      {/* Animated Floating Dots
      <div className="absolute top-0 left-28 w-4 h-4 bg-pink-500 rounded-full animate-bounce-slow opacity-50"></div>
      <div className="absolute bottom-20 right-28 w-6 h-6 bg-purple-500 rounded-full animate-bounce-slow opacity-40"></div>
      <div className="absolute top-1/3 right-1/4 w-5 h-5 bg-blue-500 rounded-full animate-bounce-slow opacity-50"></div> */}
 <div className="absolute -top-20 -left-20 w-56 h-56 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

   

    </footer>
  );
}
