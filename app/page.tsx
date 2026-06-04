import Image from "next/image";
import Navbar from "./compoents/navbar";
import Hero from "./compoents/sections/Hero";
import About from "./compoents/sections/About";
import Projects from "./compoents/sections/Projects";
import Worked from "./compoents/sections/worked";
import Contact from "./compoents/sections/contact";
import Tech from "./compoents/sections/tech";

export default function Home() {
  return (
    <div className=" ">
      <Navbar />
      <Hero />
      <About />
      <Worked />
      <Projects />
      <Tech />
      <Contact /> 
    </div>
  );
}
