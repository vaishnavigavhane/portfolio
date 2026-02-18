import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
// import './components/Portfolio.css';

export default function App() {
  return (
    <>
     <main className=" bg-gray-900 overflow-x-hidden">
       <Navbar/>
       <Header/>
       <About/>
       <Experience/>
       <Projects/>
       <Contact/>
       <Footer/>
     </main>
    </>
  )
}
