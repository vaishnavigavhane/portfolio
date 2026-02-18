import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

export function Contact() {
    return (
        <section className="relative py-8 px-6 bg-gray-900 overflow-hidden" id='Contact'>
            <div className='flex  justify-center'>
                <h2 className="text-4xl font-bold text-white mb-16">
                    Let's Build Something Great Together!
                </h2>
            </div>
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

                {/* Left Side: Modern Attractive Contact Info */}
                <div className="flex flex-col justify-center gap-6">

                    <p className="text-gray-300 mb-2">
                        I'm open to discussing projects, collaborations, or professional opportunities.
                        Feel free to reach out via email, phone, or social media.
                    </p>

                    <div className="flex flex-col gap-4">
                        {/* Email */}
                        <a
                            href="mailto:gavhanevaishnavi135@gmail.com"
                            className="flex items-center gap-4 p-3 bg-gray-800/70 rounded-xl shadow-lg hover:scale-105 transition-all"
                        >
                            <div className="bg-gradient-to-r from-text-primary to-sky-900 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl">
                                <FaEnvelope />
                            </div>
                            <span className="text-white font-medium">gavhanevaishnavi135@gmail.com</span>
                        </a>

                        {/* Phone */}
                        <a
                            href="tel:+911234567890"
                            className="flex items-center gap-4 p-3 bg-gray-800/70 rounded-xl shadow-lg hover:scale-105 transition-all"
                        >
                            <div className="bg-gradient-to-r from-text-primary to-sky-900 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl">
                                <FaPhoneAlt />
                            </div>
                            <span className="text-white font-medium">+91 9763250303</span>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/vaishnavi-gavhane-06027927b/"
                            target="_blank"
                            className="flex items-center gap-4 p-3 bg-gray-800/70 rounded-xl shadow-lg hover:scale-105 transition-all"
                        >
                            <div className="bg-gradient-to-r from-text-primary to-sky-900 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl">
                                <FaLinkedin />
                            </div>
                            <span className="text-white font-medium">LinkedIn</span>
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/vaishnavigavhane"
                            target="_blank"
                            className="flex items-center gap-4 p-3 bg-gray-800/70 rounded-xl shadow-lg hover:scale-105 transition-all"
                        >
                            <div className="bg-gradient-to-r from-text-primary to-sky-900 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl">
                                <FaGithub />
                            </div>
                            <span className="text-white font-medium">GitHub</span>
                        </a>
                    </div>
                </div>

                {/* Right Side: Glassmorphic Contact Form */}
                <form className="flex flex-col gap-6 bg-gray-800/40 backdrop-blur-md border border-gray-700 rounded-2xl p-10 shadow-2xl transition-all hover:shadow-pink-500/30">
                    <div className="relative">
                        <input
                            type="text"
                            id="name"
                            placeholder="Your Name"
                            className="peer w-full bg-gray-900/60 px-4 py-3 rounded-xl text-white placeholder-transparent outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500 transition"
                        />
                        <label
                            htmlFor="name"
                            className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-pink-500 peer-focus:text-sm"
                        >
                            Your Name
                        </label>
                    </div>

                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            placeholder="Your Email"
                            className="peer w-full bg-gray-900/60 px-4 py-3 rounded-xl text-white placeholder-transparent outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition"
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-purple-500 peer-focus:text-sm"
                        >
                            Your Email
                        </label>
                    </div>

                    <div className="relative">
                        <textarea
                            id="message"
                            rows="5"
                            placeholder="Your Message"
                            className="peer w-full bg-gray-900/60 px-4 py-3 rounded-xl text-white placeholder-transparent resize-none outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition"
                        ></textarea>
                        <label
                            htmlFor="message"
                            className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-blue-500 peer-focus:text-sm"
                        >
                            Your Message
                        </label>
                    </div>

                    <button className="mt-4 bg-gradient-to-r from-text-primary to-sky-900 text-white font-bold py-3 rounded-xl shadow-lg hover:scale-105 transform transition-all">
                        Send Message
                    </button>
                </form>
            </div>

         {/* <div className="container mt-20">
      <div className="h-[5px] w-full bg-gradient-to-r from-text-primary to-text-primary"></div>

         </div> */}
        </section>
    );
}
