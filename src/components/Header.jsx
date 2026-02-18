export function Header() {
  return (
    <div className="container  text-white">
      <div className="grid md:grid-cols-[1fr_1fr] py-8 md:py-[5.5rem]">
        <div className="introduction flex flex-col justify-center">
          <h1 className="bg-white bg-clip-text text-transparent font-bold text-4xl md:text-5xl text-center md:text-left">Vaishnavi Gavhane</h1>
          <p className="py-2 ml-2 text-center md:text-left">Front-End Developer | React.js | JavaScript | UI/UX Enthusiast</p>
          {/* <p className=" text-gray-100 max-w-xl">
            Focused on building fast, accessible, and delightful web experiences for modern users.
          </p> */}
          <div className="py-4 flex gap-5 justify-center md:justify-start mb-10">
            <button className="bg-gradient-to-br from-text-secondary to-text-primary  text-lg text-white px-4 py-2 rounded-lg hover:bg-cyan-800"><a href="#Projects">See my work</a></button>
            <button className=" text-lg text-white px-4 py-2 rounded-lg border border-white"><a href="#Contact">Get in touch</a></button>
          </div>
        </div>
        <div className="profilePicture flex items-center justify-center">
          <div className="w-[310px] h-[310px] rounded-[18px] 
            bg-gradient-to-br from-text-primary to-text-secondary 
            shadow-[0_12px_40px_rgba(15,20,36,0.6)] 
            flex items-center justify-center 
            text-white font-bold text-[48px] 
            animate-float">
            <span className="text-7xl font-bold">VG</span>
          </div>
        </div>
      </div>
      <div className="h-[5px] w-full bg-gradient-to-r from-text-primary to-text-primary"></div>
    </div>

  )
}