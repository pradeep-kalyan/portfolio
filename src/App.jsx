import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import { TbAutomation } from "react-icons/tb";
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaWindows,
} from "react-icons/fa6";
import { DiDjango } from "react-icons/di";
import {
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiLangchain,
  SiMacos,
  SiSelenium,
  SiFigma,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaGithubSquare, FaGitSquare, FaJsSquare } from "react-icons/fa";
import Certifi from "./components/Certifi";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <section id="home">
        <Navbar />
        <Hero />
      </section>

      <section id="about" className="p-8">
        <About />
      </section>

      <section id="skills" className="p-8">
        <div className="container mx-auto text-center">
          <h2 className="text-center p-2 m-2 font-dancing-script text-white text-3xl">
            Tech Arsenal
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center items-center">
            <Skills name="Python" Icon={FaPython} />
            <Skills name="HTML" Icon={FaHtml5} />
            <Skills name="CSS" Icon={FaCss3Alt} />
            <Skills name="JavaScript" Icon={FaJsSquare} />
            <Skills name="Tailwind" Icon={SiTailwindcss} />
            <Skills name="React" Icon={FaReact} />
            <Skills name="Django" Icon={DiDjango} />
            <Skills name="MySQL" Icon={SiMysql} />
            <Skills name="MongoDB" Icon={SiMongodb} />
            <Skills name="React Native" Icon={TbBrandReactNative} />
            <Skills name="Langchain" Icon={SiLangchain} />
            <Skills name="Git" Icon={FaGitSquare} />
            <Skills name="Github" Icon={FaGithubSquare} />
            <Skills name="Windows" Icon={FaWindows} />
            <Skills name="MacOS" Icon={SiMacos} />
            <Skills name="Selenium" Icon={SiSelenium} />
            <Skills name="Automation" Icon={TbAutomation} />
            <Skills name="Figma" Icon={SiFigma} />
          </div>
        </div>
      </section>

      <section id="certifications" className="p-8">
        <Certifi />
      </section>

      <section id="projects" className="p-8">
        <Projects />
      </section>

      <section id="contact" className="p-8">
        <Contact />
      </section>
    </div>
  );
}

export default App;
