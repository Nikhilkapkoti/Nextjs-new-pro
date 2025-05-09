import { AboutMe } from "./components/Aboutme";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";


export default function Home() {
  const projects = [
    {
      title: 'Project One',
      description: 'Description of project one.',
      link: 'https://github.com/yourusername/project-one',
    },
    {
      title: 'Project Two',
      description: 'Description of project two.',
      link: 'https://github.com/yourusername/project-two',
    },
  ];

  return (
    <>
    <Navbar/>
    <Header/>
    <AboutMe/>
    <Services/>
    <Projects/>
    <Contact/>
    </>
  );
}
